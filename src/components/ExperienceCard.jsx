import React from 'react'

const ExperienceCard = (props) => {
    return (
        <div className='bg-white font-bold w-32 h-48 rounded-4xl flex flex-col justify-center items-center px-5 py-auto'>
            <p className='text-5xl text-black flex justify-center items-center'>{props.expData.num}<span className='text-4xl'>+</span></p>
            <p className='text-black text-center'>{props.expData.numContext}</p>
        </div>
    )
}

export default ExperienceCard