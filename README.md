# Sheldon Number

A small TypeScript script that searches for **Sheldon numbers** up to 10,000,000.

A Sheldon number is a prime number that satisfies a quirky set of rules inspired by the number **73** in *The Big Bang Theory* (Season 4, Episode 10), Sheldon's favorite number. To be a Sheldon number, a prime must meet all of the following conditions:

- It is a **prime number**.
- Its **mirror** (digits reversed) is also a **prime number**.
- The position of the number among the primes, when mirrored, equals the position of its mirror among the primes.
- Its position in the sequence of prime numbers equals the **product of its digits**.
- It is a **palindrome in binary**.

### Example: 73

- 73 is prime, sitting at position **21** in the prime sequence.
- Its mirror, **37**, is also prime, at position **12**.
- 12 mirrored is 21, matching the position of 73.
- 7 × 3 = **21**, which is 73's position in the primes.
- 73 in binary is `1001001`, which is a palindrome.

All five conditions hold, so 73 is a Sheldon number.

## How it works

The script uses a [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) to precompute all primes up to 10,000,000, then iterates through every number in that range and checks each Sheldon condition. Any number that passes all checks gets collected, and the full list is printed to the console.

The sieve is generated once and reused via the `criba` array, so checking primality becomes a simple lookup. The remaining conditions (mirror, position symmetry, digit product, and binary palindrome) are computed directly per candidate.

## Running it

The project uses [Bun](https://bun.sh):

```sh
bun run index.ts
```

The output will be the array of all Sheldon numbers found within the limit.
