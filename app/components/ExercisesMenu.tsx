import { Exercise } from "../utils/types";
import ExerciseCard from "./ExerciseCard";

type Props = {
  exercises: Exercise[]
}

const ExercisesMenu = ({ exercises }: Props) => {
  return (
    <>
      <h1 className="my-8 text-6xl text-center">Start session</h1>
      <div className="flex flex-col justify-center">
        {
          exercises.map((exercise, index) => <ExerciseCard key={index} exercise={exercise} />)
        }
      </div>
    </>
  )
}

export default ExercisesMenu;