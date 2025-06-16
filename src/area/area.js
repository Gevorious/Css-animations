import { useRef, useState } from 'react'
import {data} from '../animals'
import Block from '../block/block'
import Shadow from '../shadows/shadow'
import './area.css'

const Area = () => {

const [index, setIndex] = useState(0);
    const debounceRef = useRef(null);

    const changeAnimal = (dir) => {
        if(dir){
            if(index === data.length - 1 && dir > 0){
                setIndex(0)
                return
            }
            if(index === 0 && dir < 0){
                setIndex(data.length-1)
                return
            }
            setIndex(prev => (prev + dir))
        }
    }

    const wheelHandler = (e) => {
    let dir = null;

    if (e.deltaY > 0) dir = 1;
    if (e.deltaY < 0) dir = -1;

    if (dir === null) return;

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      changeAnimal(dir);
    }, 150);
  };

    const { parts, shadows, background, name } = data[index];

    const style = {
        backgroundColor: background
    }

    let delay = 0

    return (
        <div className="container" style={style} onWheel={wheelHandler}>
                <div className="area">
                    { 
                    parts.map(data =>{
                        delay += 0.05
                        return(<Block
                            key = {data.id}
                            data = {data}
                            delay = {delay}
                        />)
                    })
                    }
                    {
                    shadows.map((shadow, index) => 
                        <Shadow 
                            key={index}
                            width={shadow.width}
                            top={shadow.top}
                            left={shadow.left}
                            opacity={shadow.opacity}
                        />
                    )
                    }
                </div>
            <div className="name">{name}</div>
            <i className="fa fa-angle-up up" onClick={()=>changeAnimal(-1)}></i>
            <i className="fa fa-angle-down down" onClick={()=>changeAnimal(1)}></i>
        </div>
    )
}

export default Area
