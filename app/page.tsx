'use client'

import BreathingAnimation from "./components/BreathingAnimation"
import ExercisesMenu from "./components/ExercisesMenu"
import Modal from "./components/Modal"
import { Exercise } from "./utils/types"

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
    <div>
      <ExercisesMenu exercises={exercises} />
      <BreathingAnimation />
      <Modal />
    </div>
  )
}
