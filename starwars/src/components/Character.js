import React, { Component } from 'react'
import "./Character.css"

class Character extends Component {
    render() {
        return (
            <div className="characterStyle">
                <h3>Name: {this.props.character.name}</h3>
                <p>Birth Year: {this.props.character.birth_year}</p>
                <p>Gender: {this.props.character.gender}</p>
            </div>
        )
    }
}

export default Character
