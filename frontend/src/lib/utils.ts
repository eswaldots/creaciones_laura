import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function addMinutes(date: Date, minutes: number) {
  return new Date(date.getTime() + minutes * 60000)
}