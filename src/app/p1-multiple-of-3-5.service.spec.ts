import { TestBed } from '@angular/core/testing';

import { P1MultipleOf35Service } from './p1-multiple-of-3-5.service';

describe('P1MultipleOf35Service', () => {
  let service: P1MultipleOf35Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(P1MultipleOf35Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return correct result for the end range 10', () => {
    const expected = 23;
    const actual = service.getResult(10);
    expect(expected).toEqual(actual);
  });
});
