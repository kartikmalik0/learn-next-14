"use client"
import { addUser } from '@/app/redux/slice'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const CreateUser = () => {
    const [name, setName] = useState('')
    const dispatch = useDispatch()
    const handleUser = () => {
        dispatch(addUser(name))
    }
    return (
        <div className='w-full gap-3 flex items-center flex-col '>
            <input type="text" onChange={(e) => setName(e.target.value)} className='mt-20 border p-7 border-gray-400 rounded-lg h-12 ' placeholder='Enter User Name' />
            <button className=' p-5 w-[20%] text-white bg-blue-500 flex items-center justify-center rounded-lg' onClick={handleUser}>
                Create User
            </button>
        </div>
    )
}

export default CreateUser
