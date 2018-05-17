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
            amount: props.task ? (props.task.amount / 100).toString() : '',
            createdAt: props.task ? moment(props.task.createdAt) : moment(),
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
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }))
        }
    }
    onDateChange = (createdAt) => {
        this.setState(() => ({ createdAt }))
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }))
    }
    onSubmit = (e) => {
        e.preventDefault()

        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: 'Please provide a description and an amount.' }))
        } else if (!this.state.createdAt) {
            this.setState(() => ({ error: 'Please enter a valid date' }));
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                description: this.state.description,
                note: this.state.note,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
            })
        }
    }
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form__error" >{this.state.error}</p>}
                <input className="text-input" type="text" placeholder="Description" autoFocus value={this.state.description} onChange={this.onDescriptionChange} />
                <input className="text-input" type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange} />
                <SingleDatePicker
                    date={this.state.createdAt} 
                    onDateChange={this.onDateChange} 
                    focused={this.state.calenderFocused} 
                    onFocusChange={this.onFocusChange}
                    showClearDate={true}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    block
                />
                <textarea className="text-area" placeholder="Add a note for your task (optional)" value={this.state.note} onChange={this.onNoteChange} ></textarea>
                <div>
                    <button className="button">Save Task</button>
                </div>
            </form>
        )
    }
}
