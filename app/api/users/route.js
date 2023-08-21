import users from "./data.json";
import { NextResponse } from "next/server";
import { v4 as uuid } from "uuid";

export async function GET(request) {
  return NextResponse.json(users);
}

export async function POST(request) {
  const user = await request.json();

  const newUser = {
    id: uuid(),
    ...user,
  };

  users.push(newUser);

  return NextResponse.json({ message: "User added" });
}
