import { NextResponse } from "next/server";
import users from "../data.json";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(query.toLowerCase());
  });
  return NextResponse.json(filteredUsers);
}
