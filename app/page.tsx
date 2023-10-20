'use client'

import BreathingAnimation from "./components/BreathingAnimation"
import ExercisesMenu from "./components/ExercisesMenu"
import Modal from "./components/Modal"
import { Exercise } from "./utils/types"
import classes from "./style/breathingApp.module.css"
import { useState } from "react"

export default function BreathingApp() {
  const [isModalOpened, setIsModalOpened] = useState<Boolean>(false);

  const exercises: Exercise[] = [
    {
      title: "Symmetric breathing",
      details: ["Inspiration = Expiration", "No Apnea"],
      tags: ["Awareness"],
    },
    {
      title: "Asymmetric breathing",
      details: ["Inspiration < Expiration", "No apnea"],
      tags: ["Relax"],
    },
    {
      title: "Triangular breathing",
      details: ["Inspiration = Expiration", "Expiratory apnea"],
      tags: ["Relax", "Health"],
    },
    {
      title: "Box breathing",
      details: ["Inspiration = Expiration", "Expiratory apnea", "Inspiratory apnea"],
      tags: ["Focus", "Relax"],
    }
  ]

  return (
    <div className={`${classes.container} w-full h-screen grid grid-cols-4`}>
      {
        isModalOpened && <Modal />
      }
      <div className="lg:h-screen col-span-4 lg:col-span-1 overflow-auto">
        <ExercisesMenu exercises={exercises} />
      </div>
      <div className="lg:h-screen col-span-4 lg:col-span-3">
      </div>
    </div>
  )
}
