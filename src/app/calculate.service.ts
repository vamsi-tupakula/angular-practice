import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculateService {
  constructor() {}

  addTwoNums(a: number, b: number): number {
    return a + b;
  }

  getProducts(): string[] {
    return ['iPhone', 'iMac', 'iPods'];
  }
}
