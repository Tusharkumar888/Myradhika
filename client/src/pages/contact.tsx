import { useState } from "react";
import Navbar from "@/components/site/navbar";
import Footer from "@/components/site/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Phone } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="min-h-screen" data-testid="page-contact">
      <Navbar />

      <main className="lux-container py-10" data-testid="main-contact">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Contact</div>
            <h1 className="mt-2 text-3xl sm:text-4xl" data-testid="text-contact-title">
              Let\u2019s talk property
            </h1>
            <p className="mt-3 text-sm text-muted-foreground" data-testid="text-contact-subtitle">
              Tell us what you need and we\u2019ll respond quickly. Or message us on WhatsApp for faster replies.
            </p>

            <div className="mt-6 grid gap-3">
              <div className="rounded-2xl border bg-white/60 p-4" data-testid="card-contact-phone">
                <div className="text-xs text-muted-foreground">Phone</div>
                <div className="mt-1 font-medium">+1 (555) 013-2400</div>
              </div>
              <div className="rounded-2xl border bg-white/60 p-4" data-testid="card-contact-email">
                <div className="text-xs text-muted-foreground">Email</div>
                <div className="mt-1 font-medium">hello@aurumestates.com</div>
              </div>
              <div className="rounded-2xl border bg-white/60 p-4" data-testid="card-contact-address">
                <div className="text-xs text-muted-foreground">Office</div>
                <div className="mt-1 font-medium">88 Meridian Ave, Downtown</div>
              </div>

              <a
                href="https://wa.me/15550132400"
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "mt-2 inline-flex items-center justify-center gap-2 rounded-xl border bg-card px-4 py-3 text-sm font-medium",
                  "hover-elevate",
                )}
                data-testid="link-whatsapp"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp chat
                <Badge className="ml-1 bg-[hsl(var(--accent))]/15 text-foreground border-transparent">
                  Fast
                </Badge>
              </a>
            </div>
          </div>

          <div className="rounded-3xl border bg-card p-7 lux-shadow" data-testid="card-contact-form">
            <div className="text-sm font-semibold" data-testid="text-form-title">
              Send a message
            </div>
            <div className="mt-1 text-xs text-muted-foreground" data-testid="text-form-subtitle">
              This is a mockup form (no backend). We\u2019ll show a success message.
            </div>

            <form
              className="mt-5 grid gap-3"
              data-testid="form-contact"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! Our team will reach out shortly.");
                setName("");
                setEmail("");
                setPhone("");
                setMessage("");
              }}
            >
              <Input
                className="rounded-xl"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                data-testid="input-name"
              />
              <Input
                className="rounded-xl"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                data-testid="input-email"
              />
              <Input
                className="rounded-xl"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                data-testid="input-phone"
              />
              <Textarea
                className="rounded-xl"
                placeholder="Tell us what you're looking for..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                data-testid="input-message"
              />

              <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:justify-end">
                <Button
                  variant="outline"
                  className="rounded-xl"
                  type="button"
                  data-testid="button-call-now"
                >
                  <Phone className="mr-2 h-4 w-4" /> Call Now
                </Button>
                <Button
                  className={cn(
                    "rounded-xl",
                    "bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]",
                    "hover:bg-[hsl(var(--accent))]",
                  )}
                  type="submit"
                  data-testid="button-submit"
                >
                  Send
                </Button>
              </div>
            </form>

            <div className="mt-6 overflow-hidden rounded-2xl border" data-testid="map-embed">
              <iframe
                title="map"
                className="h-[300px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=40.7128,-74.0060&z=13&output=embed"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
