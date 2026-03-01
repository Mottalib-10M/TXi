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

interface DriverData {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  bio: string;
  photoUrl: string;
  vehicles: Vehicle[];
  zoneLat: number | null;
  zoneLng: number | null;
  zoneRadius: number;
  zoneAddress: string;
  baseFare: number;
  pricePerKm: number;
  pricePerMinute: number;
  minimumFare: number;
  airportSupplement: number;
  nightSupplement: number;
  availability: Array<{ day: number; startTime: string; endTime: string }> | null;
  notifyEmail: boolean;
  notifySms: boolean;
}

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

export function ProfileForm({ driver }: { driver: DriverData }) {
  const searchParams = useSearchParams();
  const [saving, setSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [activeSection, setActiveSection] = useState("personal");

  // Open the right section when coming from dashboard missing items
  useEffect(() => {
    const section = searchParams.get("section");
    if (section && ["personal", "vehicle", "zone", "pricing", "availability", "notifications"].includes(section)) {
      setActiveSection(section);
    }
  }, [searchParams]);

  const [form, setForm] = useState(driver);

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

  const sections = [
    { id: "personal", label: "Infos personnelles", icon: "solar:user-linear" },
    { id: "vehicle", label: "Véhicule", icon: "mdi:car-outline" },
    { id: "zone", label: "Zone de couverture", icon: "solar:map-point-linear" },
    { id: "pricing", label: "Tarification", icon: "solar:tag-price-linear" },
    { id: "availability", label: "Disponibilités", icon: "solar:clock-circle-linear" },
    { id: "notifications", label: "Notifications", icon: "solar:bell-linear" },
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
              Informations personnelles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1.5">Prénom</label>
                <input
                  value={form.firstName}
                  onChange={(e) => updateField("firstName", e.target.value)}
                  className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5">Nom</label>
                <input
                  value={form.lastName}
                  onChange={(e) => updateField("lastName", e.target.value)}
                  className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Téléphone</label>
              <input
                value={form.phone}
                onChange={(e) => updateField("phone", e.target.value)}
                className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Bio</label>
              <textarea
                value={form.bio}
                onChange={(e) => updateField("bio", e.target.value)}
                rows={3}
                className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all resize-none"
                placeholder="Décrivez votre expérience, vos spécialités..."
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
            setForm={setForm}
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
              pricePerMinute: form.pricePerMinute,
              minimumFare: form.minimumFare,
              airportSupplement: form.airportSupplement,
              nightSupplement: form.nightSupplement,
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
              Préférences de notification
            </h2>
            <label className="flex items-center justify-between py-3 border-b border-neutral-100">
              <div>
                <p className="text-sm font-medium">Notifications par email</p>
                <p className="text-xs text-neutral-500 font-light">
                  Recevoir un email pour chaque nouvelle réservation
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
                <p className="text-sm font-medium">Notifications par SMS</p>
                <p className="text-xs text-neutral-500 font-light">
                  Recevoir un SMS pour les réservations urgentes
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
              Erreur, réessayez
            </span>
          )}
          <span
            className={`flex items-center gap-1.5 text-green-600 text-sm transition-opacity duration-300 ${
              success && !error ? "opacity-100" : "opacity-0"
            }`}
          >
            <Icon icon="solar:check-circle-bold" />
            Enregistré !
          </span>
          <button
            onClick={handleSave}
            disabled={saving}
            className="bg-neutral-950 text-white rounded-xl w-36 py-2.5 text-sm font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50 btn-lift text-center"
          >
            {saving ? "Enregistrement..." : "Enregistrer"}
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
  setForm,
}: {
  vehicles: Vehicle[];
  updateVehicle: (index: number, field: keyof Vehicle, value: Vehicle[keyof Vehicle]) => void;
  toggleVehicleFeature: (index: number, feature: string) => void;
  addVehicle: () => void;
  removeVehicle: (index: number) => void;
  setForm: React.Dispatch<React.SetStateAction<DriverData>>;
}) {
  const [activeTab, setActiveTab] = useState(0);
  const [plateInput, setPlateInput] = useState("");
  const [lookupLoading, setLookupLoading] = useState(false);
  const [lookupError, setLookupError] = useState("");
  const [lookupSuccess, setLookupSuccess] = useState(false);

  async function lookupPlate() {
    if (!plateInput.trim()) return;
    setLookupLoading(true);
    setLookupError("");
    setLookupSuccess(false);

    try {
      const res = await fetch(`/api/vehicle-lookup?plate=${encodeURIComponent(plateInput)}`);
      const data = await res.json();

      if (!res.ok) {
        setLookupError(data.error || "Véhicule introuvable");
        return;
      }

      setForm((prev) => {
        const newVehicles = [...prev.vehicles];
        newVehicles[activeTab] = {
          ...newVehicles[activeTab],
          plate: plateInput.toUpperCase(),
          brand: data.brand || newVehicles[activeTab].brand,
          model: data.model || newVehicles[activeTab].model,
          year: data.year || newVehicles[activeTab].year,
          color: data.color || newVehicles[activeTab].color,
          capacity: data.capacity || newVehicles[activeTab].capacity,
        };
        return { ...prev, vehicles: newVehicles };
      });
      setLookupSuccess(true);
    } catch {
      setLookupError("Service indisponible");
    } finally {
      setLookupLoading(false);
    }
  }

  // Ensure at least one vehicle exists for the form
  if (vehicles.length === 0) {
    return (
      <div className="space-y-4">
        <h2 className="text-lg font-semibold tracking-tight mb-4">Véhicule</h2>
        <div className="text-center py-8">
          <Icon icon="mdi:car-outline" className="text-4xl text-neutral-300 mx-auto mb-3" />
          <p className="text-sm text-neutral-500 mb-4">Aucun véhicule enregistré</p>
          <button
            type="button"
            onClick={addVehicle}
            className="bg-neutral-950 text-white rounded-xl px-5 py-2.5 text-sm font-medium hover:bg-neutral-800 transition-colors inline-flex items-center gap-2"
          >
            <Icon icon="solar:add-circle-linear" />
            Ajouter un véhicule
          </button>
        </div>
      </div>
    );
  }

  const vehicle = vehicles[activeTab];

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold tracking-tight">Véhicule</h2>
        <span className="text-xs text-neutral-400">{vehicles.length}/2</span>
      </div>

      {/* Vehicle tabs */}
      <div className="flex items-center gap-2 mb-2">
        {vehicles.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => {
              setActiveTab(i);
              setPlateInput("");
              setLookupError("");
              setLookupSuccess(false);
            }}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              activeTab === i
                ? "bg-neutral-900 text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            }`}
          >
            <Icon icon="mdi:car-outline" className="text-base" />
            Véhicule {i + 1}
          </button>
        ))}
        {vehicles.length < 2 && (
          <button
            type="button"
            onClick={() => {
              addVehicle();
              setActiveTab(vehicles.length);
              setPlateInput("");
              setLookupError("");
              setLookupSuccess(false);
            }}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-medium text-neutral-500 border border-dashed border-neutral-300 hover:border-neutral-400 hover:text-neutral-700 transition-colors"
          >
            <Icon icon="solar:add-circle-linear" className="text-base" />
            Ajouter un véhicule
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
          Supprimer ce véhicule
        </button>
      )}

      {/* Plate lookup */}
      <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4 mb-2">
        <label className="block text-sm font-medium mb-1.5">
          Identification par plaque d&apos;immatriculation
        </label>
        <p className="text-xs text-neutral-500 font-light mb-3">
          Entrez votre plaque pour remplir automatiquement les informations du véhicule
        </p>
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <input
              value={plateInput}
              onChange={(e) => {
                const raw = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
                let formatted = raw;
                if (raw.length > 2) formatted = raw.slice(0, 2) + "-" + raw.slice(2);
                if (raw.length > 5) formatted = raw.slice(0, 2) + "-" + raw.slice(2, 5) + "-" + raw.slice(5, 7);
                setPlateInput(formatted);
                setLookupError("");
                setLookupSuccess(false);
              }}
              maxLength={9}
              onKeyDown={(e) => e.key === "Enter" && lookupPlate()}
              className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-sm font-mono tracking-wider outline-none focus:ring-2 focus:ring-neutral-900 transition-all uppercase"
              placeholder="AB-123-CD"
            />
          </div>
          <button
            type="button"
            onClick={lookupPlate}
            disabled={lookupLoading || !plateInput.trim()}
            className="bg-neutral-900 text-white rounded-xl px-5 py-3 text-sm font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50 flex items-center gap-2 shrink-0"
          >
            {lookupLoading ? (
              <Icon icon="solar:refresh-linear" className="animate-spin" />
            ) : (
              <Icon icon="solar:magnifer-linear" />
            )}
            Identifier
          </button>
        </div>
        {lookupError && (
          <p className="text-xs text-red-500 mt-2 flex items-center gap-1">
            <Icon icon="solar:danger-circle-linear" />
            {lookupError}
          </p>
        )}
        {lookupSuccess && (
          <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
            <Icon icon="solar:check-circle-bold" />
            Véhicule identifié et champs remplis automatiquement
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1.5">Marque</label>
          <input
            value={vehicle.brand}
            onChange={(e) => updateVehicle(activeTab, "brand", e.target.value)}
            className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
            placeholder="Mercedes"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Modèle</label>
          <input
            value={vehicle.model}
            onChange={(e) => updateVehicle(activeTab, "model", e.target.value)}
            className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
            placeholder="Classe E"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Année</label>
          <input
            type="number"
            value={vehicle.year}
            onChange={(e) => updateVehicle(activeTab, "year", parseInt(e.target.value))}
            className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Couleur</label>
          <input
            value={vehicle.color}
            onChange={(e) => updateVehicle(activeTab, "color", e.target.value)}
            className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
            placeholder="Noir"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Plaque</label>
          <input
            value={vehicle.plate}
            onChange={(e) => updateVehicle(activeTab, "plate", e.target.value)}
            className="w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all"
            placeholder="AB-123-CD"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1.5">Capacité passagers</label>
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
        <label className="block text-sm font-medium mb-3">Options du véhicule</label>
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
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
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
      <label className="block text-sm font-medium mb-3">Photos du véhicule</label>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
        {photos.map((url, i) => (
          <div key={i} className="relative group aspect-square rounded-xl overflow-hidden bg-neutral-100">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={url} alt={`Véhicule photo ${i + 1}`} className="w-full h-full object-cover" />
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
