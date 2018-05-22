import moment from 'moment'

//Get visible tasks
const getVisibleTasks = (tasks, { text, sortBy, startDate, endDate }) => {
    return tasks.filter((task) => {
        const deadlineMoment = moment(task.deadline)
        const startDateMatch = startDate ? startDate.isSameOrBefore(deadlineMoment, 'day') : true
        const endDateMatch = endDate ? endDate.isSameOrAfter(deadlineMoment, 'day') : true
        const textMatch = task.description.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'amount') {
            return a.amount > b.amount ? -1 : 1
        } else if (sortBy === 'deadline') {
            return a.deadline > b.deadline ? 1 : -1
        }
    })
}

export default getVisibleTasks
