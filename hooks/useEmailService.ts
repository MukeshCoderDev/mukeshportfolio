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
  const [statusMessage, setStatusMessage] = useState<string>("");

  const sendEmail = async (params: EmailParams) => {
    setIsSending(true);
    setError(null);
    setStatusMessage("Sending...");

    // Check if environment variables are set
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const userId = import.meta.env.VITE_EMAILJS_USER_ID;

    if (!serviceId || !templateId || !userId) {
      setError("Email service not configured. Please check environment variables.");
      setStatusMessage("Configuration Error: Email service not set up.");
      setIsSending(false);
      return;
    }

    try {
      const result = await emailjs.send(serviceId, templateId, { ...params }, userId);
      console.log("Email sent successfully:", result.text);
      setIsSent(true);
      setStatusMessage("Success! Your message has been sent.");

      // Clear status message after 5 seconds
      setTimeout(() => {
        setStatusMessage("");
        setIsSent(false);
      }, 5000);
    } catch (err) {
      console.error("Email sending failed:", err);
      setError("Failed to send message. Please try again later.");
      setStatusMessage("Error: Failed to send message. Please try again.");
      setIsSent(false);

      // Clear error message after 5 seconds
      setTimeout(() => {
        setStatusMessage("");
        setError(null);
      }, 5000);
    } finally {
      setIsSending(false);
    }
  };

  return { sendEmail, isSending, isSent, error, statusMessage };
};
