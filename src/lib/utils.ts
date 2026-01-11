import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


/**
 * Converte segundos para minutos arredondados.
 * @param seconds 
 * @returns 
 */
export function formatSecondsToMinutes(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  return `${minutes} min`;
}