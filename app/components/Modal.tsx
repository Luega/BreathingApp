import React from 'react'
import TimeBadge from './TimeBadge'
import classes from '../style/modal.module.css'
import { useBreathingAppContext } from '../contexts/breathingAppContext'
import { State } from '../utils/types'

const Modal = () => {
    const { state, setState } = useBreathingAppContext();

    const closeModalHandler = () => {
        setState((prevState: State) => {
            return {
                ...prevState,
                isModalOpened: false
            }
        });
    }

    return (
        <div className={`${classes.modal} w-screen h-screen absolute z-40`}>
            <div className={`${classes.container} w-[90%] h-[90%] sm:w-auto sm:h-auto p-10 grid grid-cols-3 overflow-auto relative`}>
                <button className={`${classes.closeBtn} absolute top-3 right-3`} onClick={() => closeModalHandler()}>X</button>
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