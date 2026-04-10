"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Icon } from "@iconify/react";
import { useTranslations, useLocale } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import { PlacesAutocomplete } from "@/components/booking/PlacesAutocomplete";
import { emailError, phoneError, isValidEmail, isValidPhone } from "@/lib/validation";
import { trackSignUp } from "@/lib/analytics";

type ProfileType = "driver" | "particulier" | "hotel" | "hospital" | "enterprise";

export default function InscriptionPage() {
  const t = useTranslations("auth");
  const tc = useTranslations("common");
  const locale = useLocale();
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") as ProfileType | null;
  const prefillName = searchParams.get("name") || "";
  const prefillPhone = searchParams.get("phone") || "";
  const prefillEmail = searchParams.get("email") || "";
  const isFromBooking = initialType === "particulier" && (prefillName || prefillPhone || prefillEmail);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [profileType, setProfileType] = useState<ProfileType | null>(initialType);
  const [orgAddress, setOrgAddress] = useState("");
  const [formEmail, setFormEmail] = useState(prefillEmail);
  const [formPhone, setFormPhone] = useState(prefillPhone);
  const [cityAddress, setCityAddress] = useState("");
  const [cityLat, setCityLat] = useState<number | undefined>();
  const [cityLng, setCityLng] = useState<number | undefined>();
  const [driverStep, setDriverStep] = useState<1 | 2>(1);
  const [driverFirstName, setDriverFirstName] = useState("");
  const [driverCompanyName, setDriverCompanyName] = useState("");
  const [driverPassword, setDriverPassword] = useState("");
  const [vehicleBrand, setVehicleBrand] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehiclePhotoBase64, setVehiclePhotoBase64] = useState("");
  const [vehiclePhotoPreview, setVehiclePhotoPreview] = useState("");

  const bookingOptions: { type: ProfileType; label: string; icon: string; description: string }[] = [
    { type: "particulier", label: t("particulier"), icon: "solar:user-linear", description: t("particulierDesc") },
    { type: "hotel", label: t("hotel"), icon: "mdi:hotel", description: t("hotelDesc") },
    { type: "hospital", label: t("hospital"), icon: "solar:health-linear", description: t("hospitalDesc") },
    { type: "enterprise", label: t("enterprise"), icon: "solar:buildings-2-linear", description: t("enterpriseDesc") },
  ];

  function handleDriverStep1(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const formData = new FormData(e.currentTarget);
    setDriverFirstName(formData.get("firstName") as string);
    setDriverCompanyName(formData.get("companyName") as string);
    setFormEmail(formData.get("email") as string);
    setFormPhone(formData.get("phone") as string);
    setDriverPassword(formData.get("password") as string);
    setDriverStep(2);
  }

  async function compressImage(file: File): Promise<string> {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement("canvas");
          const MAX = 800;
          let w = img.width;
          let h = img.height;
          if (w > MAX || h > MAX) {
            if (w > h) { h = (h / w) * MAX; w = MAX; }
            else { w = (w / h) * MAX; h = MAX; }
          }
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext("2d")!;
          ctx.drawImage(img, 0, 0, w, h);
          resolve(canvas.toDataURL("image/jpeg", 0.7));
        };
        img.src = ev.target?.result as string;
      };
      reader.readAsDataURL(file);
    });
  }

  async function handleVehiclePhoto(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const compressed = await compressImage(file);
    setVehiclePhotoBase64(compressed);
    setVehiclePhotoPreview(compressed);
  }

  async function handleDriverSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const data = {
      profileType: "driver",
      firstName: driverFirstName,
      companyName: driverCompanyName,
      email: formEmail,
      phone: formPhone,
      password: driverPassword,
      cityAddress,
      cityLat,
      cityLng,
      vehicleBrand: vehicleBrand || undefined,
      vehiclePlate: vehiclePlate || undefined,
      vehiclePhotoBase64: vehiclePhotoBase64 || undefined,
      locale,
    };

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setError(json.error || t("signupError"));
        return;
      }

      trackSignUp({ method: "credentials", role: "driver" });
      router.push("/connexion?registered=true");
    } catch {
      setError(tc("serverError"));
    } finally {
      setLoading(false);
    }
  }

  async function handleParticulierSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      profileType: "particulier",
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      password: formData.get("password") as string,
      locale,
    };

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setError(json.error || t("signupError"));
        return;
      }

      trackSignUp({ method: "credentials", role: "particulier" });
      router.push("/connexion?registered=true");
    } catch {
      setError(tc("serverError"));
    } finally {
      setLoading(false);
    }
  }

  async function handleOrgSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      profileType,
      name: formData.get("name") as string,
      contactName: formData.get("contactName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      address: orgAddress,
      password: formData.get("password") as string,
      locale,
    };

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setError(json.error || t("signupError"));
        return;
      }

      trackSignUp({ method: "credentials", role: profileType });
      router.push("/connexion?registered=true");
    } catch {
      setError(tc("serverError"));
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all";

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link href="/" className="text-2xl">
            <span className="font-normal text-neutral-600">Taxi</span>
            <span className="font-bold text-neutral-950">Neo</span>
          </Link>
          <h1 className="text-2xl font-semibold tracking-tight mt-6 mb-2">
            {t("signupTitle")}
          </h1>
          <p className="text-sm text-neutral-500 font-light">
            {t("signupSubtitle")}
          </p>
        </div>

        {/* Profile selector */}
        {!profileType && (
          <div className="space-y-6">
            {/* Zone 1: Chauffeur */}
            <div>
              <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-3">
                {t("taxiDriverLabel")}
              </p>
              <button
                onClick={() => setProfileType("driver")}
                className="w-full flex items-center gap-4 p-5 rounded-2xl border-2 border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 transition-all"
              >
                <Icon icon="solar:car-linear" className="text-3xl text-neutral-700" />
                <div className="text-left">
                  <span className="text-sm font-semibold block">{t("taxiLabel")}</span>
                  <span className="text-xs text-neutral-500 font-light">{t("taxiDriverSubLabel")}</span>
                </div>
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-neutral-200" />
              <span className="text-xs text-neutral-400 font-medium">{tc("or")}</span>
              <div className="flex-1 h-px bg-neutral-200" />
            </div>

            {/* Zone 2: Je réserve */}
            <div>
              <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-3">
                {t("iBookTaxis")}
              </p>
              <div className="grid grid-cols-2 gap-3">
                {bookingOptions.map((opt) => (
                  <button
                    key={opt.type}
                    onClick={() => setProfileType(opt.type)}
                    className="flex flex-col items-center gap-2 p-5 rounded-2xl border-2 border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 transition-all"
                  >
                    <Icon icon={opt.icon} className="text-3xl text-neutral-700" />
                    <span className="text-sm font-semibold">{opt.label}</span>
                    <span className="text-xs text-neutral-500 font-light">{opt.description}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Driver form - Step 1 */}
        {profileType === "driver" && driverStep === 1 && (
          <>
            {!initialType && (
              <button
                onClick={() => { setProfileType(null); setError(""); setFormEmail(""); setFormPhone(""); setCityAddress(""); setCityLat(undefined); setCityLng(undefined); setDriverStep(1); }}
                className="flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900 mb-4"
              >
                <Icon icon="solar:arrow-left-linear" />
                {t("backToProfileChoice")}
              </button>
            )}

            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-neutral-900 text-white rounded-full flex items-center justify-center text-xs font-semibold">1</div>
              <div className="flex-1 h-1 bg-neutral-200 rounded-full">
                <div className="h-full w-1/2 bg-neutral-900 rounded-full" />
              </div>
              <span className="text-xs text-neutral-400">{t("step", { current: 1, total: 2 })}</span>
            </div>

            <form onSubmit={handleDriverStep1} className="space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-1.5">
                  {t("firstName")}
                </label>
                <input id="firstName" name="firstName" type="text" required className={inputClass} placeholder="Jean Dupont" defaultValue={driverFirstName} />
              </div>

              <div>
                <label htmlFor="companyName" className="block text-sm font-medium mb-1.5">
                  {t("companyName")}
                </label>
                <input id="companyName" name="companyName" type="text" required className={inputClass} placeholder="Taxi Jean Express" defaultValue={driverCompanyName} />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5">{t("email")}</label>
                <input id="email" name="email" type="email" required className={`${inputClass} ${emailError(formEmail) ? "ring-2 ring-red-300 bg-red-50/50" : ""}`} placeholder="jean.dupont@email.com" defaultValue={formEmail} onChange={(e) => setFormEmail(e.target.value)} />
                {emailError(formEmail) && <p className="text-xs text-red-500 mt-1">{emailError(formEmail)}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1.5">{t("phone")}</label>
                <input id="phone" name="phone" type="tel" required className={`${inputClass} ${phoneError(formPhone) ? "ring-2 ring-red-300 bg-red-50/50" : ""}`} placeholder="06 12 34 56 78" defaultValue={formPhone} onChange={(e) => setFormPhone(e.target.value)} />
                {phoneError(formPhone) && <p className="text-xs text-red-500 mt-1">{phoneError(formPhone)}</p>}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1.5">{t("password")}</label>
                <input id="password" name="password" type="password" required minLength={6} className={inputClass} placeholder={t("passwordMinLength")} defaultValue={driverPassword} />
              </div>

              <button
                type="submit"
                disabled={(!!formEmail && !isValidEmail(formEmail)) || (!!formPhone && !isValidPhone(formPhone))}
                className="w-full bg-neutral-950 text-white rounded-xl py-3.5 text-sm font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed btn-lift"
              >
                {tc("next")}
              </button>
            </form>
          </>
        )}

        {/* Driver form - Step 2 */}
        {profileType === "driver" && driverStep === 2 && (
          <>
            <button
              onClick={() => { setDriverStep(1); setError(""); }}
              className="flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900 mb-4"
            >
              <Icon icon="solar:arrow-left-linear" />
              {tc("back")}
            </button>

            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-neutral-900 text-white rounded-full flex items-center justify-center text-xs font-semibold">2</div>
              <div className="flex-1 h-1 bg-neutral-900 rounded-full" />
              <span className="text-xs text-neutral-400">{t("step", { current: 2, total: 2 })}</span>
            </div>

            <form onSubmit={handleDriverSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium mb-1.5">{t("cityOfActivity")}</label>
                <PlacesAutocomplete
                  placeholder={t("cityPlaceholder")}
                  value={cityAddress}
                  onChange={(val, lat, lng) => {
                    setCityAddress(val);
                    if (lat && lng) { setCityLat(lat); setCityLng(lng); }
                  }}
                  icon="solar:map-point-linear"
                />
                <p className="text-xs text-neutral-400 mt-1">{t("radiusCovered")}</p>
              </div>

              <div>
                <label htmlFor="vehicleBrand" className="block text-sm font-medium mb-1.5">
                  {t("vehicleBrand")}
                </label>
                <input
                  id="vehicleBrand"
                  type="text"
                  className={inputClass}
                  placeholder={t("vehicleBrandPlaceholder")}
                  value={vehicleBrand}
                  onChange={(e) => setVehicleBrand(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="vehiclePlate" className="block text-sm font-medium mb-1.5">
                  {t("licensePlate")}
                </label>
                <input
                  id="vehiclePlate"
                  type="text"
                  className={inputClass}
                  placeholder={t("licensePlatePlaceholder")}
                  value={vehiclePlate}
                  onChange={(e) => setVehiclePlate(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">
                  {t("photo")}
                </label>
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleVehiclePhoto}
                    className="w-full text-sm text-neutral-500 file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-medium file:bg-neutral-100 file:text-neutral-700 hover:file:bg-neutral-200 cursor-pointer"
                  />
                </div>
                {vehiclePhotoPreview && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={vehiclePhotoPreview} alt={t("preview")} className="mt-2 w-full h-32 object-cover rounded-xl border border-neutral-200" />
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-neutral-950 text-white rounded-xl py-3.5 text-sm font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed btn-lift"
              >
                {loading ? t("signingUp") : t("signupAsDriver")}
              </button>
            </form>
          </>
        )}

        {/* Particulier form */}
        {profileType === "particulier" && (
          <>
            {!isFromBooking && (
              <button
                onClick={() => { setProfileType(null); setError(""); setFormEmail(""); setFormPhone(""); }}
                className="flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900 mb-4"
              >
                <Icon icon="solar:arrow-left-linear" />
                {t("backToProfileChoice")}
              </button>
            )}

            {isFromBooking && (
              <div className="space-y-3 mb-4">
                <div className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-xl flex items-center gap-2">
                  <Icon icon="solar:check-circle-linear" className="text-lg shrink-0" />
                  <span>{t("bookingConfirmedMessage")}</span>
                </div>
                <div className="bg-blue-50 border border-blue-200 text-blue-700 text-sm px-4 py-3 rounded-xl flex items-center gap-2">
                  <Icon icon="solar:info-circle-linear" className="text-lg shrink-0" />
                  <span>{t("signupToTrack")}</span>
                </div>
              </div>
            )}

            <div className="flex items-center gap-2 mb-4 px-1">
              <Icon icon="solar:user-linear" className="text-lg text-neutral-600" />
              <span className="text-sm font-medium text-neutral-600">{t("signupParticulier")}</span>
            </div>

            <form onSubmit={handleParticulierSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                  {t("firstName")}
                </label>
                <input id="name" name="name" type="text" required className={inputClass} placeholder="Marie Martin" defaultValue={prefillName} />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5">{t("email")}</label>
                <input id="email" name="email" type="email" required className={`${inputClass} ${emailError(formEmail) ? "ring-2 ring-red-300 bg-red-50/50" : ""}`} placeholder="marie.martin@email.com" defaultValue={prefillEmail} onChange={(e) => setFormEmail(e.target.value)} />
                {emailError(formEmail) && <p className="text-xs text-red-500 mt-1">{emailError(formEmail)}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1.5">{t("phone")}</label>
                <input id="phone" name="phone" type="tel" required className={`${inputClass} ${phoneError(formPhone) ? "ring-2 ring-red-300 bg-red-50/50" : ""}`} placeholder="06 12 34 56 78" defaultValue={prefillPhone} onChange={(e) => setFormPhone(e.target.value)} />
                {phoneError(formPhone) && <p className="text-xs text-red-500 mt-1">{phoneError(formPhone)}</p>}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1.5">{t("password")}</label>
                <input id="password" name="password" type="password" required minLength={6} className={inputClass} placeholder={t("passwordMinLength")} />
              </div>

              <button
                type="submit"
                disabled={loading || (!!formEmail && !isValidEmail(formEmail)) || (!!formPhone && !isValidPhone(formPhone))}
                className="w-full bg-neutral-950 text-white rounded-xl py-3.5 text-sm font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed btn-lift"
              >
                {loading ? t("signingUp") : t("createAccount")}
              </button>
            </form>
          </>
        )}

        {/* Organization form (hotel, hospital, enterprise) */}
        {profileType && !["driver", "particulier"].includes(profileType) && (
          <>
            <button
              onClick={() => { setProfileType(null); setError(""); setOrgAddress(""); }}
              className="flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900 mb-4"
            >
              <Icon icon="solar:arrow-left-linear" />
              {t("backToProfileChoice")}
            </button>

            <div className="flex items-center gap-2 mb-4 px-1">
              <Icon
                icon={bookingOptions.find((o) => o.type === profileType)!.icon}
                className="text-lg text-neutral-600"
              />
              <span className="text-sm font-medium text-neutral-600">
                {bookingOptions.find((o) => o.type === profileType)!.label}
              </span>
            </div>

            <form onSubmit={handleOrgSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                  {t("establishmentName")}
                </label>
                <input id="name" name="name" type="text" required className={inputClass} placeholder="Hôtel Le Grand Paris" />
              </div>

              <div>
                <label htmlFor="contactName" className="block text-sm font-medium mb-1.5">
                  {t("mainContactName")}
                </label>
                <input id="contactName" name="contactName" type="text" required className={inputClass} placeholder="Marie Martin" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5">{t("email")}</label>
                <input id="email" name="email" type="email" required className={`${inputClass} ${emailError(formEmail) ? "ring-2 ring-red-300 bg-red-50/50" : ""}`} placeholder="contact@hotel.com" onChange={(e) => setFormEmail(e.target.value)} />
                {emailError(formEmail) && <p className="text-xs text-red-500 mt-1">{emailError(formEmail)}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1.5">{t("phone")}</label>
                <input id="phone" name="phone" type="tel" required className={`${inputClass} ${phoneError(formPhone) ? "ring-2 ring-red-300 bg-red-50/50" : ""}`} placeholder="01 23 45 67 89" onChange={(e) => setFormPhone(e.target.value)} />
                {phoneError(formPhone) && <p className="text-xs text-red-500 mt-1">{phoneError(formPhone)}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">{t("address")}</label>
                <PlacesAutocomplete
                  placeholder="12 rue de la Paix, 75002 Paris"
                  value={orgAddress}
                  onChange={(val) => setOrgAddress(val)}
                  icon="solar:map-point-linear"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1.5">{t("password")}</label>
                <input id="password" name="password" type="password" required minLength={6} className={inputClass} placeholder={t("passwordMinLength")} />
              </div>

              <button
                type="submit"
                disabled={loading || (!!formEmail && !isValidEmail(formEmail)) || (!!formPhone && !isValidPhone(formPhone))}
                className="w-full bg-neutral-950 text-white rounded-xl py-3.5 text-sm font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed btn-lift"
              >
                {loading ? t("signingUp") : t("createOrgAccount")}
              </button>
            </form>
          </>
        )}

        <p className="text-center text-sm text-neutral-500 mt-6">
          {t("alreadyHaveAccount")}{" "}
          <Link href="/connexion" className="text-neutral-900 font-medium hover:underline">
            {t("loginLink")}
          </Link>
        </p>
      </div>
    </div>
  );
}
