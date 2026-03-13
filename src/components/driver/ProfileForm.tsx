"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { Icon } from "@iconify/react";
import { CoverageZoneEditor } from "./CoverageZoneEditor";
import { PricingGrid } from "./PricingGrid";
import { AvailabilityEditor } from "./AvailabilityEditor";
import type { Vehicle } from "@/types/vehicle";
import { EMPTY_VEHICLE } from "@/types/vehicle";
import { VehicleMiniature } from "@/components/ui/VehicleMiniature";
import { VEHICLE_BRANDS, BRAND_NAMES, VEHICLE_COLORS } from "@/data/vehicle-models";
import { useTranslations } from "next-intl";

interface DriverData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bio: string;
  companyName: string;
  photoUrl: string;
  vehicles: Vehicle[];
  zoneLat: number | null;
  zoneLng: number | null;
  zoneRadius: number;
  zoneAddress: string;
  baseFare: number;
  pricePerKm: number;
  pricePerKmNight: number;
  pricePerMinute: number;
  minimumFare: number;
  airportSupplement: number;
  nightSupplement: number;
  availability: Array<{ day: number; startTime: string; endTime: string }> | null;
  notifyEmail: boolean;
  notifySms: boolean;
}

const DEFAULT_AVAILABILITY = Array.from({ length: 7 }, (_, i) => ({
  day: i,
  startTime: "07:00",
  endTime: "20:00",
}));

const vehicleFeatureOptions = [
  "Climatisation",
  "WiFi",
  "Prise USB",
  "Siège bébé",
  "Animaux acceptés",
  "PMR",
  "Coffre XL",
  "Carte bancaire",
];

/**
 * Client-side image compression using Canvas API.
 * Handles EXIF rotation (modern browsers auto-rotate), resizes large images,
 * and compresses to JPEG to reduce upload size on mobile.
 */
async function compressImageClient(
  file: File,
  maxWidth = 1200,
  maxHeight = 800,
  quality = 0.8
): Promise<File> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      let { width, height } = img;

      // Only resize if larger than max dimensions
      if (width > maxWidth || height > maxHeight) {
        const ratio = Math.min(maxWidth / width, maxHeight / height);
        width = Math.round(width * ratio);
        height = Math.round(height * ratio);
      }

      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        resolve(file); // Fallback to original
        return;
      }
      ctx.drawImage(img, 0, 0, width, height);

      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(new File([blob], "photo.jpg", { type: "image/jpeg" }));
          } else {
            resolve(file); // Fallback to original
          }
        },
        "image/jpeg",
        quality
      );
    };
    img.onerror = () => reject(new Error("Failed to load image"));
    img.src = URL.createObjectURL(file);
  });
}

export function ProfileForm({ driver }: { driver: DriverData }) {
  const t = useTranslations("profileForm");
  const searchParams = useSearchParams();
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [activeSection, setActiveSection] = useState("personal");
  const [uploadingPhoto, setUploadingPhoto] = useState(false);
  const photoInputRef = useRef<HTMLInputElement>(null);

  // Open the right section when coming from dashboard missing items
  useEffect(() => {
    const section = searchParams.get("section");
    if (section && ["personal", "vehicle", "zone", "pricing", "availability", "notifications"].includes(section)) {
      setActiveSection(section);
    }
  }, [searchParams]);

  const [form, setForm] = useState({
    ...driver,
    // Default availability for new registrants: all 7 days, 07:00-20:00
    availability: driver.availability || DEFAULT_AVAILABILITY,
  });

  function updateField<K extends keyof DriverData>(key: K, value: DriverData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setSuccess(false);
  }

  function updateVehicle(index: number, field: keyof Vehicle, value: Vehicle[keyof Vehicle]) {
    setForm((prev) => {
      const vehicles = [...prev.vehicles];
      vehicles[index] = { ...vehicles[index], [field]: value };
      return { ...prev, vehicles };
    });
    setSuccess(false);
  }

  function toggleVehicleFeature(index: number, feature: string) {
    setForm((prev) => {
      const vehicles = [...prev.vehicles];
      const current = vehicles[index];
      vehicles[index] = {
        ...current,
        features: current.features.includes(feature)
          ? current.features.filter((f) => f !== feature)
          : [...current.features, feature],
      };
      return { ...prev, vehicles };
    });
    setSuccess(false);
  }

  function addVehicle() {
    if (form.vehicles.length >= 2) return;
    setForm((prev) => ({
      ...prev,
      vehicles: [...prev.vehicles, { ...EMPTY_VEHICLE }],
    }));
    setSuccess(false);
  }

  function removeVehicle(index: number) {
    setForm((prev) => ({
      ...prev,
      vehicles: prev.vehicles.filter((_, i) => i !== index),
    }));
    setSuccess(false);
  }

  async function handleSave() {
    setSaving(true);
    setError(false);

    try {
      const res = await fetch("/api/driver/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSuccess(true);
      } else {
        setError(true);
        setSuccess(false);
      }
    } catch (e) {
      console.error(e);
      setError(true);
      setSuccess(false);
    } finally {
      setSaving(false);
    }
  }

  async function handlePhotoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploadingPhoto(true);
    try {
      // Compress image client-side before upload
      const compressed = await compressImageClient(file, 400, 400, 0.85);

      const formData = new FormData();
      formData.append("file", compressed);
      formData.append("type", "profile");

      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();

      if (data.url) {
        updateField("photoUrl", data.url);
      }
    } catch (err) {
      console.error("Photo upload error:", err);
    } finally {
      setUploadingPhoto(false);
      if (photoInputRef.current) photoInputRef.current.value = "";
    }
  }

  const sections = [
    { id: "personal", label: t("tabs.personal"), icon: "solar:user-linear" },
    { id: "vehicle", label: t("tabs.vehicle"), icon: "mdi:car-outline" },
    { id: "zone", label: t("tabs.coverage"), icon: "solar:map-point-linear" },
    { id: "pricing", label: t("tabs.pricing"), icon: "solar:tag-price-linear" },
    { id: "availability", label: t("tabs.availability"), icon: "solar:clock-circle-linear" },
    { id: "notifications", label: t("tabs.notifications"), icon: "solar:bell-linear" },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Section tabs */}
      <div className="lg:w-56 flex lg:flex-col gap-1 overflow-x-auto pb-2 lg:pb-0">
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => setActiveSection(s.id)}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm whitespace-nowrap transition-colors ${
              activeSection === s.id
                ? "bg-neutral-900 text-white font-medium"
                : "text-neutral-600 hover:bg-neutral-100"
            }`}
          >
            <Icon icon={s.icon} className="text-lg shrink-0" />
            {s.label}
          </button>
        ))}
      </div>

      {/* Form content */}
      <div className="flex-1 bg-white border border-neutral-200 rounded-2xl p-6">
        {/* Personal info */}
        {activeSection === "personal" && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold tracking-tight mb-4">
              {t("personalInfo")}
            </h2>

            {/* Profile photo */}
            <div className="flex flex-col items-center gap-2 mb-2">
              <button
                type="button"
                onClick={() => photoInputRef.current?.click()}
                disabled={uploadingPhoto}
                className="relative w-20 h-20 rounded-full overflow-hidden group"
              >
                {form.photoUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={form.photoUrl}
                    alt="Photo de profil"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-neutral-200 flex items-center justify-center text-neutral-500 text-xl font-semibold">
                    {form.firstName?.[0]?.toUpperCase() || ""}
                    {form.lastName?.[0]?.toUpperCase() || ""}
                  </div>
                )}
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  {uploadingPhoto ? (
                    <Icon icon="solar:refresh-linear" className="text-white text-xl animate-spin" />
                  ) : (
                    <Icon icon="solar:camera-linear" className="text-white text-xl" />
                  )}
                </div>
              </button>
              <span className="text-xs text-neutral-400">{t("clickToEdit")}</span>
              <input
                ref={photoInputRef}
                type="file"
                accept="image/*"
                onChange={handlePhotoUpload}
                className="hidden"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1.5">{t("companyName")}</label>
              <input
                value={form.companyName}
                onChange={(e) => updateField("companyName", e.target.value)}
                className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
                placeholder={t("companyPlaceholder")}
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">{t("firstName")}</label>
              <input
                value={form.firstName}
                onChange={(e) => updateField("firstName", e.target.value)}
                className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
                placeholder="Jean Dupont"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">{t("phone")}</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => {
                  let raw = e.target.value.replace(/[^\d+]/g, "");
                  if (raw.includes("+") && raw.indexOf("+") > 0) {
                    raw = raw.replace(/\+/g, "");
                  }
                  let digits = raw.startsWith("+") ? raw.slice(1) : raw;
                  if (raw.startsWith("+")) {
                    // Format international: +33 6 12 34 56 78
                    const formatted = digits.replace(/(\d{2})(?=\d)/g, "$1 ").trim();
                    updateField("phone", "+" + formatted);
                  } else {
                    // Format français: 06 12 34 56 78
                    digits = digits.slice(0, 10);
                    const formatted = digits.replace(/(\d{2})(?=\d)/g, "$1 ").trim();
                    updateField("phone", formatted);
                  }
                }}
                className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
                placeholder={t("phonePlaceholder")}
              />
              {form.phone && (() => {
                const digits = form.phone.replace(/[^\d]/g, "");
                const isInternational = form.phone.startsWith("+");
                const valid = isInternational ? digits.length >= 11 : digits.length === 10;
                if (!valid) {
                  return (
                    <p className="text-xs text-amber-600 mt-1.5 flex items-center gap-1">
                      <Icon icon="solar:info-circle-linear" className="text-sm shrink-0" />
                      {isInternational ? t("phoneFormatError") : t("phoneDigitsError")}
                    </p>
                  );
                }
                return null;
              })()}
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">{t("bio")}</label>
              <textarea
                value={form.bio}
                onChange={(e) => updateField("bio", e.target.value)}
                rows={3}
                className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all resize-none"
                placeholder={t("bioPlaceholder")}
              />
            </div>
          </div>
        )}

        {/* Vehicle */}
        {activeSection === "vehicle" && (
          <VehicleSection
            vehicles={form.vehicles}
            updateVehicle={updateVehicle}
            toggleVehicleFeature={toggleVehicleFeature}
            addVehicle={addVehicle}
            removeVehicle={removeVehicle}
          />
        )}

        {/* Coverage zone */}
        {activeSection === "zone" && (
          <CoverageZoneEditor
            lat={form.zoneLat}
            lng={form.zoneLng}
            radius={form.zoneRadius}
            address={form.zoneAddress}
            onChange={(data) =>
              setForm((prev) => ({
                ...prev,
                zoneLat: data.lat,
                zoneLng: data.lng,
                zoneRadius: data.radius,
                zoneAddress: data.address,
              }))
            }
          />
        )}

        {/* Pricing */}
        {activeSection === "pricing" && (
          <PricingGrid
            pricing={{
              baseFare: form.baseFare,
              pricePerKm: form.pricePerKm,
              pricePerKmNight: form.pricePerKmNight,
              pricePerMinute: form.pricePerMinute,
              minimumFare: form.minimumFare,
            }}
            onChange={(pricing) => setForm((prev) => ({ ...prev, ...pricing }))}
          />
        )}

        {/* Availability */}
        {activeSection === "availability" && (
          <AvailabilityEditor
            availability={form.availability || []}
            onChange={(availability) => updateField("availability", availability)}
          />
        )}

        {/* Notifications */}
        {activeSection === "notifications" && (
          <div className="space-y-4">
            <h2 className="text-lg font-semibold tracking-tight mb-4">
              {t("notificationPrefs")}
            </h2>
            <label className="flex items-center justify-between py-3 border-b border-neutral-100">
              <div>
                <p className="text-sm font-medium">{t("emailNotifications")}</p>
                <p className="text-xs text-neutral-500 font-light">
                  {t("emailNotificationsDesc")}
                </p>
              </div>
              <button
                type="button"
                onClick={() => updateField("notifyEmail", !form.notifyEmail)}
                className={`w-11 h-6 rounded-full transition-colors relative ${
                  form.notifyEmail ? "bg-neutral-900" : "bg-neutral-200"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow absolute top-0.5 transition-transform ${
                    form.notifyEmail ? "translate-x-5" : "translate-x-0.5"
                  }`}
                />
              </button>
            </label>
            <label className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-medium">{t("smsNotifications")}</p>
                <p className="text-xs text-neutral-500 font-light">
                  {t("smsNotificationsDesc")}
                </p>
              </div>
              <button
                type="button"
                onClick={() => updateField("notifySms", !form.notifySms)}
                className={`w-11 h-6 rounded-full transition-colors relative ${
                  form.notifySms ? "bg-neutral-900" : "bg-neutral-200"
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full shadow absolute top-0.5 transition-transform ${
                    form.notifySms ? "translate-x-5" : "translate-x-0.5"
                  }`}
                />
              </button>
            </label>
          </div>
        )}

        {/* Save button */}
        <div className="mt-6 pt-6 border-t border-neutral-100 flex items-center justify-end gap-3">
          {error && (
            <span className="flex items-center gap-1.5 text-red-500 text-sm">
              <Icon icon="solar:danger-circle-linear" />
              {t("errorRetry")}
            </span>
          )}
          <span
            className={`flex items-center gap-1.5 text-green-600 text-sm transition-opacity duration-300 ${
              success && !error ? "opacity-100" : "opacity-0"
            }`}
          >
            <Icon icon="solar:check-circle-bold" />
            {t("saved")}
          </span>
          <button
            onClick={handleSave}
            disabled={saving}
            className="bg-neutral-950 text-white rounded-xl w-36 py-2.5 text-sm font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50 btn-lift text-center"
          >
            {saving ? t("saving") : t("saveButton")}
          </button>
        </div>
      </div>
    </div>
  );
}

function VehicleSection({
  vehicles,
  updateVehicle,
  toggleVehicleFeature,
  addVehicle,
  removeVehicle,
}: {
  vehicles: Vehicle[];
  updateVehicle: (index: number, field: keyof Vehicle, value: Vehicle[keyof Vehicle]) => void;
  toggleVehicleFeature: (index: number, feature: string) => void;
  addVehicle: () => void;
  removeVehicle: (index: number) => void;
}) {
  const t = useTranslations("profileForm");
  const [activeTab, setActiveTab] = useState(0);

  // Ensure at least one vehicle exists for the form
  if (vehicles.length === 0) {
    return (
      <div className="space-y-4">
        <h2 className="text-lg font-semibold tracking-tight mb-4">{t("vehicleTitle")}</h2>
        <div className="text-center py-8">
          <Icon icon="mdi:car-outline" className="text-4xl text-neutral-300 mx-auto mb-3" />
          <p className="text-sm text-neutral-500 mb-4">{t("noVehicle")}</p>
          <button
            type="button"
            onClick={addVehicle}
            className="bg-neutral-950 text-white rounded-xl px-5 py-2.5 text-sm font-medium hover:bg-neutral-800 transition-colors inline-flex items-center gap-2"
          >
            <Icon icon="solar:add-circle-linear" />
            {t("addVehicle")}
          </button>
        </div>
      </div>
    );
  }

  const vehicle = vehicles[activeTab];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold tracking-tight">{t("vehicleTitle")}</h2>
        <span className="text-xs text-neutral-400">{vehicles.length}/2</span>
      </div>

      {/* Vehicle tabs */}
      <div className="flex items-center gap-2 mb-2">
        {vehicles.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActiveTab(i)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === i
                ? "bg-neutral-900 text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            }`}
          >
            <Icon icon="mdi:car-outline" className="text-base" />
            {t("vehicleNumber", { number: i + 1 })}
          </button>
        ))}
        {vehicles.length < 2 && (
          <button
            type="button"
            onClick={() => {
              addVehicle();
              setActiveTab(vehicles.length);
            }}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium text-neutral-500 border border-dashed border-neutral-300 hover:border-neutral-400 hover:text-neutral-700 transition-colors"
          >
            <Icon icon="solar:add-circle-linear" className="text-base" />
            {t("addVehicle")}
          </button>
        )}
      </div>

      {/* Vehicle miniature preview */}
      {vehicle.brand && (
        <VehicleMiniature
          brand={vehicle.brand}
          model={vehicle.model}
          color={vehicle.color}
          year={vehicle.year}
          capacity={vehicle.capacity}
        />
      )}

      {/* Delete button for vehicle 2 */}
      {activeTab === 1 && (
        <button
          type="button"
          onClick={() => {
            removeVehicle(1);
            setActiveTab(0);
          }}
          className="flex items-center gap-1 text-xs text-red-500 hover:text-red-700 transition-colors"
        >
          <Icon icon="solar:trash-bin-trash-linear" className="text-sm" />
          {t("deleteVehicle")}
        </button>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1.5">{t("brand")}</label>
          <input
            list="brand-list"
            value={vehicle.brand}
            onChange={(e) => {
              updateVehicle(activeTab, "brand", e.target.value);
              // Reset model when brand changes
              if (e.target.value !== vehicle.brand) {
                updateVehicle(activeTab, "model", "");
              }
            }}
            className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
            placeholder={t("brandPlaceholder")}
          />
          <datalist id="brand-list">
            {BRAND_NAMES.map((b) => (
              <option key={b} value={b} />
            ))}
          </datalist>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">{t("model")}</label>
          <input
            list={`model-list-${activeTab}`}
            value={vehicle.model}
            onChange={(e) => updateVehicle(activeTab, "model", e.target.value)}
            className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
            placeholder={t("modelPlaceholder")}
          />
          <datalist id={`model-list-${activeTab}`}>
            {(VEHICLE_BRANDS[vehicle.brand] || []).map((m) => (
              <option key={m} value={m} />
            ))}
          </datalist>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">{t("year")}</label>
          <input
            type="number"
            value={vehicle.year}
            onChange={(e) => updateVehicle(activeTab, "year", parseInt(e.target.value))}
            className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">{t("color")}</label>
          <input
            list="color-list"
            value={vehicle.color}
            onChange={(e) => updateVehicle(activeTab, "color", e.target.value)}
            className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
            placeholder={t("colorPlaceholder")}
          />
          <datalist id="color-list">
            {VEHICLE_COLORS.map((c) => (
              <option key={c} value={c} />
            ))}
          </datalist>
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">{t("plate")}</label>
          <input
            value={vehicle.plate}
            onChange={(e) => {
              const raw = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
              let formatted = raw;
              if (raw.length > 2) formatted = raw.slice(0, 2) + "-" + raw.slice(2);
              if (raw.length > 5) formatted = raw.slice(0, 2) + "-" + raw.slice(2, 5) + "-" + raw.slice(5, 7);
              updateVehicle(activeTab, "plate", formatted);
            }}
            maxLength={9}
            className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm font-mono tracking-wider outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all uppercase"
            placeholder="AB-123-CD"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">{t("passengerCapacity")}</label>
          <input
            type="number"
            min={1}
            max={8}
            value={vehicle.capacity}
            onChange={(e) => updateVehicle(activeTab, "capacity", parseInt(e.target.value))}
            className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-3">{t("vehicleOptions")}</label>
        <div className="flex flex-wrap gap-2">
          {vehicleFeatureOptions.map((feature) => (
            <button
              key={feature}
              type="button"
              onClick={() => toggleVehicleFeature(activeTab, feature)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                vehicle.features.includes(feature)
                  ? "bg-neutral-900 text-white border-neutral-900"
                  : "bg-white text-neutral-600 border-neutral-200 hover:border-neutral-400"
              }`}
            >
              {feature}
            </button>
          ))}
        </div>
      </div>

      {/* Vehicle photos */}
      <VehiclePhotos
        photos={vehicle.photos || []}
        onPhotosChange={(photos) => updateVehicle(activeTab, "photos", photos)}
      />
    </div>
  );
}

function VehiclePhotos({
  photos,
  onPhotosChange,
}: {
  photos: string[];
  onPhotosChange: (photos: string[]) => void;
}) {
  const t = useTranslations("profileForm");
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      // Compress image client-side before upload (handles large mobile photos + EXIF rotation)
      const compressed = await compressImageClient(file, 1200, 800, 0.8);

      const formData = new FormData();
      formData.append("file", compressed);
      formData.append("type", "vehicle");

      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();

      if (data.url) {
        onPhotosChange([...photos, data.url]);
      }
    } catch (err) {
      console.error("Upload error:", err);
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = "";
    }
  }

  function removePhoto(index: number) {
    onPhotosChange(photos.filter((_, i) => i !== index));
  }

  return (
    <div>
      <label className="block text-sm font-medium mb-3">{t("vehiclePhotos")}</label>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
        {photos.map((url, i) => (
          <div key={i} className="relative group aspect-square rounded-xl overflow-hidden bg-neutral-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={url} alt={t("vehiclePhotoAlt", { number: i + 1 })} className="w-full h-full object-cover" />
            <button
              type="button"
              onClick={() => removePhoto(i)}
              className="absolute top-1.5 right-1.5 w-6 h-6 bg-black/60 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Icon icon="solar:close-circle-bold" className="text-sm" />
            </button>
          </div>
        ))}
        {photos.length < 5 && (
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={uploading}
            className="aspect-square rounded-xl border-2 border-dashed border-neutral-300 hover:border-neutral-400 flex flex-col items-center justify-center gap-1 text-neutral-400 hover:text-neutral-500 transition-colors disabled:opacity-50"
          >
            {uploading ? (
              <Icon icon="solar:refresh-linear" className="text-xl animate-spin" />
            ) : (
              <>
                <Icon icon="solar:camera-add-linear" className="text-xl" />
                <span className="text-[10px]">{photos.length}/5</span>
              </>
            )}
          </button>
        )}
      </div>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleUpload}
        className="hidden"
      />
    </div>
  );
}
