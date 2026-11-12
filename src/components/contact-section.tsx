import * as React from "react"
import { CheckCircle } from "@phosphor-icons/react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { contact } from "@/lib/content"

/**
 * Messages are delivered by Web3Forms (https://web3forms.com) to the email the
 * access key was created with. Set VITE_WEB3FORMS_KEY in the host's env vars
 * (and in .env.local for local testing). The key is public by design.
 */
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY as string | undefined

export function ContactSection() {
  const [submitted, setSubmitted] = React.useState(false)
  const [sending, setSending] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setError(null)

    if (!WEB3FORMS_KEY) {
      setError("not-configured")
      return
    }

    const data = new FormData(event.currentTarget)
    data.append("access_key", WEB3FORMS_KEY)
    data.append("subject", "New enquiry from the JIBAN Enterprise website")
    data.append("from_name", "JIBAN Enterprise website")

    setSending(true)
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      })
      const json = (await res.json()) as { success?: boolean }
      if (!json.success) throw new Error("rejected")
      setSubmitted(true)
    } catch {
      setError("failed")
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contact" className="bg-muted/60 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-xl">
        <Card className="rounded-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-navy">Get In Touch</CardTitle>
            <CardDescription>
              Have a question about our products or services? Send us a
              message and we'll get back to you.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div className="flex flex-col items-center gap-2 py-8 text-center">
                <CheckCircle weight="fill" className="size-10 text-primary" />
                <p className="font-medium">Thanks for reaching out!</p>
                <p className="text-sm text-muted-foreground">
                  We'll get back to you soon.
                </p>
              </div>
            ) : (
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="How can we help?"
                    rows={4}
                    required
                  />
                </div>
                {/* spam honeypot checked by Web3Forms */}
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />
                {error && (
                  <p role="alert" className="text-sm text-destructive">
                    Sorry, your message couldn't be sent. Please email us at{" "}
                    <a href={`mailto:${contact.email}`} className="underline">
                      {contact.email}
                    </a>{" "}
                    or call {contact.phone}.
                  </p>
                )}
                <Button type="submit" size="lg" className="mt-2 h-11" disabled={sending}>
                  {sending ? "Sending…" : "Send message"}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
