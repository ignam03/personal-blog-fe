import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const clsxMerge = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const kebabCase = (value: string) =>
  value
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();

export default function decodeJwt(token: string) {
  const parts = token.split(".");
  if (parts.length !== 3) {
    throw new Error("Invalid token format");
  }
  const header = JSON.parse(atob(parts[0]));
  const payload = JSON.parse(atob(parts[1]));
  return { header, payload };
}
