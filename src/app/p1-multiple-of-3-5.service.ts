import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class P1MultipleOf35Service {
  constructor() {}

  public getResult(endRange: number) {
    const multipleType1 = 3;
    const multipleType2 = 5;

    let sum = 0;

    for (let i = 0; i < endRange; i++) {
      if (i % multipleType1 === 0 || i % multipleType2 === 0) {
        sum = sum + i;
      }
    }
    return sum;
  }
}
