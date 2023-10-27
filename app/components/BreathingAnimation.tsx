import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useBreathingAppContext } from "../contexts/breathingAppContext";
import classes from "../style/breathingAnimation.module.css"
import Timer from "./Timer";
import { getLoops } from "../utils/functions";


const BreathingAnimation = () => {
  const { state, setState } = useBreathingAppContext();
  const [breathingPhase, setBreathingPhase] = useState<string>("Click to start");

  const gsapContainer = useRef(null);
  const breathingTl = useRef<GSAPTimeline>();

  const loops = getLoops(state);

  useLayoutEffect(() => {
    if (state.isAnimationStarted) {
      const ctx = gsap.context(() => {
        breathingTl.current = gsap.timeline({
          repeat: loops > 0 ? loops - 1 : 0, onComplete: () => {
            setBreathingPhase("COMPLETED");
            setState((prevState) => {
              return {
                ...prevState,
                isAnimationStarted: false,
                exerciseTime: 0,
                inhaleTime: 3,
                name: "",
                exhale: 0,
                inspiratoryApnea: 0,
                expiratoryApnea: 0,
              }
            });
          }
        });
        breathingTl.current.add(() => { setBreathingPhase("IN") })
        breathingTl.current.to("#yellow_circle", { scale: 3, duration: state.inhaleTime, ease: "none" })
        if (state.inspiratoryApnea !== 0) {
          breathingTl.current.add(() => { setBreathingPhase("APNEA") })
          breathingTl.current.to("#yellow_circle", { scale: 3, duration: state.inhaleTime * state.inspiratoryApnea, ease: "none" })
        }
        breathingTl.current.add(() => { setBreathingPhase("OUT") })
        breathingTl.current.to("#yellow_circle", { scale: 1, duration: state.inhaleTime * state.exhale, ease: "none" })
        if (state.expiratoryApnea !== 0) {
          breathingTl.current.add(() => { setBreathingPhase("APNEA") })
          breathingTl.current.to("#yellow_circle", { scale: 1, duration: state.inhaleTime * state.expiratoryApnea, ease: "none" })
        }
      }, gsapContainer);

      return () => ctx.revert();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isAnimationStarted]);


  const startHandler = () => {
    if (loops <= 0) {
      if (breathingPhase === "Select an exercise") {
        return
      }
      setTimeout(() => {
        setBreathingPhase("Click to start");
      }, 2000);
      setBreathingPhase("Select an exercise");
      return
    }
    setState((prevState) => {
      return {
        ...prevState,
        isAnimationStarted: !prevState.isAnimationStarted
      }
    });
    setBreathingPhase("Click to start");
  }

  return (
    <div ref={gsapContainer} onBlur={(e) => {
      console.log(e.currentTarget);
    }}>
      <div className="mb-5 md:mb-10 lg:my-10 px-3 grid grid-cols-2">
        <div className="flex flex-col justify-self-center text-sm md:text-lg">
          <div>Type: <span className={`${classes.alert_text} italic`}>{state.name === "" ? "None" : state.name}</span></div>
          <div>Inhale time: <span className={`${classes.alert_text} italic`}>{state.inhaleTime}sec.</span></div>
          <div>Apnea: <span className={`${classes.alert_text} italic`}>{state.inspiratoryApnea === 0 && state.expiratoryApnea === 0 && "None"} {state.inspiratoryApnea !== 0 && "Inspiratory"} {state.expiratoryApnea !== 0 && "Expiratory"}</span></div>
        </div>
        <Timer startAnimation={state.isAnimationStarted} />
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