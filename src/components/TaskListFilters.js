import React from 'react'
import { connect } from 'react-redux'
import { setTextFilter, sortByDate, sortByAmount, sortByDeadline, setStartDate, setEndDate } from '../actions/filters';
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates'
import 'react-dates/lib/css/_datepicker.css'

class TaskListFilters extends React.Component {
    state = {
        calenderFocused: null
    }
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }
    onFocusChange = (calenderFocused) => {
        this.setState(() => ({ calenderFocused }))
    }
    render() {
        return(
            <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input placeholder="Search tasks" className="text-input" type='text' value={this.props.filters.text} onChange={(e) => {
                            this.props.dispatch(setTextFilter(e.target.value))
                        }}/>
                    </div>
                    <div className="input-group__item">
                        <select className="select" value={this.props.filters.sortBy} onChange={(e) => {
                            if (e.target.value === 'date') {
                                this.props.dispatch(sortByDate())
                            } else if (e.target.value === 'amount') {
                                this.props.dispatch(sortByAmount())
                            } else if (e.target.value === 'deadline') {
                                this.props.dispatch(sortByDeadline())
                            }
                        }}>
                            <option value="date">Date Created</option>
                            <option value="deadline">Deadline</option>
                            <option value="amount">Hours</option>
                        </select>
                    </div>
                    <div className="input-group__date">
                        <DateRangePicker 
                            startDate={this.props.filters.startDate}
                            startDateId="1"
                            endDate={this.props.filters.endDate}
                            endDateId="2"
                            onDatesChange={this.onDatesChange}
                            focusedInput={this.state.calenderFocused}
                            onFocusChange={this.onFocusChange}
                            showClearDates={true}
                            numberOfMonths={1}
                            isOutsideRange={() => false}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(TaskListFilters)
