import { Exercise, State } from "../utils/types"
import Tag from "./Tag";
import classes from '../style/exerciseCard.module.css'
import { useBreathingAppContext } from "../contexts/breathingAppContext";

type Props = {
  exercise: Exercise
}

const ExerciseCard = ({ exercise }: Props) => {
  const { title, details, tags } = exercise;
  const { state, setState } = useBreathingAppContext();

  const openModalHandler = () => {
    setState((prevState: State) => {
      return {
        ...prevState,
        isModalOpened: true
      }
    });
  }

  return (
    <div className={`${classes.card} p-4 shadow-xl cursor-pointer`} onClick={() => openModalHandler()}>
      <h1 className="text-xl uppercase">{title}</h1>
      <div className="my-4 font-thin">
        {
          details.map((detail, index) => <p key={index}>{detail}</p>)
        }
      </div>
      <div className="flex gap-2 absolute bottom-3 left-3">
        {
          tags.map((tag, index) => <Tag key={index} name={tag} />)
        }
      </div>
    </div>
  )
}

export default ExerciseCard