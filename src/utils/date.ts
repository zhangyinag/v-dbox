import fecha from 'fecha'

fecha.masks.default = 'YYYY/MM/DD HH:mm:ss'
fecha.masks.shortDate = 'YYYY/MM/DD'

const format = fecha.format
const parse = fecha.parse

export {format, parse}

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

export function isSameMonth (date1: Date| null, date2: Date| null): boolean {
  if (!date1 || !date2) return false
  return date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth()
}

export function isSameDay (date1: Date| null, date2: Date| null): boolean {
  return isSameMonth(date1, date2) &&
    (!!date1 && !!date2) &&
    date1.getDate() === date2.getDate()
}

export function isToday (date: Date): boolean {
  return isSameDay(date, new Date())
}


export function addYear (date: Date, n: number): Date {
  let newDate = new Date(date)
  newDate.setFullYear(date.getFullYear() + n)
  return newDate
}

export function addMonth (date: Date, n: number): Date {
  let newDate = new Date(date)
  newDate.setMonth(date.getMonth() + n)
  return newDate
}