import React, { useEffect, useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {GeneralContext} from '../App'
import Container, {GridItem, GridContainer, UL} from './Container'
import Input from './Input'
import {Button} from './Button'
import Heaer1 from './Heaer1'

// Ge användaren möjlighet att ändra kundens information (PUT/PATCH) ===> Eftersom endast en av dem krävs använde jag bara "Patch"

export default function DetailPage(props) {
    const[clientInfo, setClientInfo] = useState(null)
    const[name, setName] = useState('')
    const[organisationNr, setOrganisationNr] = useState('')
    const[vatNr, setVatNr] = useState('')
    const[reference, setReference] = useState('')
    const[paymentTerm, setPaymentTerm] = useState('')
    const[website, setWebsite] = useState('')
    const[email, setEmail] = useState('')
    const[phoneNumber, setPhoneNumber] = useState('')

    const {customers} = useContext(GeneralContext)
    const navigate = useNavigate()

    const id = props.id 
    const url = `https://frebi.willandskill.eu/api/v1/customers/${id}/`;
    const token = localStorage.getItem('js3');
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    }
    

    useEffect(() => {
        fetch(url, {headers : headers})
        .then(res=>res.json())
        .then(data=>{
            setClientInfo(data)
            setName(data.name)
            setOrganisationNr(data.organisationNr)
            setVatNr(data.vatNr)
            setReference(data.reference)
            setPaymentTerm(data.paymentTerm)
            setWebsite(data.website)
            setEmail(data.email)
            setPhoneNumber(data.phoneNumber)
        })
    }, []) 

    function handleOnSubmit(e) {
        e.preventDefault()
        const payload = {name, organisationNr, vatNr, reference, paymentTerm, website, email, phoneNumber}
        fetch(url,
        {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify(payload)
        })
        .then(res=>res.json())
        .then(data=>{
            setClientInfo(data)
            setName(data.name)
            setOrganisationNr(data.organisationNr)
            setVatNr(data.vatNr)
            setReference(data.reference)
            setPaymentTerm(data.paymentTerm)
            setWebsite(data.website)
            setEmail(data.email)
            setPhoneNumber(data.phoneNumber)
        })
    }

    function handleOnDelete(id) {
        const headersDelete = {
            Authorization: `Bearer ${token}`,
        }
        fetch(url,{
            headers : headersDelete,
            method: 'DELETE'
        })
        .then(res=>navigate('/home'))
    }

    return (
        <>
        <Container middle width={700} top={100}>
            <Heaer1>Customer Information</Heaer1>
            <GridContainer>
                <GridItem>
                    <form onSubmit={handleOnSubmit}>
                        <Input type='text' value={name} placeholder='Name' setValue={setName}/>
                        <Input type='text' value={organisationNr} placeholder='Organisation Number' setValue={setOrganisationNr}/>
                        <Input type='text' value={vatNr} placeholder='Vat Number' setValue={setVatNr} pattern='SE[0-9]{10}'/>
                        <Input type='text' value={reference} placeholder='Reference' setValue={setReference}/> 
                        <Input type='text' value={paymentTerm} placeholder='Payment Term' setValue={setPaymentTerm}/> 
                        <Input type='text' value={website} placeholder='www.website.com' setValue={setWebsite}/> 
                        <Input type='text' value={email} placeholder='email@address.com' setValue={setEmail}/>
                        <Input type='text' value={phoneNumber} placeholder='Phone Number' setValue={setPhoneNumber}/>
                        <Button type='submit' right={10} top={15}>Update Info</Button>
                        <Link to='/home'><Button left={10} black>Home</Button></Link>
                    </form>
                </GridItem>
                    <GridItem align={'left'}>
                        {/* <Heaer1 fontsize={20}>Customers List</Heaer1> */}
                        {clientInfo ? (
                        <UL>
                            <li>Name: {clientInfo.name}</li>
                            <li>Organisation Number: {clientInfo.organisationNr}</li>
                            <li>VAT Number:{clientInfo.vatNr}</li>
                            <li>Reference: {clientInfo.reference}</li>
                            <li>Payment Term: {clientInfo.paymentTerm}</li>
                            <li>Website: {clientInfo.website}</li>
                            <li>Email Address:{clientInfo.email}</li>
                            <li>Phone Number:{clientInfo.phoneNumber}</li>
                        
                        </UL>
                        ) : 'Not Found'}
                        <Button red onClick={(e) => handleOnDelete(id)}>Delete</Button>
                    </GridItem>
            </GridContainer>
        </Container>

        </>
    )
}
