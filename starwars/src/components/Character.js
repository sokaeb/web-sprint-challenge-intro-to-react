// Write your Character component here
import React, {useState} from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
margin: ${props => props.theme.margins};
color: ${props => props.theme.black};
background-color: ${props => props.theme.white};
opacity: 0.6;
`
const StyledPara = styled.p`
/* :hover {
    color: ${props => props.theme.gold};
} */
`

const StyledName = styled.h2`
border: 1px dashed darkgoldenrod;
margin: ${props => props.theme.margins};
/* background-color: ${props => props.theme.black};
opacity: 0.6; */
background-color: ${props => props.theme.backgroundColor};
color: ${props => props.theme.white};
:hover {
    color: ${props => props.theme.grey};
    };
padding: ${props => props.theme.paddings.small};
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
                        ?   <StyledPara>Height: {character.height}</StyledPara>
                        : null
                    }
                </>
                <>
                    {
                        isDetailsOn === true
                        ?   <StyledPara>Mass(kg): {character.mass}</StyledPara>
                        : null
                    }
                </>
                <>
                    {
                        isDetailsOn === true
                        ?   <StyledPara>Hair Color: {character.hair_color}</StyledPara>
                        : null
                    }
                </>
                <>
                    {
                        isDetailsOn === true
                        ?   <StyledPara>Skin Color: {character.skin_color}</StyledPara>
                        : null
                    }
                </>
                <>
                    {
                        isDetailsOn === true
                        ?   <StyledPara>Eye Color: {character.eye_color}</StyledPara>
                        : null
                    }
                </>
                <>
                    {
                        isDetailsOn === true
                        ?   <StyledPara>Birth Year: {character.birth_year}</StyledPara>
                        : null
                    }
                </>
                <>
                    {
                        isDetailsOn === true
                        ?   <StyledPara>Gender: {character.gender}</StyledPara>
                        : null
                    }
                </>
            </StyledDiv>
           
        </div>

    )
}
