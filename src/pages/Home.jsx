import React, { useContext } from 'react'
import GetCustomersList from '../components/GetCustomersList'
import { GeneralContext } from '../App'
import CustomerRegistration from '../components/CustomerRegistration'
import Container, {GridItem, GridContainer} from '../components/Container'
import Heaer1, {Header2} from '../components/Heaer1'


export default function Home(props) {
    const {userInfo} = useContext(GeneralContext)
    
    
    return (
        <>
            <Container middle width={700} top={100}>
                <Heaer1>Home</Heaer1>
                <GridContainer>
                    <GridItem>
                        <CustomerRegistration onSuccess={props.success}/>
                    </GridItem>
                    <GridItem align={'left'}>
                        <Header2 fontsize={15}>Customer List</Header2>
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
