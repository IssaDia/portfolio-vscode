import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "../../components/contact/EmailTemplate";
import { Resend } from "resend";

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  if (!process.env.NEXT_RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not defined.");
    return res.status(500).json({ message: "Server configuration error." });
  }

  const resend = new Resend(process.env.NEXT_RESEND_API_KEY);

  try {
    const { name, subject } = req.body;

    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["issadiapro@gmail.com"],
      subject: subject,
      react: EmailTemplate({ firstName: name }),
    });

    if (error) {
      console.error(error);
      return res.status(400).json(error);
    }

    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error sending email." });
  }
};

export default sendEmail;
