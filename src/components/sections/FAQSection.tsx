"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { FAQS } from "@/data/faqs";
import { cn } from "@/lib/utils";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Quick answers to common questions about appointments, services, and facilities."
        />

        <div className="space-y-3">
          {FAQS.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm"
            >
              <button
                type="button"
                aria-expanded={openId === faq.id}
                aria-controls={`faq-panel-${faq.id}`}
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 text-gray-400 flex-shrink-0 transition-transform duration-200",
                    openId === faq.id && "rotate-180"
                  )}
                />
              </button>
              {openId === faq.id && (
                <div id={`faq-panel-${faq.id}`} className="px-5 pb-4">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
