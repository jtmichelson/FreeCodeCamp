/* Sum all the prime numbers up to and including the provided number.
A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.
The provided number may not be a prime. */

function getPrimes(max) {
    var sieveOfEratosthenes = [];
    var primes = [];
      for (var i = 2; i <= max; ++i) {
      if (!sieveOfEratosthenes[i]) {
        primes.push(i);
        for (var j = i << 1; j <= max; j += i) {
          sieveOfEratosthenes[j] = true;
        }
      }
    }
    return primes;
  }
  
  function sumPrimes(num) {
    var sum = 0;
    var primes = getPrimes(num);
    for (var i = 0; i < primes.length; i++) {
      sum += primes[i];
    }
    return sum;
  }
  
  sumPrimes(10);