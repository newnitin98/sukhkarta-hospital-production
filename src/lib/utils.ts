import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhone(phone: string): string {
  return phone.replace(/^\+91/, "+91 ").replace(/(\d{5})(\d{5})$/, "$1 $2");
}

export function buildWhatsAppUrl(phone: string, message?: string): string {
  const clean = phone.replace(/\D/g, "");
  const encoded = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${clean}${encoded}`;
}

export function buildTelUrl(phone: string): string {
  return `tel:${phone.replace(/\s/g, "")}`;
}
