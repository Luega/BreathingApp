import { Exercise } from "../utils/types";
import ExerciseCard from "./ExerciseCard";

type Props = {
  exercises: Exercise[]
}

const ExercisesMenu = ({ exercises }: Props) => {
  return (
    <div>
      <h1>Start session</h1>
      {
        exercises.map((exercise, index) => <ExerciseCard key={index} exercise={exercise} />)
      }
    </div>
  )
}

export default ExercisesMenu;