export function generateFibonacci(num: number): number[] {
  const fibonacciArr: number[] = [0, 1];
  for (let i = 2; ; i++) {
    const prev1: number | undefined = fibonacciArr[i - 1];
    const prev2: number | undefined = fibonacciArr[i - 2];

    if (prev1 === undefined || prev2 === undefined) {
      throw new Error();
    }

    const next: number = prev1 + prev2;
    if (next > num) break;

    fibonacciArr.push(next);
  }

  return fibonacciArr;
}

export function generatePrimeNumbers(num: number): number[] {
  const primes: number[] = [];

  for (let i = 2; i <= num; i++) {
    let isPrime: boolean = true;

    for (let p = 2; p <= Math.sqrt(i); p++) {
      if (i % p === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      primes.push(i);
    }
  }
  return primes;
}
