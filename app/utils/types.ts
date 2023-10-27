export type Exercise = {
  name: string;
  exhale: number;
  inspiratoryApnea: number;
  expiratoryApnea: number;
  tags: string[];
};

export type State = {
  isModalOpened: boolean;
  isAnimationStarted: boolean;
  exerciseTime: number;
  inhaleTime: number;
  name: string;
  exhale: number;
  inspiratoryApnea: number;
  expiratoryApnea: number;
};

export type BreathingAppContext = {
  exercises: Exercise[];
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
};
