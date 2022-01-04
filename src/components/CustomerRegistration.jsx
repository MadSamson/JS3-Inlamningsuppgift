import React, {useState} from 'react'
import Input from './Input'
import {Button} from './Button'
import { Link } from 'react-router-dom'
export default function CustomerRegistration(props) {

    const[name, setName] = useState('')
    const[organisationNr, setOrganisationNr] = useState('')
    const[vatNr, setVatNr] = useState('')
    const[reference, setReference] = useState('')
    const[paymentTerm, setPaymentTerm] = useState('')
    const[website, setWebsite] = useState('')
    const[email, setEmail] = useState('')
    const[phoneNumber, setPhoneNumber] = useState('')
    
    function handleOnSubmit(e) {
        e.preventDefault()
        const payload ={name, organisationNr, vatNr, reference, paymentTerm, website, email, phoneNumber}
        const token = localStorage.getItem('js3')
        const url = 'https://frebi.willandskill.eu/api/v1/customers/'
        const headers = {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }

        fetch(url, {
            method: 'POST',
            headers: headers,
            body:JSON.stringify(payload)
        })
        .then(res=>res.json())
        .then(data=>props.onSuccess())
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <Input type='text' value={name} placeholder='Name' setValue={setName}/>
                <Input type='text' value={organisationNr} placeholder='Organisation Number' setValue={setOrganisationNr}/>
                <Input type='text' value={vatNr} placeholder='Vat Number' setValue={setVatNr} pattern='SE[0-9]{10}'/>
                <Input type='text' value={reference} placeholder='Reference' setValue={setReference}/> 
                <Input type='text' value={paymentTerm} placeholder='Payment Term' setValue={setPaymentTerm}/> 
                <Input type='text' value={website} placeholder='www.website.com' setValue={setWebsite}/> 
                <Input type='text' value={email} placeholder='email@address.com' setValue={setEmail}/>
                <Input type='text' value={phoneNumber} placeholder='Phone Number' setValue={setPhoneNumber}/>
                <Button type='submit' right={20} top={15} >Add</Button>
                <Link to='/'><Button left={20} black>Start Page</Button></Link>
            </form>
        </div>
    )
}

