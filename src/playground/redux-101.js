import { createStore } from 'redux'

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({ 
    type: 'INCREMENT',
    incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
})

const resetCount = () => ({
    type: 'RESET'
})

const setCount = ({ countSet } = {}) => ({
    type: 'SET',
    countSet
})

const countReducer = (state = { count: 0 }, action) => {
    const { count } = state
    const { type, incrementBy, decrementBy, countSet } = action
    
    switch (type) {
        case 'INCREMENT':
            return {
                count: count + incrementBy
            }
            break;
        
        case 'DECREMENT':
            return {
                count: count - decrementBy
            }
            break;
        
        case 'RESET':
            return {
                count: count - count
            }
            break;

        case 'SET':
            return {
                count: countSet
            }
            break;
    
        default:
            return state
            break;
    }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => {
    console.log(store.getState())
})

//Increment the count by 5
store.dispatch(
    incrementCount({ incrementBy: 5 })
)

//Increment the count by 1 (default)
store.dispatch(
    incrementCount()
)

//Decrement the count by 10
store.dispatch(
    decrementCount({ decrementBy: 10 })
)

//Reset the count
store.dispatch(
    resetCount()
)

//Set the count to 101
store.dispatch(
    setCount({ countSet: 101 })
)
