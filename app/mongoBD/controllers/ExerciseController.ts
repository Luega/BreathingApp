import connectToMongo from "@/app/mongoBD/mongoConnection";
import Exercise from "@/app/mongoBD/models/Exercise";

export const getAllExercises = async () => {
  await connectToMongo();
  const exercises = await Exercise.find();

  return exercises;
};
