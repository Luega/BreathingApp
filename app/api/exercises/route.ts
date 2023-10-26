import { NextResponse } from "next/server";
import connectToMongo from "@/app/DB/mongoDB";
import Exercise from "@/app/DB/models/Exercise";

export async function GET() {
  try {
    await connectToMongo();
  } catch (error) {
    return new NextResponse("Error in fetching exercises " + error, {
      status: 500,
    });
  }
}
