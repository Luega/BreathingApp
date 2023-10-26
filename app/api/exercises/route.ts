import { NextRequest, NextResponse } from "next/server";
import connectToMongo from "@/app/DB/mongoDB";
import Exercise from "@/app/DB/models/Exercise";

export async function GET(_req: NextRequest, _res: NextResponse) {
  try {
    await connectToMongo();
    const exercises = await Exercise.find();
    return new NextResponse(JSON.stringify(exercises), { status: 200 });
  } catch (error) {
    return new NextResponse("Error in fetching exercises " + error, {
      status: 500,
    });
  }
}
