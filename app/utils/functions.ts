import { State } from "./types";

export const getLoops = (state: State): number => {
  const loopTime = getLoopTime(
    state.inhaleTime,
    state.exhale,
    state.inspiratoryApnea,
    state.expiratoryApnea
  );

  const numberOfLoops = state.exerciseTime / loopTime;

  return Number.isNaN(numberOfLoops) || numberOfLoops <= 0
    ? 0
    : Math.ceil(numberOfLoops);
};

const getLoopTime = (
  inhaleTime: number,
  exhale: number,
  inspiratoryApnea: number,
  expiratoryApnea: number
): number => {
  const exerciseExhaleTime = inhaleTime * exhale;
  const exerciseInhaleApneaTime = inhaleTime * inspiratoryApnea;
  const exerciseExhaleApneaTime = inhaleTime * expiratoryApnea;

  return (
    inhaleTime +
    exerciseExhaleTime +
    exerciseInhaleApneaTime +
    exerciseExhaleApneaTime
  );
};
