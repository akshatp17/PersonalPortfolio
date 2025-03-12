import React from 'react'

const Heading = (props) => {
    return (
        <div
            className='flex items-center justify-center gap-3 text-3xl font-black text-sky-300 px-30 flex-col sm:flex-row mt-5'
            id={props.id}
        >
            <p className=''>{props.content}</p> <hr className='w-full border-none bg-sky-300 h-1 my-auto sm:h-[1px]' />
        </div>
    )
}

export default Heading