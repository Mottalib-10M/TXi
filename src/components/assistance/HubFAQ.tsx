"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

interface HubFAQItem {
  question: string;
  answer: string;
}

export function HubFAQ({ items }: { items: HubFAQItem[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3 fade-up">
      {items.map((item, i) => (
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
  );
}
