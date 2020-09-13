import React, { Component } from 'react'
import './area.css'
import Block from '../block/block'
import getData from '../get-data.js'

export class Area extends Component {

    state = {
        animals: getData(),
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
        const { animals, currentAnimal } = this.state
        let delay = 0
        return (
            <div className="area">
                { 
                animals[currentAnimal].map(data =>{
                    delay += 0.04
                return(<Block
                        key = {data.id}
                        data = {data}
                        delay = {delay}
                />)})
                }
                <button onClick={()=>this.changeAnimal(-1)}>Prev</button>
                <button onClick={()=>this.changeAnimal(1)}>Next</button>
            </div>
        )
    }
}

export default Area
