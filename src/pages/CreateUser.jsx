import React, {useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import Input from '../components/Input'
import Container from '../components/Container'
import Heaer1 from '../components/Heaer1'
import {Button} from '../components/Button'

export default function CreateUser() {
    const [response, setResponse] = useState(null)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [organisationName, setOrganisationName] = useState('')
    const [organisationKind, setOrganisationKind] = useState('')
    const navigate = useNavigate()

    function handleOnSubmit(e) {
        e.preventDefault()
        const payload = {firstName, lastName, email, password, organisationName, organisationKind}
        fetch('https://frebi.willandskill.eu/auth/users/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(payload)
        })
        .then(res=>res.json())
        .then(data=>{
            setResponse(data)
            firstName && lastName && email && password && organisationName && organisationKind && navigate('/login')
        })
    }
    return (
        <div>
            <Container middle width={400} height={550} top={100}>
                <Heaer1>Create User</Heaer1>
                <form onSubmit={handleOnSubmit}>
                    <Input type='text' value={firstName} placeholder='First Name' setValue={setFirstName}/>
                    <Input type='text' value={lastName} placeholder='Last Name' setValue={setLastName}/>
                    <Input type='text' value={email} placeholder='email@address.com' setValue={setEmail}/>
                    <Input type='password' value={password} placeholder='password' setValue={setPassword}/>
                    <Input type='text' value={organisationName} placeholder='Organisation Name' setValue={setOrganisationName}/>
                    <Input type='text' value={organisationKind} placeholder='Organisation Kind: 0 , 1 or 2' setValue={setOrganisationKind} pattern='[0-2]'/>
                    <Button type='submit' top={13} right={15}>Create</Button>
                    <Link to='/'><Button left={15} black>Start Page</Button></Link>
                </form>
                <br/>
                <div style={{color: 'red'}}>
                {response &&
                    <>
                        <samp>{response.firstName}</samp> 
                        <samp>{response.LastName}</samp>
                        <samp>{response.email}</samp>
                        <samp>{response.password}</samp>
                        <samp>{response.organisationKind}</samp>
                    </>
                    
                }
                </div>
            </Container>

        </div>
    )
}
