export default class Counter {
  private static instance: Counter;
  private _count;

  private constructor() {
    this._count = 0;
  }

  public static getInstance(): Counter {
    if (!Counter.instance) {
      Counter.instance = new Counter();
    }
    return Counter.instance;
  }
  public getCount(): number {
    return this._count;
  }
  public increment(): void {
    this._count = this._count + 1
  }
  public decrement(): void {
    this._count = this._count - 1;
  }
}