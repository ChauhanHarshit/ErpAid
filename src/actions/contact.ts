"use server"

import { z } from "zod"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  timezone: z.string(),
  date: z.string(),
  timeSlot: z.string(),
  agenda: z.string().optional(),
})

export async function submitContactForm(formData: FormData) {
  try {
    const validatedFields = formSchema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      timezone: formData.get("timezone"),
      date: formData.get("date"),
      timeSlot: formData.get("timeSlot"),
      agenda: formData.get("agenda"),
    })

    // Here you would typically send this data to your backend/API
    // For demo purposes, we'll just simulate a delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return { success: true, message: "Thank you for your submission! We'll be in touch soon." }
  } catch (error) {
    if (error instanceof z.ZodError) {
      return { success: false, message: error.errors[0].message }
    }
    return { success: false, message: "Something went wrong. Please try again." }
  }
}

