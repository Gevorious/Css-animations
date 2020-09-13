import React, { Component } from 'react'
import './area.css'
import Block from '../block/block'
import getData from '../get-data.js'

export class Area extends Component {

    state = {
        animals: getData(),
        currentAnimal: 0
    }

    changeAnimal = () => {
        this.setState(prevState => ({
            currentAnimal: prevState.currentAnimal++
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
                <button onClick={this.changeAnimal}>Next</button>
            </div>
        )
    }
}

export default Area
