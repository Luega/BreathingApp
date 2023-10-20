import { Exercise } from "../utils/types";
import ExerciseCard from "./ExerciseCard";
import classes from '../style/exercisesMenu.module.css'

type Props = {
  exercises: Exercise[]
}

const ExercisesMenu = ({ exercises }: Props) => {
  return (
    <>
      <h1 className={`${classes.title} py-10 text-3xl md:text-4xl lg:text-5xl text-center sticky top-0 z-10`}>Start session</h1>
      <div className="mx-4 mb-10 flex flex-wrap justify-center gap-4">
        {
          exercises.map((exercise, index) => <ExerciseCard key={index} exercise={exercise} />)
        }
      </div>
    </>
  )
}

export default ExercisesMenu;