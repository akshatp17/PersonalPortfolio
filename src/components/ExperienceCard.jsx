import React from 'react'

const ExperienceCard = (props) => {
    return (
        <div className='font-bold w-32 h-48 rounded-4xl flex flex-col justify-center items-center px-5 py-auto inset-shadow-black ring-4 ring-white'>
            <p className='text-5xl flex justify-center items-center'>{props.expData.num}<span className='text-4xl'>+</span></p>
            <p className='text-center'>{props.expData.numContext}</p>
        </div>
    )
}

export default ExperienceCard