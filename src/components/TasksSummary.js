import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import numeral from 'numeral'
import selectTasks from '../selectors/tasks'
import selectTasksTotal from '../selectors/tasks-total'

export const TasksSummary = ({ taskCount, tasksTotal }) => {
    const taskWord = taskCount === 1 ? 'task' : 'tasks'
    const hourWord = tasksTotal === 1 ? 'hour' : 'hours'
    const formattedTasksTotal = tasksTotal
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{taskCount}</span> {taskWord} taking <span>{formattedTasksTotal}</span> {hourWord}</h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add to the Daily Grind</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleTasks = selectTasks(state.tasks, state.filters)

    return {
        taskCount: visibleTasks.length,
        tasksTotal: selectTasksTotal(visibleTasks)
    }
}

export default connect(mapStateToProps)(TasksSummary)
