"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";
import type { CityFAQ as CityFAQType } from "@/data/cities";

export function CityFAQ({ cityName, faq }: { cityName: string; faq: CityFAQType[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-neutral-50 border-t border-b border-neutral-100 py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">
            FAQ
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Questions fréquentes sur les taxis à {cityName}
          </h2>
        </div>
        <div className="space-y-3 fade-up">
          {faq.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-neutral-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-sm font-medium pr-4">{item.question}</span>
                <Icon
                  icon="solar:alt-arrow-down-linear"
                  className={`text-neutral-400 shrink-0 transition-transform duration-200 ${
                    open === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              {open === i && (
                <div className="px-5 pb-5 -mt-1">
                  <p className="text-sm text-neutral-500 font-light leading-relaxed">
                    {item.answer}
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
