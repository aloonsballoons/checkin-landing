import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { cleanName, isValidEmail, normalizeEmail } from "@/lib/validation";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Payload = {
  email?: unknown;
  relativeName?: unknown;
  parentFirstName?: unknown;
};

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Something went wrong. Please try again." },
      { status: 400 }
    );
  }

  const email = normalizeEmail(body.email);
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "Please enter a valid email address." },
      { status: 400 }
    );
  }

  const relativeName = cleanName(body.relativeName);
  const parentFirstName = cleanName(body.parentFirstName);

  const supabase = getSupabaseAdmin();

  // Zero-setup fallback: no backend configured → log and succeed.
  if (!supabase) {
    console.info("[waitlist] (no DB configured) signup:", {
      email,
      relativeName,
      parentFirstName,
    });
    return NextResponse.json({ ok: true, alreadyOnList: false });
  }

  // Friendly dedupe: treat an existing email as a happy "already on the list".
  const { data: existing, error: lookupError } = await supabase
    .from("waitlist")
    .select("id")
    .eq("email", email)
    .maybeSingle();

  if (lookupError) {
    console.error("[waitlist] lookup failed:", lookupError.message);
    return NextResponse.json(
      { ok: false, error: "We couldn't save that just now. Please try again." },
      { status: 500 }
    );
  }

  if (existing) {
    return NextResponse.json({ ok: true, alreadyOnList: true });
  }

  const { error: insertError } = await supabase.from("waitlist").insert({
    email,
    relative_name: relativeName,
    parent_first_name: parentFirstName,
  });

  if (insertError) {
    // 23505 = unique_violation: a race between two submits. Still a success.
    if (insertError.code === "23505") {
      return NextResponse.json({ ok: true, alreadyOnList: true });
    }
    console.error("[waitlist] insert failed:", insertError.message);
    return NextResponse.json(
      { ok: false, error: "We couldn't save that just now. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, alreadyOnList: false });
}
