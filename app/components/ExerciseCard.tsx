import { Exercise } from "../utils/types"
import Tag from "./Tag";
import classes from '../style/exerciseCard.module.css'

type Props = {
  exercise: Exercise
}

const ExerciseCard = ({ exercise }: Props) => {
  const { title, details, tags } = exercise;

  return (
    <div className={`${classes.card} p-4`}>
      <h1 className="text-xl uppercase">{title}</h1>
      <div className="my-4 font-thin">
        {
          details.map((detail, index) => <p key={index}>{detail}</p>)
        }
      </div>
      <div className="flex gap-2">
        {
          tags.map((tag, index) => <Tag key={index} name={tag} />)
        }
      </div>
    </div>
  )
}

export default ExerciseCard