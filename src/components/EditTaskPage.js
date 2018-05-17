import React from 'react'
import TaskForm from './TaskForm'
import { connect } from 'react-redux'
import { startEditTask, startRemoveTask } from '../actions/tasks'

export class EditTaskPage extends React.Component {
    onSubmit = (task) => {
        this.props.startEditTask(this.props.task.id, task)
        this.props.history.push('/dashboard')
    }
    onRemove = () => {
        this.props.startRemoveTask({ id: this.props.task.id })
        this.props.history.push('/dashboard')
    }
    render() {
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Task</h1>
                    </div>   
                </div>
                <div className="content-container">
                    <taskForm 
                        task={this.props.task}
                        onSubmit={this.onSubmit}
                    />
                    <button className="button button--secondary" onClick={this.onRemove}>Remove Task</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        task: state.tasks.find((task) => task.id === props.match.params.id)
        }
    }

const mapDispatchToProps = (dispatch) => ({
    startEditTask: (id, task) => dispatch(startEditTask(id, task)),
    startRemoveTask: (data) => dispatch(startRemoveTask(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditTaskPage)
