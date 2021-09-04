import React from 'react'
import Loading from './Loading.svg'
const Loader = () => {
    return (
        <>
            <div className='text-center'>
                <img src={Loading} alt='loader'/>
            </div>
        </>
    )
}

export default Loader
