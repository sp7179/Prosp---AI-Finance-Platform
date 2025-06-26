"use client";

import { toast } from "sonner"; // make sure sonner is installed via npm/yarn

export function notifySuccess(message = "Success!", delay = 2000) {
  toast.success(message, {
    duration: delay,
  });
}

export function notifyError(message = "Oops! Something went wrong.", delay = 3000) {
  toast.error(message, {
    duration: delay,
  });
}
