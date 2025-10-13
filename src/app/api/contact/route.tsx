import { NextResponse } from "next/server";
import sgMail from "@sendgrid/mail";
import { render } from "@react-email/render";
import { ContactEmail } from "@/emails/ContactEmail";
import { createElement } from "react";


const SENDER_EMAIL = process.env.FROM_EMAIL || "";
const RECEIVER_EMAIL = process.env.TO_EMAIL || "" ;

export async function POST(req: Request) {
  try {
    const data  = await req.json();
    console.log(data);
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

    const html = await render(createElement(ContactEmail, data));

    const msg = {
      to: RECEIVER_EMAIL,
      from: SENDER_EMAIL,
      subject: `New Contact Form Submission from '${data.name}'`,
      html: html,
    };

    sgMail.send(msg);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}