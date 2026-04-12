import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.TO_EMAIL!,
      subject: "New Booking Request - Varaa Villa",
      html: `
        <h2>New Booking Request</h2>
        <p><strong>Name:</strong> ${body.name}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>
        <p><strong>Check-in:</strong> ${body.checkin}</p>
        <p><strong>Check-out:</strong> ${body.checkout}</p>
        <p><strong>Guests:</strong> ${body.guests}</p>
        <p><strong>Message:</strong> ${body.message || "N/A"}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}