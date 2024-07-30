import { DataTable } from '@/components/data-table'
import React from 'react'
import { columns, User } from './Columns'

async function getUsers(): Promise<User[]>{
    const res = await fetch ('https:/64a6f5fc096b3f0fcc80e3fa.mockapi.io/api/users')
    const data = await res.json()
    return data
}

export default async function page() {
    const data = await getUsers()
  return (
    <div className='py-24 px-24'>
        <h1 className='text-3xl  font-semibold '>React Table</h1>
        <DataTable columns={columns} data={data}/>
    </div>
  )
}
