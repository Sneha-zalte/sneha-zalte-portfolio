import { NextRequest, NextResponse } from "next/server";
import { readSubmissions } from "@/lib/submissions";

export const runtime = "nodejs";

export async function GET(req: NextRequest) {
  const password = req.nextUrl.searchParams.get("password") || "";
  const expected = process.env.SUBMISSIONS_PASSWORD || "sneha2026";

  if (password !== expected) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const submissions = await readSubmissions();
  return NextResponse.json({ submissions });
}
