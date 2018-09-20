export default interface Lang {
  greet: {
    description: string
  }
  select: {
    noDataText: string
  }
  calendar: {
    weeks: [string, string, string, string, string, string, string],
    year: string
    month: string
  }
}
