import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, subject, message, tele, email } = body;
    const data = await resend.emails.send({
      from: `${lastName}onboarding@resend.dev`,
      to: "salahfatimi76@gmail.com",
      subject: subject,
      react: EmailTemplate({
        firstName: firstName,
        lastName: lastName,
        Msg: message,
        Email: email,
        Phone: tele,
      }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
