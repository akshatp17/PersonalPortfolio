import React from 'react'
import { useState } from 'react';
import { useForm } from "react-hook-form"

const Contact = () => {

    const {
        register,
        handleSubmit,
        setError,
        reset,
        formState: { errors, isSubmitting },
    } = useForm();

    const [Contact, setContact] = useState(false)

    const onSubmit = (data) => {
        console.log(data);
        reset();
    }

    const toggleContact = () => {
        setContact(!Contact);
    }



    return (
        <div className='flex w-3/5 h-fit rounded-2xl justify-center items-center p-2 bg-amber-200'>

            {!Contact ?
                <div className='flex gap-2 justify-around items-center w-full p-2.5'>
                    <div className='text-xl font-bold'>
                        Send a message!
                    </div>
                    <div className="text-[0.8em] w-1/3 text-center">
                        Want to send me a message? Click the button and connect with me!
                    </div>
                    <div className='w-fit h-fit bg-black text-white px-5 py-1.5 rounded-full'>
                        <button onClick={toggleContact} className='cursor-pointer w-full h-full font-medium'>Message me</button>
                    </div>
                </div>

                :

                <div className='flex flex-col gap-0.5 justify-around items-center w-full'>
                    <form action="" onSubmit={handleSubmit(onSubmit)} className='flex flex-col w-full items-center'>
                        <div className='flex gap-1 w-full p-2.5'>
                            <div className='flex flex-col w-[40%] gap-1'>
                                <input type="text" required name="uName" placeholder='Enter your name' {...register("Name")} className='py-0.5 px-1 w-full outline-1' />
                                <input type="email" required name="uEmail" placeholder='Enter your email' {...register("Email")} className='py-0.5 px-1 w-full outline-1' />
                            </div>
                            <div className='w-[60%]'>
                                <textarea required name="uMsg" placeholder='Enter your message' {...register("Msg")} className='py-0.5 px-1 w-full h-full outline-1 resize-none'></textarea>
                            </div>
                        </div>
                        <div className='w-fit h-fit bg-black text-white rounded-full'>
                            <button className='cursor-pointer w-full h-full font-medium px-3 py-0.5'>submit</button>
                        </div>
                    </form>
                    <div className='w-fit h-fit bg-black text-white rounded-full'>
                        <button onClick={toggleContact} className='cursor-pointer w-full h-full font-medium px-3 py-0.5'>back</button>
                    </div>
                </div>
            }
        </div>
    )
}

export default Contact