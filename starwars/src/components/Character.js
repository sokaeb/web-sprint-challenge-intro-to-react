// Write your Character component here
import React, {useState} from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
border: 2px solid red;
margin: ${props => props.theme.margins};
color: ${props => props.theme.black};
background-color: ${props => props.theme.white};
opacity: 0.6;
`
const StyledName = styled.h2`
color: ${props => props.theme.white};
:hover {
    color: ${props => props.theme.black};
    };
`

export default function Character(props) {
    const {character} = props
    const [isDetailsOn, setIsDetailsOn ] = useState(false)

    const toggleDetails = evt => {
        setIsDetailsOn(!isDetailsOn)
    }

    return (
        <div className='characterContainer'>
            <StyledName className='characterName' onClick={toggleDetails}>{character.name}</StyledName>
            <StyledDiv className='character details'>
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
            </StyledDiv>
           
        </div>

    )
}
