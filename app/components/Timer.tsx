import { useEffect } from "react";
import { useBreathingAppContext } from "../contexts/breathingAppContext";

type Props = {
    startAnimation: boolean
}

const Timer = ({ startAnimation }: Props) => {
    const { state, setState } = useBreathingAppContext();

    useEffect(() => {
        if (startAnimation) {
            if (state.exerciseTime <= 0) {
                return
            }
            const interval = setInterval(() => {
                setState((prevState) => {
                    return {
                        ...prevState,
                        exerciseTime: state.exerciseTime - 1
                    }
                })
            }, 1000);

            return () => clearInterval(interval);
        }

    }, [state.exerciseTime, startAnimation]);

    return (
        <div className="text-4xl md:text-6xl lg:text-7xl justify-self-center">{state.exerciseTime}<span className="text-lg">sec.</span></div>
    )
}

export default Timer;
