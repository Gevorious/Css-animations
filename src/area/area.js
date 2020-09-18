import React, { Component } from 'react'
import './area.css'
import Block from '../block/block'
import { getParts,
         getShadows,
         getBackground,
         getName } from '../get-data'
import Shadow from '../shadows/shadow'

class Area extends Component {

    state = {
        animals: getParts(),
        shadows: getShadows(),
        background: getBackground(),
        name: getName(),
        currentAnimal: 0
    }

    changeAnimal = (dir) => {
        const { currentAnimal, animals } = this.state
        if(dir){
            if(currentAnimal === animals.length-1 && dir > 0){
                this.setState({ currentAnimal: 0 })
                return
            }
            if(currentAnimal === 0 && dir < 0){
                this.setState({ currentAnimal: animals.length-1 })
                return
            }
            this.setState(prevState => ({
                currentAnimal: prevState.currentAnimal + dir
            }))
        }
    }

    render() {
        const { animals, 
                currentAnimal, 
                shadows, 
                background, 
                name } = this.state

        const style = {
            backgroundColor: `${background[currentAnimal]}`
        }

        let delay = 0
        return (
            <div className="container" style={style} onWheel={(e)=>{
                let dir = null
                if(e.deltaY>0){
                    dir = 1
                }
                if(e.deltaY<0){
                    dir = -1
                }
                this.changeAnimal(dir)
                }}>
               <div className="area">
                    { 
                    animals[currentAnimal].map(data =>{
                        delay += 0.05
                    return(<Block
                            key = {data.id}
                            data = {data}
                            delay = {delay}
                    />)})
                    }
                    {
                    shadows[currentAnimal].map((shadow, index) => 
                        <Shadow 
                            key={index}
                            width={shadow.width}
                            top={shadow.top}
                            left={shadow.left}
                            opacity={shadow.opacity}
                            />)
                    }
                </div>
                <div className="name">{name[currentAnimal]}</div>
                <i className="fa fa-angle-up up" onClick={()=>this.changeAnimal(-1)}></i>
                <i className="fa fa-angle-down down" onClick={()=>this.changeAnimal(1)}></i>
            </div>
        )
    }
}

export default Area
