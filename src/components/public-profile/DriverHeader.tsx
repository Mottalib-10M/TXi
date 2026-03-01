import { Icon } from "@iconify/react";

interface DriverHeaderProps {
  firstName: string;
  lastName: string;
  bio: string | null;
  photoUrl: string | null;
  zoneAddress: string | null;
  isVerified: boolean;
}

export function DriverHeader({
  firstName,
  lastName,
  bio,
  photoUrl,
  zoneAddress,
  isVerified,
}: DriverHeaderProps) {
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
            <p className="text-sm text-neutral-600 font-light leading-relaxed">
              {bio}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
