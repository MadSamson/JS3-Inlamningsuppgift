import React, {useContext} from 'react'
import { GeneralContext } from '../App'
import { Link } from 'react-router-dom'
import {UL} from './Container'


export default function GetCustomersList() {
    const{customers} = useContext(GeneralContext)
    return (
        <div>
            {customers && 
                customers.map((item,index)=>{
                    return(
                        <UL key={index}>
                            <Link to={`/home/${item.id}`}><li>{item.name}</li></Link>
                        </UL>
                    )
                })
            }
        </div>
    )
}
