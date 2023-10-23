import { useBreathingAppContext } from '../contexts/breathingAppContext'
import classes from '../style/timeBadge.module.css'

type Props = {
    emoji: string,
    time: string,
}


const TimeBadge = ({ emoji, time }: Props) => {
    const { state, setState } = useBreathingAppContext();
    const exerciseTime: number = Number(time.split("m")[0]);

    const exerciseTimeHandler = () => {
        setState((prevState) => {
            return {
                ...prevState,
                exerciseTime: exerciseTime
            }
        })
    }

    return (
        <button onClick={() => exerciseTimeHandler()} className={`${classes.timeBadge} shadow-xl ${exerciseTime === state.exerciseTime && classes.selected}`}>
            <p className='mb-2 text-4xl'>{emoji}</p>
            <p>{time}</p>
        </button>
    )
}

export default TimeBadge