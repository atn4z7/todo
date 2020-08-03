import { TodoStatus } from 'types'
import { reducer, actions } from './index'

const { add, edit, remove } = actions

const emptyObj = { type: 'invalid' }

const initialState = {
  byId: {},
  allIds: []
}

describe('preconditions', () => {
  it('should return correct initial state', () => {
    expect(reducer(undefined, emptyObj)).toEqual(initialState)
  })
})

describe(add.type, () => {
  it('should add task successfully', () => {
    const testState = {
      byId: {
        '1': {
          id: '1',
          title: 'Make a presentation',
          description: 'asdasdasdsa',
          status: TodoStatus.Pending,
          dueDate: '2020-08-03T15:16:11.794Z'
        }
      },
      allIds: ['1']
    }

    const testAction = add({
      id: '2',
      title: 'Some Title',
      description: 'Some Description',
      dueDate: '2020-08-06T15:16:11.794Z'
    })

    const expectedState = {
      byId: {
        '1': {
          id: '1',
          title: 'Make a presentation',
          description: 'asdasdasdsa',
          status: TodoStatus.Pending,
          dueDate: '2020-08-03T15:16:11.794Z'
        },
        '2': {
          id: '2',
          title: 'Some Title',
          description: 'Some Description',
          status: TodoStatus.Pending,
          dueDate: '2020-08-06T15:16:11.794Z'
        }
      },
      allIds: ['1', '2']
    }

    expect(reducer(testState, testAction)).toEqual(expectedState)
  })

  it("should not add task when specified task's ID already exists", () => {
    const testState = {
      byId: {
        '1': {
          id: '1',
          title: 'Make a presentation',
          description: 'asdasdasdsa',
          status: TodoStatus.Pending,
          dueDate: '2020-08-03T15:16:11.794Z'
        }
      },
      allIds: ['1']
    }

    const testAction = add({
      id: '1',
      title: 'Some Title',
      description: 'Some Description',
      dueDate: '2020-08-06T15:16:11.794Z'
    })

    const expectedState = testState
    expect(reducer(testState, testAction)).toEqual(expectedState)
  })
})

describe(edit.type, () => {
  it('should edit task successfully', () => {
    const testState = {
      byId: {
        '1': {
          id: '1',
          title: 'Make a presentation',
          description: 'asdasdasdsa',
          status: TodoStatus.Pending,
          dueDate: '2020-08-03T15:16:11.794Z'
        }
      },
      allIds: ['1']
    }

    const testAction = edit({
      id: '1',
      title: 'Some Title',
      description: 'Some Description',
      dueDate: '2020-08-06T15:16:11.794Z',
      status: TodoStatus.Completed
    })

    const expectedState = {
      byId: {
        '1': {
          id: '1',
          title: 'Some Title',
          description: 'Some Description',
          dueDate: '2020-08-06T15:16:11.794Z',
          status: 'completed'
        }
      },
      allIds: ['1']
    }

    expect(reducer(testState, testAction)).toEqual(expectedState)
  })

  it('should not edit any task when specified task does not exist', () => {
    const testState = {
      byId: {
        '1': {
          id: '1',
          title: 'Make a presentation',
          description: 'asdasdasdsa',
          status: TodoStatus.Pending,
          dueDate: '2020-08-03T15:16:11.794Z'
        }
      },
      allIds: ['1']
    }

    const testAction = edit({
      id: '2',
      title: 'Some Title',
      description: 'Some Description',
      dueDate: '2020-08-06T15:16:11.794Z',
      status: TodoStatus.Completed
    })

    const expectedState = testState
    expect(reducer(testState, testAction)).toEqual(expectedState)
  })
})

describe(remove.type, () => {
  it('should remove task successfully', () => {
    const testState = {
      byId: {
        '1': {
          id: '1',
          title: 'Make a presentation',
          description: 'asdasdasdsa',
          status: TodoStatus.Pending,
          dueDate: '2020-08-03T15:16:11.794Z'
        }
      },
      allIds: ['1']
    }

    const testAction = remove({ id: '1' })

    const expectedState = initialState

    expect(reducer(testState, testAction)).toEqual(expectedState)
  })

  it('should not remove anything when specified task does not exist', () => {
    const testState = {
      byId: {
        '1': {
          id: '1',
          title: 'Make a presentation',
          description: 'asdasdasdsa',
          status: TodoStatus.Pending,
          dueDate: '2020-08-03T15:16:11.794Z'
        },
        '2': {
          id: '2',
          title: 'Make a presentation 2',
          description: 'asdasdasdsa',
          status: TodoStatus.Completed,
          dueDate: '2020-08-04T15:16:11.794Z'
        }
      },
      allIds: ['1', '2']
    }

    const testAction = remove({ id: '3' })

    const expectedState = testState
    expect(reducer(testState, testAction)).toEqual(expectedState)
  })
})
