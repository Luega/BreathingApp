type Props = {
    emoji: string,
    time: string,
}

const TimeBadge = ({ emoji, time }: Props) => {
    return (
        <div>
            <p>{emoji}</p>
            <p>{time}</p>
        </div>
    )
}

export default TimeBadge