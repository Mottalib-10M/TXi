"use client";

import { useState, useRef, useEffect } from "react";
import { Icon } from "@iconify/react";

interface ComboBoxProps {
  value: string;
  onChange: (value: string) => void;
  options: string[];
  placeholder?: string;
  className?: string;
}

export function ComboBox({
  value,
  onChange,
  options,
  placeholder,
  className = "",
}: ComboBoxProps) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const ref = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
        setSearch("");
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const query = open ? search : "";
  const filtered = query
    ? options.filter((o) => o.toLowerCase().includes(query.toLowerCase()))
    : options;

  function select(val: string) {
    onChange(val);
    setOpen(false);
    setSearch("");
  }

  return (
    <div ref={ref} className={`relative ${className}`}>
      <div
        className="flex items-center w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm cursor-pointer transition-all focus-within:ring-2 focus-within:ring-neutral-900 focus-within:bg-white"
        onClick={() => {
          setOpen(true);
          setSearch("");
          setTimeout(() => inputRef.current?.focus(), 0);
        }}
      >
        <input
          ref={inputRef}
          value={open ? search : value}
          onChange={(e) => {
            setSearch(e.target.value);
            if (!open) setOpen(true);
            // Also update the real value for free-text input
            onChange(e.target.value);
          }}
          onFocus={() => {
            setOpen(true);
            setSearch(value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              setOpen(false);
              setSearch("");
              inputRef.current?.blur();
            }
            if (e.key === "Enter" && filtered.length > 0) {
              e.preventDefault();
              select(filtered[0]);
              inputRef.current?.blur();
            }
          }}
          placeholder={placeholder}
          className="flex-1 bg-transparent outline-none min-w-0"
        />
        <Icon
          icon={open ? "solar:alt-arrow-up-linear" : "solar:alt-arrow-down-linear"}
          className="text-neutral-400 text-base shrink-0 ml-2"
        />
      </div>

      {open && filtered.length > 0 && (
        <div className="absolute z-50 top-full mt-1 w-full max-h-52 overflow-y-auto bg-white border border-neutral-200 rounded-xl shadow-lg py-1">
          {filtered.map((option) => (
            <button
              key={option}
              type="button"
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => select(option)}
              className={`w-full text-left px-4 py-2.5 text-sm hover:bg-neutral-50 transition-colors ${
                option === value ? "font-medium text-neutral-900 bg-neutral-50" : "text-neutral-600"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
