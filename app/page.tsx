'use client'

import BreathingAnimation from "./components/BreathingAnimation"
import ExercisesMenu from "./components/ExercisesMenu"
import Modal from "./components/Modal"
import { Exercise } from "./utils/types"
import classes from "./style/breathingApp.module.css"

export default function BreathingApp() {
  const exercises: Exercise[] = [
    {
      title: "First",
      details: ["hello", "hi"],
      tags: ["super", "top"],
    },
    {
      title: "Second",
      details: ["hello", "hi"],
      tags: ["super", "top"],
    }
  ]

  return (
    <div className={`${classes.container} w-full h-screen grid grid-cols-4`}>
      <div className="col-span-1 border">
        <ExercisesMenu exercises={exercises} />
      </div>
      <div className="col-span-3 border">
        <BreathingAnimation />
      </div>
    </div>
  )
}
