import React from 'react'
import './shadow.css'

const Shadow = ({width, left, opacity}) => {
    const style = {
        width: `${width}px`,
        left: `${left}%`,
        opacity: `${opacity}`
    }
    return (
        <div className="shadow" style={style}>
            
        </div>
    )
}

export default Shadow