"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ALL_SERVICES, FEATURED_SERVICE } from "@/lib/service-data";
import { supabase } from "@/lib/supabase";
import { Zap, Loader2 } from "lucide-react";

interface ContactFormProps {
  variant?: "dark" | "light";
  preselectedService?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^\+?1?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

function sanitizeText(input: string): string {
  return input.replace(/<[^>]*>/g, "").trim();
}

interface FieldErrors {
  name?: string;
  phone?: string;
  email?: string;
}

export function ContactForm({ variant = "dark", preselectedService }: ContactFormProps) {
  const router = useRouter();
  const pathname = usePathname();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(preselectedService ?? "");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const isDark = variant === "dark";
  const baseInput = isDark
    ? "h-12 bg-transparent border text-white placeholder:text-white/40 rounded-md focus:border-brand-green text-base"
    : "h-12 bg-transparent border text-brand-text placeholder:text-brand-muted rounded-md focus:border-brand-green text-base";
  const borderDefault = isDark ? "border-white/20" : "border-brand-border";
  const borderError = "border-red-400";
  const selectClass = isDark
    ? "h-12 bg-transparent border border-white/20 text-white rounded-md focus:border-brand-green [&>span]:text-white/40 text-base"
    : "h-12 bg-transparent border border-brand-border text-brand-text rounded-md focus:border-brand-green text-base";

  function validate(): FieldErrors {
    const errors: FieldErrors = {};
    if (!name.trim()) errors.name = "Name is required.";
    if (!phone.trim()) {
      errors.phone = "Phone number is required.";
    } else if (!PHONE_RE.test(phone.trim())) {
      errors.phone = "Enter a valid phone number.";
    }
    if (!email.trim()) {
      errors.email = "Email is required.";
    } else if (!EMAIL_RE.test(email.trim())) {
      errors.email = "Enter a valid email address.";
    }
    return errors;
  }

  function handleBlur(field: string) {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setFieldErrors(validate());
  }

  function inputClass(field: keyof FieldErrors) {
    const hasError = touched[field] && fieldErrors[field];
    return `${baseInput} ${hasError ? borderError : borderDefault}`;
  }

  async function handleSubmit() {
    setErrorMsg("");
    setTouched({ name: true, phone: true, email: true });

    const errors = validate();
    setFieldErrors(errors);

    if (Object.keys(errors).length > 0) return;

    setStatus("submitting");

    const { error } = await supabase.from("quotes").insert({
      name: sanitizeText(name),
      phone: sanitizeText(phone),
      email: sanitizeText(email),
      service: service || "not specified",
      message: sanitizeText(message) || null,
      source_page: pathname,
    });

    if (error) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please call us at (403) 874-3690 instead.");
      return;
    }

    router.push("/thank-you");
  }

  return (
    <div role="form">
      <h3 className={`font-display text-3xl ${isDark ? "text-white" : "text-brand-text"} mb-2`}>
        Request a Consultation
      </h3>
      <p className={`font-sans text-sm mb-8 ${isDark ? "text-white/50" : "text-brand-muted"}`}>
        Tell us about your project and we will get back to you the same day.
      </p>
      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Input
              placeholder="Full Name *"
              className={inputClass("name")}
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => handleBlur("name")}
            />
            {touched.name && fieldErrors.name && (
              <p className="font-sans text-xs text-red-400 mt-1">{fieldErrors.name}</p>
            )}
          </div>
          <div>
            <Input
              placeholder="Phone Number *"
              type="tel"
              className={inputClass("phone")}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onBlur={() => handleBlur("phone")}
            />
            {touched.phone && fieldErrors.phone && (
              <p className="font-sans text-xs text-red-400 mt-1">{fieldErrors.phone}</p>
            )}
          </div>
        </div>
        <div>
          <Input
            placeholder="Email Address *"
            type="email"
            className={inputClass("email")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => handleBlur("email")}
          />
          {touched.email && fieldErrors.email && (
            <p className="font-sans text-xs text-red-400 mt-1">{fieldErrors.email}</p>
          )}
        </div>
        <Select value={service} onValueChange={setService}>
          <SelectTrigger className={selectClass}>
            <SelectValue placeholder="What service are you interested in?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={FEATURED_SERVICE.slug}>{FEATURED_SERVICE.name}</SelectItem>
            {ALL_SERVICES.map((s) => (
              <SelectItem key={s.slug} value={s.slug}>{s.name}</SelectItem>
            ))}
            <SelectItem value="other">Other / Not Sure</SelectItem>
          </SelectContent>
        </Select>
        <Textarea
          placeholder="Tell us about your project..."
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={isDark
            ? "bg-transparent border border-white/20 text-white placeholder:text-white/40 rounded-md focus:border-brand-green text-base"
            : "bg-transparent border border-brand-border text-brand-text placeholder:text-brand-muted rounded-md focus:border-brand-green text-base"
          }
        />

        {errorMsg && (
          <p className="font-sans text-sm text-red-400">{errorMsg}</p>
        )}

        <button
          type="button"
          onClick={handleSubmit}
          disabled={status === "submitting"}
          className="w-full bg-brand-green text-white rounded-md py-3.5 text-sm uppercase tracking-wider font-sans hover:bg-brand-green/90 transition-colors disabled:opacity-60"
        >
          {status === "submitting" ? (
            <span className="flex items-center justify-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Submitting...
            </span>
          ) : (
            "Request a Consultation"
          )}
        </button>
        <div className={`flex items-center justify-center gap-2 ${isDark ? "text-white/40" : "text-brand-muted"}`}>
          <Zap className="h-3.5 w-3.5" />
          <p className="font-sans text-xs">Same-day response guaranteed</p>
        </div>
      </div>
    </div>
  );
}
