import React from 'react'
import moment from 'moment'
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

export default class TaskForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            description: props.task ? props.task.description : '',
            note: props.task ? props.task.note : '',
            amount: props.task ? (props.task.amount).toString() : '',
            createdAt: props.task ? moment(props.task.createdAt) : moment(),
            deadline: props.task ? (props.task.deadline ? moment(props.task.deadline) : null) : null,
            calenderFocused: false,
            error: ''
        }
    }

    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }
    onNoteChange = (e) => {
        const note = e.target.value
        this.setState(() => ({ note }))
    }
    onAmountChange = (e) => {
        const amount = e.target.value
        if (!amount || amount.match(/^[0-9]*$/)) {
            this.setState(() => ({ amount }))
        }
    }
    onDateChange = (deadline) => {
        this.setState(() => ({ deadline }))
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }))
    }
    onSubmit = (e) => {
        e.preventDefault()

        if (!this.state.description) {
            this.setState(() => ({ error: 'Please provide a description.' }))
        } else if (!this.state.createdAt) {
            this.setState(() => ({ error: 'Please enter a valid date' }));
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                description: this.state.description,
                note: this.state.note,
                amount: this.state.amount ? parseFloat(this.state.amount, 10) : 0,
                createdAt: this.state.createdAt.valueOf(),
                deadline: this.state.deadline ? this.state.deadline.valueOf() : null
            })
        }
    }
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error" >{this.state.error}</p>}
                <input className="text-input" type="text" placeholder="Description*" autoFocus value={this.state.description} onChange={this.onDescriptionChange} />
                <input className="text-input" type="text" placeholder="Approx. Hours" value={this.state.amount} onChange={this.onAmountChange} />
                <SingleDatePicker
                    date={this.state.deadline} 
                    onDateChange={this.onDateChange} 
                    focused={this.state.calenderFocused} 
                    onFocusChange={this.onFocusChange}
                    placeholder="Deadline"
                    showClearDate={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    block
                />
                <textarea className="text-area" placeholder="Add a note for your task (optional)" value={this.state.note} onChange={this.onNoteChange} ></textarea>
                <div>
                    <button className="button">Chisel Task</button>
                    <h5 className="form-footer">* = required field</h5>
                </div>
            </form>
        )
    }
}
