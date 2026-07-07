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
