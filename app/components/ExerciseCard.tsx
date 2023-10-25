import { useBreathingAppContext } from "../contexts/breathingAppContext";
import { Exercise, State } from "../utils/types"
import classes from '../style/exerciseCard.module.css'
import Tag from "./Tag";
import { useEffect } from "react";

type Props = {
  exercise: Exercise
}

const ExerciseCard = ({ exercise }: Props) => {
  const { setState } = useBreathingAppContext();

  const getType = () => {
    if (exercise.inhale === exercise.exhale) {
      return <p>Inhale = Exhale</p>
    }
    if (exercise.inhale < exercise.exhale) {
      return <p>Inhale `{`<`}` Exhale</p>
    }
    if (exercise.inhale > exercise.exhale) {
      return <p>Inhale `{`>`}` Exhale</p>
    }
  }
  const exerciseType = getType();

  const openModalHandler = () => {
    setState((prevState: State) => {
      return {
        ...prevState,
        isModalOpened: true,
        isAnimationStarted: false
      }
    });
  }

  return (
    <div onClick={() => openModalHandler()} className={`${classes.card} p-4 shadow-xl cursor-pointer`}>
      <h1 className="text-xl uppercase">{exercise.name}</h1>
      <div className="my-4 font-thin">
        <p>{exerciseType}</p>
        <p>Apnea: {exercise.inspiratoryApnea !== 0 && "Inspiratory"} {exercise.expiratoryApnea !== 0 && "Expiratory"}</p>
      </div>
      <div className="flex gap-2 absolute bottom-3 left-3">
        {
          exercise.tags.map((tag, index) => <Tag key={index} name={tag} />)
        }
      </div>
    </div>
  )
}

export default ExerciseCard