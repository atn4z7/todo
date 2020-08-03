import { Todo } from 'types'
import { compareDates } from 'utils/time'

export const generateSectionListData = (data: Todo[]) => {
  const reducer = (accumulator: { [index: string]: Todo[] }, todo: Todo) => {
    const { dueDate } = todo
    const title = dueDate

    if (!accumulator[title]) {
      accumulator[title] = []
    }

    accumulator[title].push(todo)

    return accumulator
  }

  const dateMap = data.reduce(reducer, {})

  const result: { title: string; data: Todo[] }[] = []

  Object.keys(dateMap)
    .sort(compareDates)
    .forEach((date) => {
      result.push({ title: date, data: dateMap[date] })
    })

  return result
}
