// Write your Character component here
import React, {useState} from 'react';
// import axios from 'axios';
import styled from 'styled-components';

export default function Character(props) {
    const {character} = props
    const [isDetailsOn, setIsDetailsOn ] = useState(false)

    const expandDetails = evt => {
        setIsDetailsOn(!isDetailsOn)
    }

    return (
        <div className='character container'>
            <h2>{character.name}</h2>
            <div>
            <p>Height: {character.height}</p>
            <p>Mass(kg): {character.mass}</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Skin Color: {character.skin_color}</p>
            <p>Eye Color: {character.eye_color}</p>
            <p>Birth Year: {character.birth_year}</p>
            <p>Gender: {character.gender}</p>
            </div>
           
        </div>

    )
}
