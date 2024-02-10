import React from 'react'
import Card from '../ui/Card'
import { Link } from 'react-router-dom'
import Btn from '../ui/Btn'

export default function SinglePetCard({item: pObj}) {
  return (
    <Card>
            <h3 className="text-xl mb-2 font-bold">{pObj.name}</h3>
            <p >{new Date(pObj.dob).toLocaleDateString()}</p>
            <p className="mb-4">{pObj.client_email}</p>
            <div className="flex gap-1">
              <Link to={'/pets/1'}>
              <Btn>View Logs</Btn>
              </Link>
              <Btn outline>Delete</Btn>
            </div>
          </Card>
  )
}
