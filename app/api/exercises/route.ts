import { getAllExercises } from "@/app/mongoBD/controllers/ExerciseController";
import { Exercise } from "@/app/utils/types";

export async function GET(_req: Request, res: Response) {
  try {
    const exercises: Exercise[] = await getAllExercises();
    return new Response(JSON.stringify(exercises), {
      status: 200,
    });
  } catch (error: any) {
    return new Response(error, { status: 500 });
  }
}
