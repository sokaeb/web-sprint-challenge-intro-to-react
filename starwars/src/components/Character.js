// Write your Character component here
import React from 'react';
// import axios from 'axios';
import styled from 'styled-components';

export default function Character(props) {
    const {character} = props

    return (
        <div className='character container'>
            <h2>{character.name}</h2>
            <p>{character.height}</p>
        </div>

    )
}
