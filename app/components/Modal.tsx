import React from 'react'
import TimeBadge from './TimeBadge'
import classes from '../style/modal.module.css'

const Modal = () => {
    return (
        <div className={`${classes.modal} w-screen h-screen absolute z-40`}>
            <button className={`${classes.closeBtn} absolute top-10 right-10`}>X</button>
            <div className={`${classes.container} p-10 grid grid-cols-3`}>
                <div className='col-span-3 lg:col-span-1 flex flex-col justify-center text-center'>
                    <p className='mb-2'>Inhale time in seconds</p>
                    <input className={`${classes.inhaleTime} shadow-xl`} type="number" name='number' placeholder='3' />
                </div>
                <div className='mt-4 lg:mt-0 col-span-3 lg:col-span-2 flex flex-col justify-center text-center'>
                    <p className='mb-2'>Apnea</p>
                    <div>
                        <button className={`${classes.apneaBtn} m-2 mt-0`}>Expiratory</button>
                        <button className={`${classes.apneaBtn} shadow-xl`}>Inspiratory</button>
                    </div>
                </div>
                <div className='mt-4 col-span-3 flex flex-col justify-center text-center'>
                    <p className='mb-2'>Session time</p>
                    <div className='flex justify-center gap-3 flex-wrap'>
                        <TimeBadge emoji="&#128522;" time="3min." />
                        <TimeBadge emoji="&#128578;" time="5min." />
                        <TimeBadge emoji="&#128513;" time="10min." />
                        <TimeBadge emoji="&#128512;" time="15min." />
                        <TimeBadge emoji="&#128526;" time="20min." />
                        <TimeBadge emoji="&#129321;" time="30min." />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal