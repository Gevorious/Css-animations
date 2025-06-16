import './shadow.css'

const Shadow = ({width, left, top, opacity}) => {
    const style = {
        width: `${width}px`,
        transform: `translate(${left}px, ${top}px)`,
        opacity: `${opacity}`
    }
    return (
        <div className="shadow" style={style} />   
    )
}

export default Shadow