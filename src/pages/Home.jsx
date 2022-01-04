import React, {useState, useContext, useEffect} from 'react'
import GetCustomersList from '../components/GetCustomersList'
import { GeneralContext } from '../App'
import CustomerRegistration from '../components/CustomerRegistration'
import Container, {GridItem, GridContainer} from '../components/Container'
import Heaer1 from '../components/Heaer1'


export default function Home() {
    const {userInfo, setUserInfo} = useContext(GeneralContext)
    const{setCustomers} = useContext(GeneralContext)

    useEffect(() => {
        getCustomers()

        const token = localStorage.getItem('js3')
        const headers = {
            'Content-Type' : 'application/json',
            'Authorization': `Bearer ${token}`
        }
        fetch('https://frebi.willandskill.eu/api/v1/me',{
            headers: headers
        })
        .then(res=>res.json())
        .then(data=>setUserInfo(data))
    }, [])

    function getCustomers() {
        const token = localStorage.getItem('js3')
        const headers = {
            Authorization: `Bearer ${token}`,
        }
        const url = 'https://frebi.willandskill.eu/api/v1/customers/'
        fetch(url,{headers : headers})
        .then(res=>res.json())
        .then(data=>{
            setCustomers(data.results)
        })
    }
    
    return (
        <>
            <Container middle width={700} top={100}>
                <Heaer1>Home</Heaer1>
                <GridContainer>
                    <GridItem>
                        <CustomerRegistration onSuccess={getCustomers}/>
                    </GridItem>
                    <GridItem align={'left'}>
                        <Heaer1 fontsize={15}>Customer List</Heaer1>
                        <GetCustomersList/>
                    </GridItem>
                </GridContainer>
            </Container>
            <br/>
            <br/>
            <br/>
            {userInfo &&
                    <>
                        <samp><b> {userInfo.firstName} {userInfo.lastName}</b></samp>
                        <samp> {userInfo.email}</samp>
                    </>
            }
        </>
    )
}
