import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'

const TaskListItem = ({ id, description, amount, createdAt, deadline }) => (
    <Link className="list-item" to={`/edit/${id}`}>
        <div>
            <h3 className="list-item__title">{description}</h3>
            <span className="list-item__subtitle">Date Created: {moment(createdAt).format("MMMM Do, YYYY")}</span>
        </div>
        
        {deadline != 9999999999999 && <h2 className="list-item__deadline">{moment(deadline).format("MMMM Do, YYYY")}</h2>}
        
        <h3 className="list-item__data">
            {amount === 0 ? 'N/A' : amount} 
        </h3>
    </Link>
)

export default TaskListItem
