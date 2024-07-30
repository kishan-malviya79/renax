"use client"
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';

interface formfield {
    fullName: string,
    email: string,
    phone: string,
    password: string,
}


function page() {
const { register, handleSubmit } = useForm <formfield> ({
    defaultValues:{
        email:"7",
        fullName:"kishan"
    }
});

const onSubmit : SubmitHandler<formfield>  = (data) => {    
        console.log(data); 
    }
    return (
        <div className=' bg-gray-600 w-full h-screen flex flex-col items-center justify-center gap-'>
            <form className=" flex gap-4 items-start justify-start text-white bg-black py-12 w-[50%] flex-col"
            onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group mx-auto  gap-4 flex flex-col items-center ">

                    <label htmlFor="fullname">Full Name</label>
                    <input type="text" className="form-control text-black" id="fullname" {...register ('fullName')}/>
                </div>
                <div className="form-group mx-auto justify-center gap-4 flex flex-col items-center ">

                    <label htmlFor="email">Email address</label>
                    <input type="email" className="form-control  text-black" id="email" {...register ('email')} />
                </div>
                <div className="form-group mx-auto gap-4 flex flex-col items-center  ">

                    <label htmlFor="phone " className=' flex items-start ' >Phone Number</label>
                    <input type="text" className="form-control  text-black" id="phone" {...register ('phone')}  />
                </div>
                <div className="form-group mx-auto gap-4    flex flex-col items-center ">

                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control text-black" id="password" {...register ('password')}   />
                </div>
                <button type='submit' className='self-center'>Submit</button>
            </form>         
        </div>
    )
}

export default page
