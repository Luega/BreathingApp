import { Exercise } from "../utils/types";

const db: Exercise[] = [
  {
    name: "Symmetric breathing",
    exhale: 1,
    inspiratoryApnea: 0,
    expiratoryApnea: 0,
    tags: ["Awareness"],
  },
  {
    name: "Asymmetric breathing",
    exhale: 2,
    inspiratoryApnea: 0,
    expiratoryApnea: 0,
    tags: ["Relax"],
  },
  {
    name: "Triangular breathing",
    exhale: 1,
    inspiratoryApnea: 0,
    expiratoryApnea: 1,
    tags: ["Relax", "Health"],
  },
  {
    name: "Box breathing",
    exhale: 1,
    inspiratoryApnea: 1,
    expiratoryApnea: 1,
    tags: ["Focus", "Relax"],
  },
];

export default db;
