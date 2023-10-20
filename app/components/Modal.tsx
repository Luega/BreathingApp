import React from 'react'
import TimeBadge from './TimeBadge'
import classes from '../style/modal.module.css'

const Modal = () => {
    return (
        <div className='w-screen h-screen absolute z-40'>
            <div className={`${classes.container} w-1/2 h-1/2 p-10 grid grid-cols-3`}>
                <div className='col-span-1 flex flex-col justify-center text-center'>
                    <p className='mb-2'>Inhale time in seconds</p>
                    <input className={`${classes.inhaleTime}`} type="number" name='number' value={3} />
                </div>
                <div className='col-span-2 flex flex-col justify-center text-center'>
                    <p className=''>Apnea</p>
                </div>
                <div className='col-span-3'>
                    <TimeBadge emoji="&#128512;" time="5min." />
                </div>
            </div>
        </div>
    )
}

export default Modal