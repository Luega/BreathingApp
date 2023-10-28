import { getAllExercises } from "@/app/mongoBD/controllers/ExerciseController";
import { Exercise } from "@/app/utils/types";

export async function GET(_req: Request, _res: Response) {
  try {
    const exercises: Exercise[] = await getAllExercises();
    return new Response(JSON.stringify(exercises), {
      status: 200,
      headers: {
        "Access-Control-Allow-Credentials":
          process.env.ACCESS_CONTROL_ALLOW_CREDENTIALS!,
        "Access-Control-Allow-Origin": process.env.ACCESS_CONTROL_ALLOW_ORIGIN!,
        "Access-Control-Allow-Methods":
          process.env.ACCESS_CONTROL_ALLOW_METHODS!,
        "Access-Control-Allow-Headers":
          process.env.ACCESS_CONTROL_ALLOW_HEADERS!,
      },
    });
  } catch (error: any) {
    return new Response(error, { status: 500 });
  }
}
