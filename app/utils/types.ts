export type Exercise = {
  title: string;
  details: string[];
  tags: string[];
};

export type State = {
  isModalOpened: boolean;
  exerciseName: ExerciseName;
  inhaleTime: number;
  inspiratoryApnea: boolean;
  expiratoryApnea: boolean;
  exerciseTime: number;
};

export type BreathingAppContext = {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
};

export type ExerciseName =
  | "symmetric"
  | "asymmetric"
  | "triangular"
  | "box"
  | "none";
