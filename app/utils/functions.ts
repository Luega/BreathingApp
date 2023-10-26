import { State } from "./types";

export const getLoops = (state: State): number => {
  const loopTime = getLoopTime(
    state.inhaleTime,
    state.inhale,
    state.exhale,
    state.inspiratoryApnea,
    state.expiratoryApnea
  );

  const numberOfLoops = state.exerciseTime / loopTime;

  return Number.isNaN(numberOfLoops) || numberOfLoops <= 0
    ? 0
    : state.exerciseTime / loopTime;
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
