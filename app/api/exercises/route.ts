import { getAllExercises } from "@/app/mongoBD/controllers/ExerciseController";
import { Exercise } from "@/app/utils/types";

export async function GET(_req: Request, res: Response) {
  try {
    const exercises: Exercise[] = await getAllExercises();
    return new Response(JSON.stringify(exercises), {
      status: 200,
      headers: [
        ["Access-Control-Allow-Origin", "*"],
        ["Access-Control-Allow-Credentials", "true"],
        ["Access-Control-Allow-Methods", "GET,DELETE,PATCH,POST,PUT"],
        [
          "Access-Control-Allow-Headers",
          "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
        ],
      ],
    });
  } catch (error: any) {
    return new Response(error, { status: 500 });
  }
}
