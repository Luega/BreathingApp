import { Exercise } from "../utils/types";

const db: Exercise[] = [
  {
    name: "Symmetric breathing",
    inhale: 1,
    exhale: 1,
    inspiratoryApnea: 0,
    expiratoryApnea: 0,
    tags: ["Awareness"],
  },
  {
    name: "Asymmetric breathing",
    inhale: 1,
    exhale: 2,
    inspiratoryApnea: 0,
    expiratoryApnea: 0,
    tags: ["Relax"],
  },
  {
    name: "Triangular breathing",
    inhale: 1,
    exhale: 1,
    inspiratoryApnea: 0,
    expiratoryApnea: 1,
    tags: ["Relax", "Health"],
  },
  {
    name: "Box breathing",
    inhale: 1,
    exhale: 1,
    inspiratoryApnea: 1,
    expiratoryApnea: 1,
    tags: ["Focus", "Relax"],
  },
];

export default db;
