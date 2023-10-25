import { State } from "./types";

export const getLoops = (state: State): number => {
  let loops = 0;
  const exhaleTime =
    state.exerciseName === "asymmetric"
      ? state.inhaleTime * 2
      : state.inhaleTime;
  if (!state.expiratoryApnea && !state.inspiratoryApnea) {
    loops = Math.round(state.exerciseTime / (state.inhaleTime + exhaleTime));
  } else if (!state.expiratoryApnea || !state.inspiratoryApnea) {
    loops = Math.round(
      state.exerciseTime / (state.inhaleTime * 2 + exhaleTime)
    );
  } else if (state.expiratoryApnea && state.inspiratoryApnea) {
    loops = Math.round(
      state.exerciseTime / (state.inhaleTime * 3 + exhaleTime)
    );
  }

  return loops;
};
