import { Exercise } from "../utils/types"
import Tag from "./Tag";

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
        tags.map((tag, index) => <Tag key={index} name={tag} />)
      }
    </div>
  )
}

export default ExerciseCard