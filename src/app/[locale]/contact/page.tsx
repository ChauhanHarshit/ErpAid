"use client"

import { useState, useRef } from "react"
import { Loader2, PaperclipIcon } from "lucide-react"
// import { format } from "date-fns"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useTranslations } from "next-intl"
import emailjs from "@emailjs/browser"

// import { cn } from "@/lib/utils"
import { Button } from "@/app/[locale]/components/ui/button"
// import { Calendar } from "@/app/[locale]/components/ui/calendar"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/app/[locale]/components/ui/form"
import { Input } from "@/app/[locale]/components/ui/input"
// import { Popover, PopoverContent, PopoverTrigger } from "@/app/[locale]/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/app/[locale]/components/ui/select"
import { Textarea } from "@/app/[locale]/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  timezone: z.string(),
  date: z.date(),
  timeSlot: z.string(),
  agenda: z.string().optional(),
})

// const timeSlots = [
//   "09:00 AM - 10:00 AM",
//   "10:00 AM - 11:00 AM",
//   "11:00 AM - 12:00 PM",
//   "02:00 PM - 03:00 PM",
//   "03:00 PM - 04:00 PM",
//   "04:00 PM - 05:00 PM",
// ]

const timezones = [
  "Asia/Calcutta (+05:30)",
  "America/New_York (-05:00)",
  "Europe/London (+00:00)",
  "Asia/Tokyo (+09:00)",
]

export default function ContactPage() {
  const { toast } = useToast()
  const t = useTranslations("ContactPage")
  const form = useRef<HTMLFormElement | null>(null)

  const [isSubmitting, setIsSubmitting] = useState(false)
  const formMethods = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      timezone: "",
      agenda: "",
    },
  })

  async function onSubmit() {
    setIsSubmitting(true)

    try {
      if (form.current) {
        const result = await emailjs.sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )

        if (result.text === "OK") {
          toast({
            title: t("toast.success"),
            description: t("toast.successMessage"),
          })
          formMethods.reset()
        } else {
          throw new Error("Failed to send email")
        }
      } else {
        throw new Error("Form reference is null")
      }
    } catch {
      toast({
        variant: "destructive",
        title: t("toast.error"),
        description: t("toast.errorMessage"),
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{t("title")}</h1>
          <p className="text-gray-600">{t("description")}</p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-8">
          <Form {...formMethods}>
            <form ref={form} onSubmit={formMethods.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <FormField
                  control={formMethods.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("form.name")}</FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={formMethods.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("form.email")}</FormLabel>
                      <FormControl>
                        <Input placeholder="john@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <FormField
                  control={formMethods.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("form.phone")}</FormLabel>
                      <FormControl>
                        <Input placeholder="+1 (555) 000-0000" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={formMethods.control}
                  name="timezone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("form.timezone")}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t("form.selectTimezone")} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {timezones.map((timezone) => (
                            <SelectItem key={timezone} value={timezone}>
                              {timezone}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <FormField
                  control={formMethods.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>{t("form.date")}</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              {field.value ? format(field.value, "PPP") : <span>{t("form.pickDate")}</span>}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={formMethods.control}
                  name="timeSlot"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>{t("form.preferredTime")}</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder={t("form.selectTimeSlot")} />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div> */}

              <FormField
                control={formMethods.control}
                name="agenda"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{t("form.agenda")}</FormLabel>
                    <FormControl>
                      <Textarea placeholder={t("form.agendaPlaceholder")} className="resize-none" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center gap-4">
                <Button type="button" variant="outline" className="gap-2">
                  <PaperclipIcon className="h-4 w-4" />
                  {t("form.attachFiles")}
                </Button>
                <Button type="submit" disabled={isSubmitting} className="ml-auto bg-[#4169E1]">
                  {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  {isSubmitting ? t("form.submitting") : t("form.submit")}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}