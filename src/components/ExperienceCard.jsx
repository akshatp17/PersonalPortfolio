import React from 'react'

const ExperienceCard = (props) => {
    return (
        <div className='font-bold w-24 h-33 sm:w-32 sm:h-48 rounded-4xl flex flex-col justify-center items-center px-5 py-auto inset-ring-4 inset-ring-white '>
            <p className='text-3xl sm:text-5xl flex justify-center items-center'>{props.expData.num}<span className='text-xl sm:text-4xl'>+</span></p>
            <p className='text-center text-[0.85em]'>{props.expData.numContext}</p>
        </div>
    )
}

export default ExperienceCard