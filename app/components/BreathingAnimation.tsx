import classes from "../style/breathingAnimation.module.css"

const BreathingAnimation = () => {
  return (
    <>
      <div className="h-[20%] text-6xl md:text-7xl lg:text-8xl flex justify-center items-center">10:00</div>
      <div className="h-[70%] relative">
        <div className={`${classes.white_circle} w-[300px] h-[300px] lg:w-[600px] lg:h-[600px]`}>
          <div className={`${classes.white_circle} w-[250px] h-[250px] lg:w-[500px] lg:h-[500px]`}>
            <div className={`${classes.white_circle} w-[200px] h-[200px] lg:w-[400px] lg:h-[400px]`}>
              <div className={`${classes.white_circle} w-[150px] h-[150px] lg:w-[300px] lg:h-[300px]`}>
                <div className={`${classes.yellow_circle} w-[100px] h-[100px] lg:w-[200px] lg:h-[200px]`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BreathingAnimation;