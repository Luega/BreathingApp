import { Exercise } from "../utils/types";
import ExerciseCard from "./ExerciseCard";
import classes from '../style/exercisesMenu.module.css'

type Props = {
  exercises: Exercise[]
}

const ExercisesMenu = ({ exercises }: Props) => {
  return (
    <>
      <h1 className={`${classes.title} py-10 text-6xl text-center sticky top-0 z-10`}>Start session</h1>
      <div className="mb-10 flex flex-wrap justify-center gap-3 lg:grid lg:gap-4 lg:justify-items-center">
        {
          exercises.map((exercise, index) => <ExerciseCard key={index} exercise={exercise} />)
        }
      </div>
    </>
  )
}

export default ExercisesMenu;