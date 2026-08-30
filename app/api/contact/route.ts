import { NextRequest, NextResponse } from "next/server";
import { addSubmission } from "@/lib/submissions";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Invalid email." }, { status: 400 });
    }

    if (message.length > 5000) {
      return NextResponse.json({ error: "Message is too long." }, { status: 400 });
    }

    const saved = await addSubmission({ name, email, message });

    // Best-effort email copy (FormSubmit). First use may need email confirmation.
    try {
      await fetch("https://formsubmit.co/ajax/snehazalte005@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio contact from ${name}`,
          _template: "table",
        }),
      });
    } catch {
      // Inbox JSON save already succeeded.
    }

    return NextResponse.json({ ok: true, id: saved.id });
  } catch {
    return NextResponse.json(
      { error: "Could not save your message. Please try again." },
      { status: 500 }
    );
  }
}
