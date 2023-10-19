import { Exercise } from "../utils/types"

type Props = {
  exercise: Exercise
}

const ExerciseCard = ({ exercise }: Props) => {
  const { title, details, tags } = exercise;

  return (
    <div>
      <h1>{title}</h1>
      {
        details.map((detail, index) => <p key={index}>{detail}</p>)
      }
      {
        tags.map((tag, index) => <p key={index}>{tag}</p>)
      }
    </div>
  )
}

export default ExerciseCard