// Write your Character component here
import React, {useState} from 'react';
// import axios from 'axios';
import styled from 'styled-components';

export default function Character(props) {
    const {character} = props
    const [isDetailsOn, setIsDetailsOn ] = useState(false)

    const toggleDetails = evt => {
        setIsDetailsOn(!isDetailsOn)
    }

    return (
        <div className='character container'>
            <div onClick={toggleDetails}>{character.name}</div>
            <div className='character details'>
                <>
                    {
                        isDetailsOn === true
                        ?   <p>Height: {character.height}</p>
                        : null
                    }
                </>
                <>
                    {
                        isDetailsOn === true
                        ?   <p>Mass(kg): {character.mass}</p>
                        : null
                    }
                </>
                <>
                    {
                        isDetailsOn === true
                        ?   <p>Hair Color: {character.hair_color}</p>
                        : null
                    }
                </>
                <>
                    {
                        isDetailsOn === true
                        ?   <p>Skin Color: {character.skin_color}</p>
                        : null
                    }
                </>
                <>
                    {
                        isDetailsOn === true
                        ?   <p>Eye Color: {character.eye_color}</p>
                        : null
                    }
                </>
                <>
                    {
                        isDetailsOn === true
                        ?   <p>Birth Year: {character.birth_year}</p>
                        : null
                    }
                </>
                <>
                    {
                        isDetailsOn === true
                        ?   <p>Gender: {character.gender}</p>
                        : null
                    }
                </>
            </div>
           
        </div>

    )
}
