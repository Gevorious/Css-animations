import React from 'react'
import './block.css'

const Block = ({ data, delay }) => {
    const { color, sides, pos, rot, dir, id } = data

    const style = {
        borderTop: `${sides[0]}px solid transparent`,
        borderRight: `${sides[1]}px solid transparent`,
        borderBottom: `${sides[2]}px solid transparent`,
        borderLeft: `${sides[3]}px solid transparent`,

        top: `${pos[0]}px`,
        left:`${pos[1]}px`,
        transform: `rotate(${rot}deg)`,
        transitionDelay: `${delay}s`,
    }

    style[`border${dir}Color`] = color

    return (
        <div className="block" style={style} id={id}>
            
        </div>
    )
}

export default Block
