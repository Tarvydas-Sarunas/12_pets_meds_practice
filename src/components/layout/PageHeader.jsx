import React from 'react'
import { Link } from 'react-router-dom'
import Btn from '../ui/Btn'

export default function PageHeader({link, pName, bName}) {
  return (
    <div className=" my-5 flex items-center justify-between">
      <h1 className="text-main text-4xl ">{pName}</h1>
      <Link to={link}> <Btn >{bName}</Btn> </Link>
      </div>
  )
}
