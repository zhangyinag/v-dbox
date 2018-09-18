export function getDaysOfMonth (date: Date): number {
  return new Date(date.getFullYear(), date.getMonth() + 1).getDate()
}

export function getRecentDayOfWeek (date: Date, dayOfWeek: number, next: boolean = false): Date {
  if (date.getDay() === dayOfWeek) return new Date(date)
  let newDate = new Date(date)
  let interval = 0
  if (!next) {
    interval = -(date.getDay() - dayOfWeek > 0 ? date.getDay() - dayOfWeek : date.getDay() + 7 - dayOfWeek)
  } else {
    interval = dayOfWeek - date.getDay() > 0 ? dayOfWeek - date.getDay() : dayOfWeek + 7 - date.getDay()
  }
  newDate.setDate(date.getDate() + interval)
  return newDate
}