import React from 'react'
import { Link } from 'react-router-dom'
import {Button} from '../components/Button'
import Container from '../components/Container'

export default function StartPage() {
    return (
        <Container middle width={400} height={100} top={300}>
            <Link to='/login'><Button right={15} top={25}>login</Button></Link>
            <Link to='/create-user'><Button left={15}>Create Account</Button></Link>
        </Container>
    )
}
