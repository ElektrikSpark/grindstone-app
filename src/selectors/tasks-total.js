
export default (tasks) => {
    return tasks
        .map((task) => task.amount)
        .reduce((sum, value) => sum + value, 0)
}
