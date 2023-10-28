import { getAllExercises } from "@/app/mongoBD/controllers/ExerciseController";
import { Exercise } from "@/app/utils/types";

export async function GET(_req: Request, _res: Response) {
  try {
    const exercises: Exercise[] = await getAllExercises();
    return new Response(JSON.stringify(exercises), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin":
          "https://breathing-oa9xifzjj-luega.vercel.app/",
        "Access-Control-Allow-Methods": "GET",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
      },
    });
  } catch (error: any) {
    return new Response(error, { status: 500 });
  }
}
