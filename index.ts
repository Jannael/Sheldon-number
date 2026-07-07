// Sheldon number has the following conditions:
// 1. it is a prime number
// 2. its mirror is also a prime number
// 3. the mirror of the position of the number in the prime numbers is the mirror of the mirror of the position of the number in the prime numbers
// 4. the position of the number in the prime numbers is the product of its digits
// 5. it is a palindrome number in binary

// EXAMPLE: 73
// 1. 73 is a prime number -> 21 in the position of prime numbers
// 2. 37 it's mirror -> 12 in the position of prime numbers
// 3. 12 mirror is 21
// 4. 21 is the product of multiply 7 * 3
// 5. 73 is a palindrome number in binary -> 1001001

export function generateCriba(limit: number) {
	// we create an array with the length of the limit + 1, and fill it with true values
	// the index of the array represents the number, and the value represents if it's prime or not
	let sieve = Array.from({ length: limit + 1 }, () => true)
	sieve[0] = sieve[1] = false // 0 and 1 are not prime numbers

	// algorithm => https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
	for (let i = 2; i * i <= limit; i++) {
		if (sieve[i]) {
			for (let j = i * i; j <= limit; j += i) {
				sieve[j] = false
			}
		}
	}

	const primes = sieve.map((isPrime, index) => {
		if (isPrime) return index
	})

	return primes.filter(Boolean)
}

const LIMIT = 1_000_000
const criba = generateCriba(LIMIT)

export function isPrime(num: number) {
	const index = criba.indexOf(num)
	return index !== -1 ? index + 1 : null
}

export function isSheldonNumber(num: number) {
	const primePosition = isPrime(num)
	if (!primePosition) return

	// both mirror and main must be prime numbers
	const primeMirror = Number(getMirror(num))
	const mirrorPosition = isPrime(primeMirror)
	if (!mirrorPosition) return

	// prime mirror position, and the mirror of the mirror prime mirror position must be the same
	if (mirrorPosition.toString() !== getMirror(primePosition)) return

	let productOfPrimeDigits = 1
	num
		.toString()
		.split('')
		.forEach((v) => (productOfPrimeDigits *= Number(v)))

	// the product of the digits in the main number must the same as the position of the same number
	if (productOfPrimeDigits !== primePosition) return

	// the main number in binary must be a palindrome
	const binary = num.toString(2)
	return binary === binary.split('').reverse().join('')
}

export function getMirror(num: number) {
	return num.toString().split('').reverse().join('')
}

const sheldonNumbers = []
for (let i = 0; i <= LIMIT; i++) {
	if (isSheldonNumber(i)) sheldonNumbers.push(i)
}

console.log(sheldonNumbers)
