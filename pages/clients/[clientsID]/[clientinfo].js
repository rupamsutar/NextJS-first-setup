import { useRouter } from 'next/router';
import React from 'react'

const ClientInfo = () => {
    const router = useRouter();
  return (
    <div>
        <h1>Client Info</h1>
        <h1>{router.query.clientsID}</h1>
        <h1>{router.query.clientinfo}</h1>
    </div>
  )
}

export default ClientInfo