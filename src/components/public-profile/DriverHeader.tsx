"use client";

import { Icon } from "@iconify/react";

interface DriverHeaderProps {
  firstName: string;
  lastName: string;
  bio: string | null;
  photoUrl: string | null;
  zoneAddress: string | null;
  isVerified: boolean;
  email?: string;
  phone?: string;
}

export function DriverHeader({
  firstName,
  lastName,
  bio,
  photoUrl,
  zoneAddress,
  isVerified,
  email,
  phone,
}: DriverHeaderProps) {
  function downloadVCard() {
    const lines = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      `FN:${firstName} ${lastName}`,
      `N:${lastName};${firstName};;;`,
    ];
    if (phone) lines.push(`TEL;TYPE=CELL:${phone}`);
    if (email) lines.push(`EMAIL:${email}`);
    lines.push("END:VCARD");

    const blob = new Blob([lines.join("\r\n")], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${firstName}_${lastName}.vcf`;
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="bg-white border border-neutral-200 rounded-2xl p-6">
      <div className="flex items-start gap-5">
        <div className="w-20 h-20 rounded-2xl bg-neutral-100 flex items-center justify-center overflow-hidden shrink-0">
          {photoUrl ? (
            /* eslint-disable-next-line @next/next/no-img-element */
            <img src={photoUrl} alt={firstName} className="w-full h-full object-cover" />
          ) : (
            <span className="text-2xl font-semibold text-neutral-400">
              {firstName[0]}
              {lastName[0]}
            </span>
          )}
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h1 className="text-xl font-semibold tracking-tight">
              {firstName} {lastName}
            </h1>
            {isVerified && (
              <Icon
                icon="solar:verified-check-bold"
                className="text-blue-500 text-lg"
              />
            )}
          </div>

          {zoneAddress && (
            <div className="flex items-center gap-1.5 text-sm text-neutral-500 mb-3">
              <Icon icon="solar:map-point-linear" className="text-neutral-400" />
              {zoneAddress}
            </div>
          )}

          {bio && (
            <p className="text-sm text-neutral-600 font-light leading-relaxed mb-3">
              {bio}
            </p>
          )}

          {/* Contact info */}
          {(email || phone) && (
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-neutral-600 mb-3">
              {email && (
                <a href={`mailto:${email}`} className="flex items-center gap-1.5 hover:text-neutral-900 transition-colors">
                  <Icon icon="solar:letter-linear" className="text-neutral-400" />
                  {email}
                </a>
              )}
              {phone && (
                <a href={`tel:${phone}`} className="flex items-center gap-1.5 hover:text-neutral-900 transition-colors">
                  <Icon icon="solar:phone-linear" className="text-neutral-400" />
                  {phone}
                </a>
              )}
            </div>
          )}

          {/* vCard button */}
          {(email || phone) && (
            <button
              onClick={downloadVCard}
              className="inline-flex items-center gap-2 text-xs font-medium text-neutral-600 bg-neutral-100 hover:bg-neutral-200 rounded-lg px-3 py-2 transition-colors"
            >
              <Icon icon="solar:user-plus-linear" className="text-sm" />
              Ajouter aux contacts
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
