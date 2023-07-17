import React from 'react'

function Container({ children }) {
    return (
        <div className="container-fluid px-5">
            {children}
        </div>
    )
}

export default Container