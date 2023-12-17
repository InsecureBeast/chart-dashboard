export class Period {
  startDate: Date | null;
  endDate: Date | null;
  
  constructor() {
    const now = new Date();
    this.startDate = now;
    this.endDate = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() - 7,
    );;
  }
}