const divisors = {
  days: 86400000,
  hours: 3600000,
  minutes: 60000,
  seconds: 1000,
}

const round = (value: number): number => {
  return parseFloat(value.toFixed(1))
}

export default class DateDiff {
  date1: Date
  date2: Date
  difference: number

  constructor(date1: Date, date2: Date) {
    this.date1 = date1
    this.date2 = date2
    this.difference = Math.floor(date1.getTime() - date2.getTime())
  }

  days = (): number => {
    return round(this.difference / divisors.days)
  }

  weeks = (): number => {
    return round(this.days() / 7)
  }

  hours = (): number => {
    return round(this.difference / divisors.hours)
  }

  minutes = (): number => {
    return round(this.difference / divisors.minutes)
  }

  seconds = (): number => {
    return round(this.difference / divisors.seconds)
  }

  months = (): number => {
    let ret = (this.date1.getFullYear() - this.date2.getFullYear()) * 12
    ret += this.date1.getMonth() - this.date2.getMonth()
    const endOfMonth = this.endOfMonth(this.date2).getDate()
    ret += (this.date1.getDate() / endOfMonth) - (this.date2.getDate() / endOfMonth)
    return round(ret)
  }

  years = (): number => {
    let ret = (this.date1.getFullYear() - this.date2.getFullYear())
    ret += (this.dayOfYear(this.date1) - this.dayOfYear(this.date2)) / this.daysInYear(this.date2)
    return round(ret)
  }

  endOfMonth = (date: Date): Date => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0)
  }

  dayOfYear = (date: Date): number => {
    return (date.getTime() - this.beginOfYear(date).getTime()) / divisors.days
  }

  daysInYear = (date: Date) => {
    return (this.endOfYear(date).getTime() - this.beginOfYear(date).getTime()) / divisors.days
  }

  beginOfYear = (date: Date): Date => {
    return new Date(date.getFullYear(), 0, 0)
  }

  endOfYear = (date: Date): Date => {
    return new Date(date.getFullYear() + 1, 0, 0)
  }

}

declare global {
  interface DateConstructor {
    diff(date1: Date, date2: Date): DateDiff
  }
}

Date.diff = (date1: Date, date2: Date) => new DateDiff(date1, date2)
