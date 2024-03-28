import { NextResponse } from "next/server";
import path from "path";
import { createWriteStream, promises as fsPromises } from "fs";
import { pipeline } from "stream/promises";
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

  const filename = `${lastName}.pdf`.replaceAll(" ", "_");
  const filePath = path.join(process.cwd(), "public/pdf/" + filename);

  // Create a writable stream to write the file
  const writeStream = createWriteStream(filePath);

  try {
    // Use pipeline to handle the stream and write the file
    await pipeline(file.stream(), writeStream);

    const fileBuffer = await fsPromises.readFile(filePath);

    const data = await resend.emails.send({
      from: `${lastName}onboarding@resend.dev`,
      to: "salahfatimi76@gmail.com",
      subject: "condidatios",
      attachments: [
        {
          filename: filename,
          content: fileBuffer,
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
    await fsPromises.unlink(filePath);

    
    return Response.json(data);
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "An error occurred while processing your request." }, { status: 500 });
  }
};
