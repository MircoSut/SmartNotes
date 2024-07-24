import { connectToMongoDB } from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectToMongoDB();
    const { email, username } = await req.json();
    const emailInUse = await User.findOne({ email }).select("_id");
    const usernameInUse = await User.findOne({ username }).select("_id");
    return NextResponse.json({ emailInUse, usernameInUse });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
