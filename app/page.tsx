'use client'

import BreathingAnimation from "./components/BreathingAnimation"
import ExercisesMenu from "./components/ExercisesMenu"
import Modal from "./components/Modal"
import { Exercise } from "./utils/types"
import classes from "./style/breathingApp.module.css"
import { useState } from "react"
import { useBreathingAppContext } from "./contexts/breathingAppContext"

export default function BreathingApp() {
  const { state, setState } = useBreathingAppContext();

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
    <div className={`${classes.container} w-full h-screen grid grid-rows-2 lg:grid-cols-4`}>
      {
        state.isModalOpened && <Modal />
      }
      <div className="lg:h-screen col-span-4 lg:col-span-1 overflow-auto">
        <ExercisesMenu exercises={exercises} />
      </div>
      <div className={`${classes.animationContainer} lg:h-screen col-span-4 lg:col-span-3 z-10`}>
        <BreathingAnimation />
      </div>
    </div>
  )
}
