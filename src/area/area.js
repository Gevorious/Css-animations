import React, { Component } from 'react'
import './area.css'
import Block from '../block/block'
import getData from '../get-data'
import Shadow from '../shadows/shadow'
import getShadows from '../get-shadow'


class Area extends Component {

    state = {
        animals: getData(),
        shadows: getShadows(),
        currentAnimal: 0
    }

    changeAnimal = (dir) => {
        const { currentAnimal, animals } = this.state
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

    render() {
        const { animals, currentAnimal, shadows } = this.state
        let delay = 0
        return (
            <div className="container">
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
                <i className="fa fa-angle-up up" onClick={()=>this.changeAnimal(-1)}></i>
                <i className="fa fa-angle-down down" onClick={()=>this.changeAnimal(1)}></i> 
            </div>
        )
    }
}

export default Area
