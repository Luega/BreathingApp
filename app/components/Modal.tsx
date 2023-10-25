import React, { useEffect, useRef } from 'react'
import TimeBadge from './TimeBadge'
import classes from '../style/modal.module.css'
import { useBreathingAppContext } from '../contexts/breathingAppContext'

const Modal = () => {
    const { state, setState } = useBreathingAppContext();
    const inhaleTimeInput = useRef<HTMLInputElement>(null);

    const closeModalHandler = () => {
        setState((prevState) => {
            return {
                ...prevState,
                isModalOpened: false,
                exerciseTime: 0,
                inhaleTime: 0,
                name: "",
                inhale: 0,
                exhale: 0,
                inspiratoryApnea: 0,
                expiratoryApnea: 0,
            }
        });
    }

    const inhaleTimeInputHandler = () => {
        const inhaleTime = inhaleTimeInput.current ? Number(inhaleTimeInput.current.value) : 4;

        setState((prevState) => {
            return {
                ...prevState,
                inhaleTime: inhaleTime,
            }
        });
    }

    const exApneaHandler = () => {
        setState((prevState) => {
            return {
                ...prevState,
                expiratoryApnea: prevState.expiratoryApnea === 0 ? 1 : 0
            }
        });
    }

    const inApneaHandler = () => {
        setState((prevState) => {
            return {
                ...prevState,
                inspiratoryApnea: prevState.inspiratoryApnea === 0 ? 1 : 0
            }
        });
    }

    const setExerciseHandler = () => {
        setState((prevState) => {
            return {
                ...prevState,
                isModalOpened: false,
            }
        });
    }

    return (
        <div className={`${classes.modal} w-screen h-screen absolute z-40`}>
            <div className={`${classes.container} w-[90%] h-[90%] sm:w-auto sm:h-auto p-10 grid grid-cols-3 overflow-auto relative`}>
                <button className={`${classes.closeBtn} absolute top-3 right-3`} onClick={() => closeModalHandler()}>X</button>
                <div className='col-span-3 lg:col-span-1 flex flex-col justify-center text-center'>
                    <p className='mb-2'>Inhale time in seconds</p>
                    <div className={`${classes.inhaleTime} flex flex-col justify-center shadow-xl`}>
                        <p>{state.inhaleTime}</p>
                        <input onChange={() => inhaleTimeInputHandler()} ref={inhaleTimeInput} className='mx-4' type="range" name='inhaleTime' value={state.inhaleTime} min={1} max={10} />
                    </div>
                </div>
                <div className='mt-4 lg:mt-0 col-span-3 lg:col-span-2 flex flex-col justify-center text-center'>
                    <p className='mb-2'>Apnea</p>
                    <div>
                        <button onClick={() => exApneaHandler()} className={`${classes.apneaBtn} m-2 mt-0 ${state.expiratoryApnea && classes.selected}`}>Expiratory</button>
                        <button onClick={() => inApneaHandler()} className={`${classes.apneaBtn} shadow-xl ${state.inspiratoryApnea && classes.selected}`}>Inspiratory</button>
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
                <button className={`${classes.closeBtn} w-[30%] mt-8 mx-auto col-span-3`} onClick={() => setExerciseHandler()}>Done</button>
            </div>
        </div>
    )
}

export default Modal