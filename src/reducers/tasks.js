const tasksReducerDefaultState = []

const tasksReducer = (state = tasksReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state,
                action.task
            ]
            break
    
        case 'REMOVE_TASK':
            return state.filter(({ id }) => id !== action.id)
            break
        
        case 'EDIT_TASK':
            return state.map((task) => {
                if (task.id === action.id) {
                    return {
                        ...task,
                        ...action.updates
                    }
                } else {
                    return task
                }
            })
            break

        case 'SET_TASKS':
            return action.tasks
            break
    
        default:
            return state
            break
    }
}

export default tasksReducer
