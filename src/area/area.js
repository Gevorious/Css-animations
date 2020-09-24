import React, { Component } from 'react'
import './area.css'
import Block from '../block/block'
import { getData } from '../get-data'
import Shadow from '../shadows/shadow'

class Area extends Component {

    state = {
        animals: getData('parts'),
        shadows: getData('shadows'),
        background: getData('background'),
        name: getData('name'),
        idx: 0
    }

    changeAnimal = (dir) => {
        const { idx, animals } = this.state
        if(dir){
            if(idx === animals.length-1 && dir > 0){
                this.setState({ idx: 0 })
                return
            }
            if(idx === 0 && dir < 0){
                this.setState({ idx: animals.length-1 })
                return
            }
            this.setState(prevState => ({
                idx: prevState.idx + dir
            }))
        }
    }

    wheelHandler = (e) => {
        let dir = null
        if(e.deltaY>0){
            dir = 1
        }
        if(e.deltaY<0){
            dir = -1
        }
        this.changeAnimal(dir)
        }

    render() {
        const { animals, 
                idx, 
                shadows, 
                background, 
                name } = this.state

        const style = {
            backgroundColor: `${background[idx]}`
        }

        let delay = 0
        return (
            <div className="container" style={style} onWheel={this.wheelHandler}>
                    <div className="area">
                        { 
                        animals[idx].map(data =>{
                            delay += 0.05
                            return(<Block
                                key = {data.id}
                                data = {data}
                                delay = {delay}
                            />)
                        })
                        }
                        {
                        shadows[idx].map((shadow, index) => 
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
                <div className="name">{name[idx]}</div>
                <i className="fa fa-angle-up up" onClick={()=>this.changeAnimal(-1)}></i>
                <i className="fa fa-angle-down down" onClick={()=>this.changeAnimal(1)}></i>
            </div>
        )
    }
}

export default Area
