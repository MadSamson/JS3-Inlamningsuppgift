import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
    display: inline;
    width: 200px; 
    padding: 15px 25px;
    border-radius: .5rem;
    border: none;
    :focus{
        outline: none;
    }
`

const StyledLabel = styled.label`
    display: inline;
    width: 200px;
    text-align: left;
    vertical-align: middle;
`
const StyledDiv = styled.div`
    margin: 5px;
`




export default function Input({label, type, value, placeholder, setValue, pattern}) {
    return (
        <StyledDiv>
            <StyledLabel>{label}</StyledLabel>
            <StyledInput type={type} value={value} placeholder={placeholder} onChange={e => setValue(e.target.value)} pattern={pattern}/>
        </StyledDiv>

    )
}
