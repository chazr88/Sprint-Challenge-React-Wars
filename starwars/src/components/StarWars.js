import React, { Component } from 'react';
import Character from "./Character";
import "./StarWars.css"

class StarWars extends Component {
  render() {
    return (
        <div className="characterStyleContainer">
        {this.props.characters.map(character => (
            <Character key={character.created} character={character}/>
        ))}
      </div>
    )
  }
}

export default StarWars
