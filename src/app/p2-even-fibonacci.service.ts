import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class P2EvenFibonacciService {
  constructor() {}

  getEvenFibonacciNumbersSum(endRange: number): number {
    let firstFibonacciNumber = 0;
    let secondFibonacciNumber = 1;

    let nextFibonacciNumber = 0;
    let sumFibonacciNumber = 0;

    while (nextFibonacciNumber < endRange) {
      nextFibonacciNumber = firstFibonacciNumber + secondFibonacciNumber;

      if (nextFibonacciNumber % 2 == 0) {
        sumFibonacciNumber = sumFibonacciNumber + nextFibonacciNumber;
      }

      firstFibonacciNumber = secondFibonacciNumber;
      secondFibonacciNumber = nextFibonacciNumber;
    }
    return sumFibonacciNumber;
  }
}
