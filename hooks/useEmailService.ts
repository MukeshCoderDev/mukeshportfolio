import emailjs from "@emailjs/browser";
import { useState } from "react";

interface EmailParams {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const useEmailService = () => {
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmail = async (params: EmailParams) => {
    setIsSending(true);
    setError(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { ...params },
        import.meta.env.VITE_EMAILJS_USER_ID
      );
      setIsSent(true);
    } catch (err) {
      setError("Failed to send message. Please try again later.");
      setIsSent(false);
    } finally {
      setIsSending(false);
    }
  };

  return { sendEmail, isSending, isSent, error };
};
