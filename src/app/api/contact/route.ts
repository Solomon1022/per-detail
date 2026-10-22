import { NextResponse } from "next/server";

export async function POST(request: Request) {
  let body: { name?: string; email?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  const to = process.env.CONTACT_EMAIL || "3161594975@qq.com";
  const apiKey = process.env.RESEND_API_KEY;

  // 未配置 Resend：降级为 mailto，由用户的邮件客户端发送
  if (!apiKey) {
    const subject = encodeURIComponent(`[个人网站留言] ${name}`);
    const text = encodeURIComponent(
      `${message}\n\n---\n发件人 / From: ${name} <${email}>`
    );
    return NextResponse.json({
      fallback: `mailto:${to}?subject=${subject}&body=${text}`,
    });
  }

  // 配置了 Resend：服务端直接发送
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: [to],
        reply_to: email,
        subject: `[Portfolio Contact] ${name}`,
        text: `${message}\n\n---\nFrom: ${name} <${email}>`,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("Resend error:", detail);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
