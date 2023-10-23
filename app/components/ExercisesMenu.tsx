import { Exercise } from "../utils/types";
import ExerciseCard from "./ExerciseCard";
import classes from '../style/exercisesMenu.module.css'

type Props = {
  exercises: Exercise[]
}

const ExercisesMenu = ({ exercises }: Props) => {
  return (
    <>
      <h1 className={`${classes.title} hidden lg:block p-10 text-3xl md:text-4xl lg:text-5xl text-center sticky top-0 z-10`}>Start session</h1>
      <div className='h-full px-4 lg:pb-10 flex items-center gap-3 overflow-x-auto snap-x snap-mandatory lg:flex-wrap lg:justify-center'>
        {
          exercises.map((exercise, index) => <ExerciseCard key={index} exercise={exercise} />)
        }
      </div>
    </>
  )
}

export default ExercisesMenu;