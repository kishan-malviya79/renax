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
    <div className='w-full py-20 items-center justify-center flex flex-col '>
        <h1 className='text-3xl  font-semibold '>React Table</h1>
        <DataTable columns={columns} data={data}/>
    </div>
  )
}
