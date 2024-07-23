import { connectToMongoDB } from "@/lib/db";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { username, email, password } = await req.json();

    await connectToMongoDB();

    const [existingUser, existingUsername] = await Promise.all([
      User.findOne({ email }),
      User.findOne({ username }),
    ]);

    if (existingUser) {
      console.log("Email is already in use");
      return new NextResponse.json(
        { error: "Email is already in use" },
        { status: 400 }
      );
    }
    if (existingUsername) {
      console.log("Username is already in use");
      return new NextResponse.json(
        { error: "Username is already in use" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 5);
    const newUser = new User({
      email,
      username,
      password: hashedPassword,
    });

    await newUser.save();
    console.log("User registered successfully");
    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    console.error("Error during registration:", error);
    return new NextResponse.json(
      { error: error.message || "Internal Server Error" },
      {
        status: 500,
      }
    );
  }
}
