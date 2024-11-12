export class SeededRandom {
  private seed: number;
  private static instance: SeededRandom;

  private constructor(seed: number) {
    this.seed = seed;
  }

  public static getInstance(seed: number = 42): SeededRandom {
    if (!SeededRandom.instance) {
      SeededRandom.instance = new SeededRandom(seed);
    }
    return SeededRandom.instance;
  }

  public next(): number {
    const x = Math.sin(this.seed++) * 10000;
    return x - Math.floor(x);
  }

  public range(min: number, max: number): number {
    return min + this.next() * (max - min);
  }
}