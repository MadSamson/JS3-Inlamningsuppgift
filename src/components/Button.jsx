import React from 'react'
import styled, {css} from 'styled-components'

// const StyledButton = styled.button`
//     ${props=> props.color ? css `color:${props=>props.color};`: `color: white;`}
//     ${props=> props.black ? css `background-color: #404040;`
//             : props.red ? css `background-color: #ff1f1f;`
//             : `background-color: #2563eb;`}
//     // font-weight: bold;
//     padding: 15px 25px;
//     font-size: 1rem;
//     border-radius: .5rem;
//     transition: all .15s cubic-bezier(0.4,0,0.2,1);
//     border: none;
//     cursor: pointer;

//     :hover {
//         // background-color: #1d4ed8;
//         ${props=> props.black ? css `background-color: #3b3b3b;`
//                 : props.red ? css `background-color: #eb1c1c;`
//                 : `background-color: #1d4ed8;`}
//         box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
//     }
    


//     width: ${props => props.width}px;
//     margin-top: ${props => props.top}px;
//     margin-right: ${props => props.right}px;
//     margin-bottom: ${props => props.bottom}px;
//     margin-left: ${props => props.left}px;
// `

// export default function Button(props) {
//     return (
//         <>
//             <StyledButton {...props}>{props.children}</StyledButton>
//         </>
//     )
// }


const Button = styled.button`
    ${props=> props.color ? css `color:${props=>props.color};`: `color: white;`}
    ${props=> props.black ? css `background-color: #404040;`
            : props.red ? css `background-color: #ff1f1f;`
            : `background-color: #2563eb;`}
    // font-weight: bold;
    padding: 15px 25px;
    font-size: 1rem;
    border-radius: .5rem;
    transition: all .15s cubic-bezier(0.4,0,0.2,1);
    border: none;
    cursor: pointer;

    :hover {
        // background-color: #1d4ed8;
        ${props=> props.black ? css `background-color: #3b3b3b;`
                : props.red ? css `background-color: #eb1c1c;`
                : `background-color: #1d4ed8;`}
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
    }
    


    width: ${props => props.width}px;
    margin-top: ${props => props.top}px;
    margin-right: ${props => props.right}px;
    margin-bottom: ${props => props.bottom}px;
    margin-left: ${props => props.left}px;
`
export {Button}