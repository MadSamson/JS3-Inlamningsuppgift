import { useNavigate, useLocation, Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Container from '../components/Container'
import Input from '../components/Input'
import {Button} from '../components/Button'
import Heaer1 from '../components/Heaer1'

export default function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()
    const [response, setResponse] = useState(null)
    let location = useLocation() 

    useEffect(() => {
        const params = new URLSearchParams(location.search)
        if (location.search!=='') {
            const uid = params.get('uid')
            const token = params.get('token')
            const payload = {uid, token}
            fetch('https://frebi.willandskill.eu/auth/users/activate/',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(payload)
            })
            .then(res=>res.json())
            .then(data=>setResponse(data))
        }
    }, [])

    function submitHandler(e) {
        e.preventDefault()
        const payload = {email, password}
        
        fetch('https://frebi.willandskill.eu/api-token-auth/' ,{
            method: "POST",
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(payload)
        })
        .then(res=>res.json())
        .then(data=>{
            const token = data.token
            localStorage.setItem('js3', token)
            token && navigate('/home')
            setResponse(data)
        })
    }
    return (
        <Container middle width={400} height={330} top={200}>
            <Heaer1>Login</Heaer1>
            <form onSubmit={submitHandler}>
                <Input type='text' value={email} placeholder='Email@address.com' setValue={setEmail}/>
                <Input type='password' value={password} placeholder='password' setValue={setPassword}/>
                <Button type='submit' top={13} right={15}>Login</Button>
                <Link to='/'><Button left={15} black>Start Page</Button></Link>
            </form>
            <br/>
            <div style={{color: 'red'}}>
            {response &&
                <>
                    <samp>{response.email}</samp>
                    <samp>{response.password}</samp>
                </>  
            }
            </div>
        </Container>
    )
}



    // https://v5.reactrouter.com/web/api/Hooks/uselocation
    // https://developers.google.com/web/updates/2016/01/urlsearchparams
    