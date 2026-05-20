"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, Loader2, Phone } from "lucide-react";
import Link from "next/link";
import { HOSPITAL } from "@/data/hospital";
import { buildWhatsAppUrl } from "@/lib/utils";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(80, "Name too long")
    .regex(/^[a-zA-Z\s.'-]+$/, "Name contains invalid characters"),
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, "Enter a valid 10-digit Indian mobile number"),
  service: z.string().min(1, "Please select a service"),
  doctor: z.string().min(1, "Please select a preferred doctor"),
  date: z.string().min(1, "Please select a preferred date"),
  message: z.string().max(500, "Message too long").optional(),
});

type FormData = z.infer<typeof schema>;

const SERVICES = [
  "Orthopaedic Consultation",
  "Joint Replacement Enquiry",
  "Fracture / Trauma Care",
  "Spine Care",
  "Cardiac Consultation",
  "TMT Test",
  "ECG",
  "Preventive Cardiac Screening",
  "Angioplasty / Cardiac Procedure",
  "General Enquiry",
];

const DOCTORS = [
  { value: "dr-gunjan", label: "Dr. Gunjan R. Dhundele (Orthopaedics)" },
  { value: "dr-tanu", label: "Dr. Tanu Dhundele (Cardiology)" },
  { value: "any", label: "No Preference / Not Sure" },
];

export default function AppointmentForm() {
  const [submitted, setSubmitted] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const doctorLabel =
      DOCTORS.find((d) => d.value === data.doctor)?.label ?? data.doctor;
    const msg = [
      `Hello, I would like to book an appointment at Sukhkarta Hospital.`,
      ``,
      `Name: ${data.name}`,
      `Phone: +91 ${data.phone}`,
      `Service: ${data.service}`,
      `Preferred Doctor: ${doctorLabel}`,
      `Preferred Date: ${data.date}`,
      data.message ? `Message: ${data.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    setWhatsappUrl(buildWhatsAppUrl(HOSPITAL.phones.primary, msg));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-card p-8 text-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2" aria-live="polite">
          Appointment Request Ready
        </h3>
        <p className="text-gray-600 text-sm mb-6 max-w-sm mx-auto">
          Click the button below to send your request via WhatsApp. Our team
          will confirm your appointment shortly.
        </p>
        <div className="flex flex-col gap-3 max-w-xs mx-auto">
          <Link
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-5 py-3 rounded-xl transition-colors text-sm"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Send via WhatsApp
          </Link>
          <Link
            href={`tel:${HOSPITAL.phones.primary}`}
            className="flex items-center justify-center gap-2 border-2 border-brand-blue-600 text-brand-blue-600 hover:bg-brand-blue-50 font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
          >
            <Phone className="h-4 w-4" />
            Call Instead
          </Link>
        </div>
      </div>
    );
  }

  const inputCls = (error?: boolean) =>
    cn(
      "w-full px-4 py-2.5 border rounded-lg text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 transition-colors",
      error
        ? "border-red-300 focus:ring-red-200 bg-red-50"
        : "border-gray-200 focus:ring-brand-blue-200 focus:border-brand-blue-400 bg-white"
    );

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white rounded-2xl shadow-card p-6 sm:p-8 space-y-5"
      noValidate
    >
      <div className="grid sm:grid-cols-2 gap-5">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Full Name <span className="text-brand-red-500">*</span>
          </label>
          <input
            {...register("name")}
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            className={inputCls(!!errors.name)}
          />
          {errors.name && (
            <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Mobile Number <span className="text-brand-red-500">*</span>
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 border border-r-0 border-gray-200 bg-gray-50 rounded-l-lg text-sm text-gray-600">
              +91
            </span>
            <input
              {...register("phone")}
              type="tel"
              autoComplete="tel"
              inputMode="numeric"
              placeholder="10-digit mobile number"
              maxLength={10}
              className={cn(inputCls(!!errors.phone), "rounded-l-none")}
            />
          </div>
          {errors.phone && (
            <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
          )}
        </div>
      </div>

      {/* Service */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Service Needed <span className="text-brand-red-500">*</span>
        </label>
        <select {...register("service")} className={inputCls(!!errors.service)}>
          <option value="">Select a service</option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="text-xs text-red-500 mt-1">{errors.service.message}</p>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {/* Doctor */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Preferred Doctor <span className="text-brand-red-500">*</span>
          </label>
          <select {...register("doctor")} className={inputCls(!!errors.doctor)}>
            <option value="">Select a doctor</option>
            {DOCTORS.map((d) => (
              <option key={d.value} value={d.value}>
                {d.label}
              </option>
            ))}
          </select>
          {errors.doctor && (
            <p className="text-xs text-red-500 mt-1">
              {errors.doctor.message}
            </p>
          )}
        </div>

        {/* Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">
            Preferred Date <span className="text-brand-red-500">*</span>
          </label>
          <input
            {...register("date")}
            type="date"
            min={new Date().toISOString().split("T")[0]}
            className={inputCls(!!errors.date)}
          />
          {errors.date && (
            <p className="text-xs text-red-500 mt-1">{errors.date.message}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          Additional Message{" "}
          <span className="text-gray-400 font-normal">(optional)</span>
        </label>
        <textarea
          {...register("message")}
          rows={3}
          placeholder="Briefly describe your concern or any specific requirements..."
          className={inputCls(!!errors.message)}
        />
        <p className="text-xs text-gray-500 mt-1">
          Please do not include detailed medical records or highly sensitive
          personal health information.
        </p>
        {errors.message && (
          <p className="text-xs text-red-500 mt-1">
            {errors.message.message}
          </p>
        )}
      </div>

      <p className="text-xs text-gray-500">
        Your information is used only to process your appointment enquiry. We
        do not share it with third parties. See our{" "}
        <Link href="/privacy-policy" className="underline hover:text-brand-blue-600">
          Privacy Policy
        </Link>
        .
      </p>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 bg-brand-blue-600 hover:bg-brand-blue-700 disabled:opacity-60 text-white font-bold py-3 rounded-xl transition-colors text-sm"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Processing...
          </>
        ) : (
          "Request Appointment via WhatsApp"
        )}
      </button>

      <div className="flex items-center gap-3 text-xs text-gray-500">
        <div className="flex-1 h-px bg-gray-100" />
        or contact directly
        <div className="flex-1 h-px bg-gray-100" />
      </div>

      <div className="flex flex-wrap gap-3">
        <Link
          href={`tel:${HOSPITAL.phones.primary}`}
          className="flex-1 flex items-center justify-center gap-2 border border-gray-200 hover:border-brand-blue-400 text-gray-700 hover:text-brand-blue-600 font-medium py-2.5 rounded-lg text-sm transition-colors"
        >
          <Phone className="h-4 w-4" />
          Call {HOSPITAL.phones.display.primary}
        </Link>
        <Link
          href="/contact"
          className="flex-1 flex items-center justify-center gap-2 border border-gray-200 hover:border-brand-blue-400 text-gray-700 hover:text-brand-blue-600 font-medium py-2.5 rounded-lg text-sm transition-colors"
        >
          Send Appointment Enquiry
        </Link>
      </div>
    </form>
  );
}
