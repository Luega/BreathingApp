'use client'

import BreathingAnimation from "./components/BreathingAnimation"
import ExercisesMenu from "./components/ExercisesMenu"
import Modal from "./components/Modal"
import { useBreathingAppContext } from "./contexts/breathingAppContext"

export default function BreathingApp() {
  const { state } = useBreathingAppContext();

  return (
    <div className="w-full h-screen grid grid-rows-3 lg:grid-cols-4">
      {
        state.isModalOpened && <Modal />
      }
      <div className="lg:h-screen col-span-4 lg:col-span-1 overflow-auto">
        <ExercisesMenu />
      </div>
      <div className="lg:h-screen col-span-4 row-span-2 lg:col-span-3 z-10 overflow-auto">
        <BreathingAnimation />
      </div>
    </div>
  )
}
