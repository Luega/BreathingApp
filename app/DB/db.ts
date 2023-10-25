import { Exercise } from "../utils/types";

const db: Exercise[] = [
  {
    name: "Symmetric breathing",
    inspiratoryApnea: boolean,
    expiratoryApnea: boolean,
    simmetry: boolean,
    tags: ["Awareness"],
  },
  {
    name: "Asymmetric breathing",
    tags: ["Relax"],
  },
  {
    name: "Triangular breathing",
    tags: ["Relax", "Health"],
  },
  {
    name: "Box breathing",
    tags: ["Focus", "Relax"],
  },
];

export default db;
