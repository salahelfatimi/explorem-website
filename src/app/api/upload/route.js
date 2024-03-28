import { NextResponse } from "next/server";
import path from "path";
import { writeFile, readFile, unlink } from "fs/promises"; // Import unlink for file deletion
import { EmailTemplateCondidates } from "@/components/email-template-conditates";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export const POST = async (req, res) => {
  const formData = await req.formData();

  const file = formData.get("file");
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const tele = formData.get("tele");
  const email = formData.get("email");

  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  const filename = `${lastName}.pdf`.replaceAll(" ", "_");

  try {
    await writeFile(
      path.join(process.cwd(), "public/pdf/" + filename),
      buffer
    );

    const fileBuffer = await readFile(
      path.join(process.cwd(), "public/pdf/" + filename)
    );

    const data = await resend.emails.send({
      from: `${lastName}onboarding@resend.dev`,
      to: "salahfatimi76@gmail.com",
      subject: "condidatios",
      attachments: [
        {
          filename: filename,
          path:"https://nesin.io/_next/image?url=%2Fstatic%2Fimages%2FAshikNesin.jpg&w=384&q=75"
        },
      ],
      react: EmailTemplateCondidates({
        firstName: firstName,
        lastName: lastName,
        Email: email,
        Phone: tele,
      }),
    });

    // Delete the PDF file after sending the email
    await unlink(path.join(process.cwd(), "public/pdf/" + filename));

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
};
