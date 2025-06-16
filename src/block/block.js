import './block.css'

const Block = ({ data, delay }) => {
    const { color, sides, pos, rot, dir, id } = data

    const style = {
        borderWidth: `${sides[0]}px ${sides[1]}px ${sides[2]}px ${sides[3]}px`,
        transform: `translate(${pos[1]}px, ${pos[0]}px) rotate(${rot}deg)`,
        transitionDelay: `${delay}s`,
    }

    style[`border${dir}Color`] = color

    return (
        <div className="block" style={style} id={id}>
            
        </div>
    )
}

export default Block
