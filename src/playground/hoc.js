// Higher Order Component (HOC) - A component that renders another component
// Reuse Code, Render Hijacking, prop manipulation, and abstract state

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The Info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This is private info. Please don't share!</p> }
            <WrappedComponent {...props}/>
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuthenticated ? (
                <WrappedComponent {...props} />
            ) : (
                <p>Please login to view the information.</p>
            )}
        </div>
    )
}

const AuthInfo = requireAuthentication(Info)

const appRoot = document.querySelector('#app')
//ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details" />, appRoot)
ReactDOM.render(<AuthInfo isAuthenticated={true} info="These are the details" />, appRoot)
