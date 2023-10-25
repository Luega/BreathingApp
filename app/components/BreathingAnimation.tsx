import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useBreathingAppContext } from "../contexts/breathingAppContext";
import classes from "../style/breathingAnimation.module.css"
const BreathingAnimation = () => {
  const { state, setState } = useBreathingAppContext();
  const [breathingPhase, setBreathingPhase] = useState<string>("Click to start");
  const [startAnimation, setStartAnimation] = useState<boolean>(false);

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

  const gsapContainer = useRef(null);
  const breathingTl = useRef<GSAPTimeline>();

  const getLoops = (): number => {
    let loops = 0;
    const exhaleTime = state.exerciseName === "asymmetric" ? state.inhaleTime * 2 : state.inhaleTime;
    if (!state.expiratoryApnea && !state.inspiratoryApnea) {
      loops = Math.round(state.exerciseTime / (state.inhaleTime + exhaleTime));
    }
    else if (!state.expiratoryApnea || !state.inspiratoryApnea) {
      loops = Math.round(state.exerciseTime / ((state.inhaleTime * 2) + exhaleTime));
    }
    else if (state.expiratoryApnea && state.inspiratoryApnea) {
      loops = Math.round(state.exerciseTime / ((state.inhaleTime * 3 + exhaleTime)));
    }
    console.log(loops);

    return loops;
  }
  const loops = getLoops();

  useLayoutEffect(() => {
    if (startAnimation) {
      const ctx = gsap.context(() => {
        breathingTl.current = gsap.timeline({
          repeat: loops > 0 ? loops - 1 : 0, onComplete: () => {
            setBreathingPhase("FINISHED");
            setStartAnimation(false);
            setState((prevState) => {
              return {
                ...prevState,
                exerciseName: "none",
                exerciseTime: 0,
                inhaleTime: 4,
                inspiratoryApnea: false,
                expiratoryApnea: false
              }
            });
          }
        });
        breathingTl.current.add(() => { setBreathingPhase("IN") })
        breathingTl.current.to("#yellow_circle", { scale: 3, duration: state.inhaleTime, ease: "none" })
        if (state.inspiratoryApnea) {
          breathingTl.current.add(() => { setBreathingPhase("APNEA") })
          breathingTl.current.to("#yellow_circle", { scale: 3, duration: state.inhaleTime, ease: "none" })
        }
        breathingTl.current.add(() => { setBreathingPhase("OUT") })
        breathingTl.current.to("#yellow_circle", { scale: 1, duration: state.exerciseName === "asymmetric" ? state.inhaleTime * 2 : state.inhaleTime, ease: "none" })
        if (state.expiratoryApnea) {
          breathingTl.current.add(() => { setBreathingPhase("APNEA") })
          breathingTl.current.to("#yellow_circle", { scale: 1, duration: state.inhaleTime, ease: "none" })
        }
        breathingTl.current.add(() => { console.log("Fine Ciclo") })

      }, gsapContainer);

      return () => ctx.revert();
    }
  }, [startAnimation]);

  const startHandler = () => {
    if (loops <= 0) {
      setTimeout(() => {
        setBreathingPhase("Click to start")
      }, 2000);
      setBreathingPhase("Select an exercise")
      return
    }
    setStartAnimation(!startAnimation);
    setBreathingPhase("Click to start");
  }

  return (
    <div ref={gsapContainer}>
      <div className="mb-5 md:mb-10 lg:my-10 px-3 grid grid-cols-2">
        <div className="flex flex-col justify-self-center">
          <div>Type: <span className={`${classes.alert_text}`}>{state.exerciseName.toUpperCase()}</span></div>
          <div>Inhale time: <span className={`${classes.alert_text}`}>{state.inhaleTime}sec.</span></div>
          <div>Apnea: <span className={`${classes.alert_text}`}>{state.inspiratoryApnea && "inspiratory"} {state.expiratoryApnea && "expiratory"} {!state.inspiratoryApnea && !state.expiratoryApnea && "no"}</span></div>
        </div>
        <div className="text-4xl md:text-6xl lg:text-7xl justify-self-center">{state.exerciseTime}<span className="text-lg">sec.</span></div>
      </div>
      <div className="flex justify-center items-center">
        <div className={`${classes.white_circle} w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] 2xl:w-[750px] 2xl:h-[750px]`}>
          <div className={`${classes.white_circle} w-[250px] h-[250px] sm:w-[375px] sm:h-[375px] lg:w-[500px] lg:h-[500px] 2xl:w-[625px] 2xl:h-[625px]`}>
            <div className={`${classes.white_circle} w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] 2xl:w-[500px] 2xl:h-[500px]`}>
              <div className={`${classes.white_circle} w-[150px] h-[150px] sm:w-[225px] sm:h-[225px] lg:w-[300px] lg:h-[300px] 2xl:w-[375px] 2xl:h-[375px]`}>
                <div onClick={() => startHandler()} id="yellow_circle" className={`${classes.yellow_circle} w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px] 2xl:w-[250px] 2xl:h-[250px] cursor-pointer text-center`}>
                  {breathingPhase}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BreathingAnimation;