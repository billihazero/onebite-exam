import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

//조건부 클래스를 진행할 때 유용하다
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
