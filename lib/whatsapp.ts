const WHATSAPP_NUMBER = "918590550785";

export function createWhatsAppUrl(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export const WHATSAPP_MESSAGES = {
  businessEnquiry:
    "Hi GrowClickers, I'm interested in your Business Growth Strategy services. I would like to understand how you can help my business identify growth opportunities and build a structured growth plan.",
  academyEnquiry:
    "Hi GrowClickers Academy, I'm interested in your performance marketing courses. Please share the course details, schedule, and admission process.",
  contactPageEnquiry:
    "Hi GrowClickers, I visited your website and would like to know more about your services. Please connect me with your team.",
};

export function openWhatsApp(message: string): void {
  const url = createWhatsAppUrl(message);
  window.open(url, "_blank", "noopener,noreferrer");
}

