import React from 'react'
import styled, {css} from 'styled-components'

const StyledHeaders = styled.h1`
    color: #111;
    font-family: 'Open Sans Condensed', sans-serif;
    // font-size: 40px;
    ${props => props.fontsize ? css `font-size: ${props=>props.fontsize}px;`: 'font-size:40px;'}
    font-weight: 700;
    line-height: 64px;
    margin: 0px;
    padding: 20px 30px;
    text-align: center;
    text-transform: uppercase;
`
const Header2 = styled.h2`
    font-weight: 700;
    margin: 0px;
    padding: 0px 30px;
    text-align: center;

`
export {Header2}

export default function Heaer1(props) {
    return (
        <StyledHeaders {...props}>
            {props.children}
        </StyledHeaders>
    )
}
