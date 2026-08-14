"use client";

import { useState, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { CheckCircle2, AlertCircle } from "lucide-react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  careFor: string;
  services: string[];
  contactPreference: string;
  message: string;
  consent: boolean;
}

const initialFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  careFor: "",
  services: [],
  contactPreference: "",
  message: "",
  consent: false,
};

const careForOptions = [
  "Myself",
  "A parent",
  "A spouse or partner",
  "Another family member",
  "A friend",
  "A client or patient",
];

const contactPreferences = ["Email", "Phone"];

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {}
  );
  const [submitted, setSubmitted] = useState(false);

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.consent) {
      newErrors.consent =
        "Please confirm you agree to be contacted about your care inquiry.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    if (!validate()) return;

    // TODO: Connect to form submission backend (Resend, Formspree, CRM, or API endpoint).
    // The form data is available in the `formData` state variable.
    // Example integration:
    //
    // const response = await fetch('/api/contact', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });
    //
    // For now, we show a success state to demonstrate the UX flow.

    setSubmitted(true);
  }

  function handleServiceToggle(serviceName: string) {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceName)
        ? prev.services.filter((s) => s !== serviceName)
        : [...prev.services, serviceName],
    }));
  }

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl border border-navy-100/60 shadow-sm shadow-navy-900/[0.03] p-8 sm:p-12 text-center">
        <div className="w-14 h-14 rounded-2xl bg-green-50 text-green-600 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-7 h-7" />
        </div>
        <h3 className="text-[17px] font-bold text-navy-900 mb-2">
          Thank You for Reaching Out
        </h3>
        <p className="text-[15px] text-navy-600 leading-relaxed max-w-md mx-auto">
          We&apos;ve received your inquiry. A member of our team will review your
          message and get in touch with you soon to discuss how we can help.
        </p>
        <p className="mt-4 text-[13px] text-navy-400">
          Note: This form is not yet connected to a backend service. Please
          contact us directly at{" "}
          <a
            href="mailto:hi@asdhomecare.com"
            className="text-navy-600 underline"
          >
            hi@asdhomecare.com
          </a>{" "}
          in the meantime.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl border border-navy-100/60 shadow-sm shadow-navy-900/[0.03] p-6 sm:p-8 lg:p-10 space-y-6"
      noValidate
    >
      {/* Full Name */}
      <div>
        <label
          htmlFor="fullName"
          className="block text-[13px] font-semibold text-navy-800 mb-1.5"
        >
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          id="fullName"
          type="text"
          value={formData.fullName}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, fullName: e.target.value }))
          }
          className={cn(
            "w-full px-4 py-3 rounded-xl border bg-white text-navy-800 text-sm transition-colors",
            "focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500",
            errors.fullName
              ? "border-red-300 bg-red-50/30"
              : "border-navy-200 hover:border-navy-300"
          )}
          aria-describedby={errors.fullName ? "fullName-error" : undefined}
          aria-invalid={errors.fullName ? "true" : undefined}
        />
        {errors.fullName && (
          <p
            id="fullName-error"
            className="flex items-center gap-1.5 mt-1.5 text-sm text-red-600"
            role="alert"
          >
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
            {errors.fullName}
          </p>
        )}
      </div>

      {/* Email & Phone */}
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="email"
            className="block text-[13px] font-semibold text-navy-800 mb-1.5"
          >
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            className={cn(
              "w-full px-4 py-3 rounded-xl border bg-white text-navy-800 text-sm transition-colors",
              "focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500",
              errors.email
                ? "border-red-300 bg-red-50/30"
                : "border-navy-200 hover:border-navy-300"
            )}
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={errors.email ? "true" : undefined}
          />
          {errors.email && (
            <p
              id="email-error"
              className="flex items-center gap-1.5 mt-1.5 text-sm text-red-600"
              role="alert"
            >
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              {errors.email}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-[13px] font-semibold text-navy-800 mb-1.5"
          >
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, phone: e.target.value }))
            }
            className="w-full px-4 py-3 rounded-xl border border-navy-200 hover:border-navy-300 bg-white text-navy-800 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500"
          />
        </div>
      </div>

      {/* Who are you seeking care for */}
      <div>
        <label
          htmlFor="careFor"
          className="block text-[13px] font-semibold text-navy-800 mb-1.5"
        >
          Who are you seeking care for?
        </label>
        <select
          id="careFor"
          value={formData.careFor}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, careFor: e.target.value }))
          }
          className="w-full px-4 py-3 rounded-xl border border-navy-200 hover:border-navy-300 bg-white text-navy-800 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500 appearance-none"
        >
          <option value="">Select an option</option>
          {careForOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Services interested in */}
      <fieldset>
        <legend className="block text-[13px] font-semibold text-navy-800 mb-3">
          Which services are you interested in?
        </legend>
        <div className="grid grid-cols-2 gap-2">
          {services.map((service) => (
            <label
              key={service.slug}
              className={cn(
                "flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl border text-sm cursor-pointer transition-colors",
                formData.services.includes(service.name)
                  ? "border-cyan-400 bg-cyan-50 text-navy-800"
                  : "border-navy-150 bg-white text-navy-600 hover:border-navy-300"
              )}
            >
              <input
                type="checkbox"
                checked={formData.services.includes(service.name)}
                onChange={() => handleServiceToggle(service.name)}
                className="sr-only"
              />
              <div
                className={cn(
                  "w-4 h-4 rounded flex items-center justify-center flex-shrink-0 border transition-colors",
                  formData.services.includes(service.name)
                    ? "bg-cyan-500 border-cyan-500"
                    : "border-navy-300 bg-white"
                )}
              >
                {formData.services.includes(service.name) && (
                  <svg
                    viewBox="0 0 12 12"
                    className="w-3 h-3 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 6l3 3 5-5" />
                  </svg>
                )}
              </div>
              <span className="leading-tight">{service.shortName}</span>
            </label>
          ))}
        </div>
      </fieldset>

      {/* Contact preference */}
      <fieldset>
        <legend className="block text-[13px] font-semibold text-navy-800 mb-3">
          Preferred way to be contacted
        </legend>
        <div className="flex gap-3">
          {contactPreferences.map((pref) => (
            <label
              key={pref}
              className={cn(
                "flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm cursor-pointer transition-colors",
                formData.contactPreference === pref
                  ? "border-cyan-400 bg-cyan-50 text-navy-800"
                  : "border-navy-150 bg-white text-navy-600 hover:border-navy-300"
              )}
            >
              <input
                type="radio"
                name="contactPreference"
                value={pref}
                checked={formData.contactPreference === pref}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    contactPreference: e.target.value,
                  }))
                }
                className="sr-only"
              />
              <div
                className={cn(
                  "w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors",
                  formData.contactPreference === pref
                    ? "border-cyan-500"
                    : "border-navy-300"
                )}
              >
                {formData.contactPreference === pref && (
                  <div className="w-2 h-2 rounded-full bg-cyan-500" />
                )}
              </div>
              {pref}
            </label>
          ))}
        </div>
      </fieldset>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-[13px] font-semibold text-navy-800 mb-1.5"
        >
          Tell us about your care needs
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, message: e.target.value }))
          }
          className="w-full px-4 py-3 rounded-xl border border-navy-200 hover:border-navy-300 bg-white text-navy-800 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:border-cyan-500 resize-y"
          placeholder="Share anything that would help us understand your situation better..."
        />
      </div>

      {/* Consent */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, consent: e.target.checked }))
            }
            className="sr-only"
          />
          <div
            className={cn(
              "w-5 h-5 rounded flex items-center justify-center flex-shrink-0 border-2 mt-0.5 transition-colors",
              formData.consent
                ? "bg-navy-600 border-navy-600"
                : "border-navy-300 bg-white",
              errors.consent && "border-red-400"
            )}
          >
            {formData.consent && (
              <svg
                viewBox="0 0 12 12"
                className="w-3.5 h-3.5 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 6l3 3 5-5" />
              </svg>
            )}
          </div>
          <span className="text-sm text-navy-600 leading-relaxed">
            I agree to be contacted by ASD Homecare regarding my care inquiry.
            My information will be used only to respond to this request.{" "}
            <span className="text-red-500">*</span>
          </span>
        </label>
        {errors.consent && (
          <p
            className="flex items-center gap-1.5 mt-1.5 text-sm text-red-600 ml-8"
            role="alert"
          >
            <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
            {errors.consent}
          </p>
        )}
      </div>

      {/* Submit */}
      <Button type="submit" size="lg" className="w-full sm:w-auto">
        Send Your Inquiry
      </Button>
    </form>
  );
}
