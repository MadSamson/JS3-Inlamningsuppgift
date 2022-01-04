import React from 'react'
import styled from 'styled-components'

const StyledContainer= styled.div`
    width: 900px;
    background-color: #e3e3e3;
    margin: auto;
    padding: 20px;
    border-radius: 10px;
`
const CenterContainer = styled.div`
    // margin: 300px auto;
    margin: auto;
    margin-top: ${props => props.top}px;
    // width: 400px;
    // height: 100px;
    background-color: #e3e3e3;
    border-radius: 10px;
    width: ${props => props.width}px;
    height: ${props => props.height}px;
`
const Middle = styled.div`
    text-align: center;
`
const GridContainer = styled.div`
    display: grid;
    grid-column-gap: 50px;
    grid-template-columns: auto auto auto;
`
const GridItem = styled.div`
    background-color: #e3e3e3;
    padding: 20px;
    text-align: ${props=>props.align};
    border-radius: 10px;
    border: 1px solid black;
`

const UL = styled.ul`
    list-style-type: none;
`

export {GridContainer, GridItem, UL}

export default function Container(props) {
    return (
        <>
        {props.middle ?
            <CenterContainer {...props}>
                <Middle {...props}>
                    {props.children}
                </Middle>
            </CenterContainer> :
            <StyledContainer>
                {props.children}
            </StyledContainer>
        }
        </>
    )
}
