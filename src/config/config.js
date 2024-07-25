export const configFiles = {
  emailJsPublicKey: String(import.meta.env.VITE_EMAILJS_PUBLIC_KEY),
  emailJsServiceKey: String(import.meta.env.VITE_EMAILJS_SERVICE_KEY),
  emailJsTemplateKey: String(import.meta.env.VITE_EMAILJS_TEMPLATE_KEY),
};
