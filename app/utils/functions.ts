import { State } from "./types";

export const getLoops = (state: State): number => {
  const loopTime = getLoopTime(
    state.inhaleTime,
    state.inhale,
    state.exhale,
    state.inspiratoryApnea,
    state.expiratoryApnea
  );

  return state.exerciseTime / loopTime;
};

const getLoopTime = (
  inhaleTime: number,
  inhale: number,
  exhale: number,
  inspiratoryApnea: number,
  expiratoryApnea: number
): number => {
  const exerciseInhaleTime = inhaleTime * inhale;
  const exerciseExhaleTime = inhaleTime * exhale;
  const exerciseInhaleApneaTime = inhaleTime * inspiratoryApnea;
  const exerciseExhaleApneaTime = inhaleTime * expiratoryApnea;

  return (
    exerciseInhaleTime +
    exerciseExhaleTime +
    exerciseInhaleApneaTime +
    exerciseExhaleApneaTime
  );
};
