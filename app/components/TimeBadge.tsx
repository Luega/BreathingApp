import classes from '../style/timeBadge.module.css'

type Props = {
    emoji: string,
    time: string,
}

const TimeBadge = ({ emoji, time }: Props) => {
    return (
        <button className={`${classes.timeBadge} shadow-xl`}>
            <p className='mb-2 text-4xl'>{emoji}</p>
            <p>{time}</p>
        </button>
    )
}

export default TimeBadge