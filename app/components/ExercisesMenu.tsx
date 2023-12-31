import { useBreathingAppContext } from "../contexts/breathingAppContext";
import classes from '../style/exercisesMenu.module.css'
import ExerciseCard from "./ExerciseCard";
import LoadingCard from "./LoadingCard";

const ExercisesMenu = () => {
  const { exercises } = useBreathingAppContext();

  return (
    <>
      <h1 className={`${classes.title} hidden lg:block p-10 text-3xl md:text-4xl lg:text-5xl text-center sticky top-0 z-10`}>Start session</h1>
      <div className='h-full px-4 lg:pb-10 flex items-center gap-3 overflow-x-auto snap-x snap-mandatory lg:flex-wrap lg:justify-center'>
        {
          exercises.length > 0 ?
            exercises.map((exercise, index) => <ExerciseCard key={index} exercise={exercise} />)
            :
            <>
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
              <LoadingCard />
            </>
        }
      </div>
    </>
  )
}

export default ExercisesMenu;