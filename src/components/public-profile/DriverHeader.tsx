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
  companyName?: string | null;
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
  companyName,
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
      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 rounded-full bg-neutral-100 flex items-center justify-center overflow-hidden ring-4 ring-neutral-50">
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

        <div className="mt-4 w-full">
          {companyName && (
            <p className="text-xs font-medium text-neutral-500 uppercase tracking-wider mb-1">
              {companyName}
            </p>
          )}
          <div className="flex items-center justify-center gap-2 mb-1">
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
            <div className="flex items-center justify-center gap-1.5 text-sm text-neutral-500 mb-3">
              <Icon icon="solar:map-point-linear" className="text-neutral-400" />
              {zoneAddress}
            </div>
          )}

          {bio && (
            <p className="text-sm text-neutral-600 font-light leading-relaxed mb-4 max-w-md mx-auto">
              {bio}
            </p>
          )}

          {/* Contact info */}
          {(email || phone) && (
            <div className="flex flex-col items-center gap-2 mb-4">
              {email && (
                <a href={`mailto:${email}`} className="flex items-center gap-2 text-base font-medium text-neutral-700 hover:text-neutral-900 transition-colors">
                  <Icon icon="solar:letter-linear" className="text-lg text-neutral-400" />
                  {email}
                </a>
              )}
              {phone && (
                <a href={`tel:${phone}`} className="flex items-center gap-2 text-lg font-semibold text-neutral-900 hover:text-neutral-700 transition-colors">
                  <Icon icon="solar:phone-linear" className="text-lg text-neutral-400" />
                  {phone}
                </a>
              )}
            </div>
          )}

          {/* vCard button */}
          {(email || phone) && (
            <button
              onClick={downloadVCard}
              className="inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-neutral-900 hover:bg-neutral-800 rounded-xl px-5 py-3 transition-colors btn-lift"
            >
              <Icon icon="solar:user-plus-linear" className="text-base" />
              Ajouter aux contacts
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
