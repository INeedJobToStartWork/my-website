import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

//----------------------
// Functions
//----------------------

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
