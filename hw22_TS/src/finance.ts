export namespace Finance {
  export class LoanCalculator {
    sum: number;
    rate: number;
    years: number;
    constructor(sum: number, rate: number, years: number) {
      this.rate = rate;
      this.sum = sum;
      this.years = years;
    }
    calcMonthPayment(): number {
      const monthlyRate = this.rate / 100 / 12;
      const months = this.years * 12;

      if (monthlyRate === 0) {
        return this.sum / months;
      }
      return Number(
        (
          (this.sum * monthlyRate * Math.pow(1 + monthlyRate, months)) /
          (Math.pow(1 + monthlyRate, months) - 1)
        ).toFixed(2)
      );
    }
  }
  export class TaxCalculator {
    income: number;
    taxRate: number;
    constructor(income: number, taxRate: number) {
      this.income = income;
      this.taxRate = taxRate;
    }
    calcTax(): number {
      return this.income * (this.taxRate / 100);
    }
  }
}
