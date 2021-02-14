import { TestBed } from '@angular/core/testing';

import { P2EvenFibonacciService } from './p2-even-fibonacci.service';

describe('P2EvenFibonacciService', () => {
  let service: P2EvenFibonacciService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(P2EvenFibonacciService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct result for the end range 44', () => {
    const expected = 44;
    const actual = service.getEvenFibonacciNumbersSum(89);
    expect(expected).toEqual(actual);
  });
});
