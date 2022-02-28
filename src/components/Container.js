import React from 'react'

function Container({ heading, children }) {
    return (
        <div className='main'>
            <div className='header'>
                {heading}
            </div>
            {children}
        </div>
    )
}

export default Container