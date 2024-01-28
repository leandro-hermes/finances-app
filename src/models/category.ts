export class Category {
  constructor(
    public readonly id: number,
    public readonly name: string,
  ) {
  }

  toString(): string {
    return this.name;
  }
}
