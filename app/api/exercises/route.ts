import { getAllExercises } from "@/app/mongoBD/controllers/ExerciseController";
import { Exercise } from "@/app/utils/types";

export async function GET(req: Request, _res: Response) {
  try {
    const exercises: Exercise[] = await getAllExercises();
    const allowedOrigin = req.headers.get("origin");
    return new Response(JSON.stringify(exercises), {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": allowedOrigin || "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers":
          "Content-Type, Authorization, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version",
        "Access-Control-Max-Age": "86400",
      },
    });
  } catch (error: any) {
    return new Response(error, { status: 500 });
  }
}
