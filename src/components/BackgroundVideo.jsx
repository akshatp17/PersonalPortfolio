import React from 'react'
import backgroundVideo from "/bg.mp4";

const BackgroundVideo = () => {
    return (
        <video className='videoTag -z-50 fixed' autoPlay loop muted>
            <source src={backgroundVideo} type='video/mp4' />
        </video>
    )
}

export default BackgroundVideo