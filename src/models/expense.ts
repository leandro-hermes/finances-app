import { Category } from "./category";

export class Expense {
  constructor(
    public readonly id: number,
    public readonly amount: number,
    public readonly date: Date,
    public readonly category: Category | null,
    public readonly description?: string,
    public readonly details?: string
  ) {
  }

  public setAmount(amount: number): Expense {
    return new Expense(this.id, amount, this.date, this.category, this.description, this.details);
  }

  public setDate(date: Date): Expense {
    return new Expense(this.id, this.amount, date, this.category, this.description, this.details);
  }

  public setCategory(category: Category | null): Expense {
    return new Expense(this.id, this.amount, this.date, category, this.description, this.details);
  }

  public setDescription(description: string): Expense {
    return new Expense(this.id, this.amount, this.date, this.category, description, this.details);
  }

  public setDetails(details: string): Expense {
    return new Expense(this.id, this.amount, this.date, this.category, this.description, details);
  }
}
