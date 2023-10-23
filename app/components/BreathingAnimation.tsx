import { useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useBreathingAppContext } from "../contexts/breathingAppContext";
import classes from "../style/breathingAnimation.module.css"

const BreathingAnimation = () => {
  const { state, setState } = useBreathingAppContext();
  const [breathingPhase, setBreathingPhase] = useState<string>("");

  const gsapContainer = useRef(null);
  const breathingTl = useRef<GSAPTimeline>();

  const loops = Math.round(state.exerciseTime / (state.inhaleTime * 4)) - 1;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      breathingTl.current = gsap.timeline(
        {
          repeat: loops > 0 ? loops : 0
        }
      )
        .add(() => { setBreathingPhase("IN") })
        .to("#yellow_circle", { scale: 3, duration: state.inhaleTime, ease: "none" })
        .add(() => { setBreathingPhase("APNEA") })
        .to("#yellow_circle", { scale: 3, duration: state.inhaleTime, ease: "none" })
        .add(() => { setBreathingPhase("OUT") })
        .to("#yellow_circle", { scale: 1, duration: state.inhaleTime, ease: "none" })
        .add(() => { setBreathingPhase("APNEA") })
        .to("#yellow_circle", { scale: 1, duration: state.inhaleTime, ease: "none" })

    }, gsapContainer);

    return () => ctx.revert();

  }, []);


  return (
    <div ref={gsapContainer}>
      <div className="mb-5 md:mb-10 lg:my-10 text-6xl md:text-7xl lg:text-8xl flex justify-center items-center">10:00</div>
      <div className="flex justify-center items-center">
        <div className={`${classes.white_circle} w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] 2xl:w-[750px] 2xl:h-[750px]`}>
          <div className={`${classes.white_circle} w-[250px] h-[250px] sm:w-[375px] sm:h-[375px] lg:w-[500px] lg:h-[500px] 2xl:w-[625px] 2xl:h-[625px]`}>
            <div className={`${classes.white_circle} w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] 2xl:w-[500px] 2xl:h-[500px]`}>
              <div className={`${classes.white_circle} w-[150px] h-[150px] sm:w-[225px] sm:h-[225px] lg:w-[300px] lg:h-[300px] 2xl:w-[375px] 2xl:h-[375px]`}>
                <div id="yellow_circle" className={`${classes.yellow_circle} w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] lg:w-[200px] lg:h-[200px] 2xl:w-[250px] 2xl:h-[250px]`}>
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