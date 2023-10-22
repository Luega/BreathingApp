export type Exercise = {
  title: string;
  details: string[];
  tags: string[];
};

export type State = {
  isModalOpened: boolean;
  inhaleTime: number;
  apnea: "INSPIRATORY" | "EXPIRATORY" | "NONE" | "BOTH";
  exerciseTime: number;
};

export type BreathingAppContext = {
  state: State;
  setState: React.Dispatch<React.SetStateAction<State>>;
};
