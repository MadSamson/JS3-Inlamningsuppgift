import React from 'react'
import { useParams } from 'react-router-dom'
import DetailPage from '../components/DetailPage'

export default function CustomerDetailPage() {
    const params = useParams()
    console.log(params);
    return (
        <div>
            <DetailPage id={params.id}/>
        </div>
    )
}
