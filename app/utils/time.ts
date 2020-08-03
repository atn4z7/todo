import moment from 'moment'

export const isToday = (date: string) => moment().isSame(moment(date), 'day')

export const isTomorrow = (date: string) =>
  moment().add(1, 'days').isSame(moment(date), 'day')

export const isPast = (date: string) => moment().isAfter(moment(date), 'day')

export const compareDates = (date1: string, date2: string) => {
  if (moment(date1).isAfter(moment(date2))) {
    return 1
  }

  if (moment(date1).isBefore(moment(date2))) {
    return -1
  }

  return 0
}

export const getFormattedDate = (date: string) => {
  if (isToday(date)) {
    return 'Today'
  }

  if (isTomorrow(date)) {
    return 'Tomorrow'
  }

  if (isPast(date)) {
    return 'Past'
  }

  return moment(date).format('ddd, MMM D')
}

export const getFormattedDateTime = (date: string) => {
  return date ? moment(date).format('ddd, MMM D, h:mm A') : ''
}
