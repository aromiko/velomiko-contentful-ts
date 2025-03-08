import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTime(seconds: number): string {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;

  if (h > 0) {
    return `${h} h ${m} m`; // If 1 hour or more, exclude seconds
  }
  return `${m} m ${s} s`; // If less than an hour, include seconds
}

export function formatPace(movingTime: number, distance: number): string {
  if (distance === 0) return "N/A"; // Avoid division by zero

  const pacePerKm = movingTime / (distance / 1000); // Seconds per km
  const m = Math.floor(pacePerKm / 60);
  const s = Math.floor(pacePerKm % 60);

  return `${m}:${s} /km`; // Always show minutes and seconds
}
