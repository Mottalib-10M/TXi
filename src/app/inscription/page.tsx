"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { PlacesAutocomplete } from "@/components/booking/PlacesAutocomplete";
import { emailError, phoneError, isValidEmail, isValidPhone } from "@/lib/validation";

type ProfileType = "driver" | "particulier" | "hotel" | "hospital" | "enterprise";

const bookingOptions: { type: ProfileType; label: string; icon: string; description: string }[] = [
  { type: "particulier", label: "Particulier", icon: "solar:user-linear", description: "Réserver pour moi-même" },
  { type: "hotel", label: "Hôtel", icon: "solar:building-linear", description: "Établissement hôtelier" },
  { type: "hospital", label: "Hôpital", icon: "solar:health-linear", description: "Établissement de santé" },
  { type: "enterprise", label: "Entreprise", icon: "solar:buildings-2-linear", description: "Entreprise / PME" },
];

export default function InscriptionPage() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [profileType, setProfileType] = useState<ProfileType | null>(null);
  const [orgAddress, setOrgAddress] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [cityAddress, setCityAddress] = useState("");
  const [cityLat, setCityLat] = useState<number | undefined>();
  const [cityLng, setCityLng] = useState<number | undefined>();

  async function handleDriverSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      profileType: "driver",
      firstName: formData.get("firstName") as string,
      companyName: formData.get("companyName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      password: formData.get("password") as string,
      cityAddress,
      cityLat,
      cityLng,
    };

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setError(json.error || "Erreur lors de l'inscription");
        return;
      }

      router.push("/connexion?registered=true");
    } catch {
      setError("Erreur de connexion au serveur");
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
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      password: formData.get("password") as string,
    };

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setError(json.error || "Erreur lors de l'inscription");
        return;
      }

      router.push("/connexion?registered=true");
    } catch {
      setError("Erreur de connexion au serveur");
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
    };

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (!res.ok) {
        setError(json.error || "Erreur lors de l'inscription");
        return;
      }

      router.push("/connexion?registered=true");
    } catch {
      setError("Erreur de connexion au serveur");
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
            <span className="font-bold text-neutral-950">Noir</span>
          </Link>
          <h1 className="text-2xl font-semibold tracking-tight mt-6 mb-2">
            Créer votre compte
          </h1>
          <p className="text-sm text-neutral-500 font-light">
            Choisissez votre type de profil
          </p>
        </div>

        {/* Profile selector */}
        {!profileType && (
          <div className="space-y-6">
            {/* Zone 1: Chauffeur */}
            <div>
              <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-3">
                Chauffeur de taxi
              </p>
              <button
                onClick={() => setProfileType("driver")}
                className="w-full flex items-center gap-4 p-5 rounded-2xl border-2 border-neutral-200 hover:border-neutral-900 hover:bg-neutral-50 transition-all"
              >
                <Icon icon="solar:car-linear" className="text-3xl text-neutral-700" />
                <div className="text-left">
                  <span className="text-sm font-semibold block">Taxi</span>
                  <span className="text-xs text-neutral-500 font-light">Chauffeur de taxi</span>
                </div>
              </button>
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-neutral-200" />
              <span className="text-xs text-neutral-400 font-medium">ou</span>
              <div className="flex-1 h-px bg-neutral-200" />
            </div>

            {/* Zone 2: Je réserve */}
            <div>
              <p className="text-xs font-medium text-neutral-400 uppercase tracking-wider mb-3">
                Je réserve des taxis
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

        {/* Driver form */}
        {profileType === "driver" && (
          <>
            <button
              onClick={() => { setProfileType(null); setError(""); setFormEmail(""); setFormPhone(""); setCityAddress(""); setCityLat(undefined); setCityLng(undefined); }}
              className="flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900 mb-4"
            >
              <Icon icon="solar:arrow-left-linear" />
              Retour au choix du profil
            </button>

            <form onSubmit={handleDriverSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
                  {error}
                </div>
              )}

              <div>
                <label htmlFor="firstName" className="block text-sm font-medium mb-1.5">
                  Prénom
                </label>
                <input id="firstName" name="firstName" type="text" required className={inputClass} placeholder="Jean" />
              </div>

              <div>
                <label htmlFor="companyName" className="block text-sm font-medium mb-1.5">
                  Nom de la société
                </label>
                <input id="companyName" name="companyName" type="text" required className={inputClass} placeholder="Taxi Jean Express" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">Ville d&apos;activité</label>
                <PlacesAutocomplete
                  placeholder="Paris, Lyon, Marseille..."
                  value={cityAddress}
                  onChange={(val, lat, lng) => {
                    setCityAddress(val);
                    if (lat && lng) { setCityLat(lat); setCityLng(lng); }
                  }}
                  icon="solar:map-point-linear"
                />
                <p className="text-xs text-neutral-400 mt-1">Rayon de 50 km couvert par défaut</p>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email</label>
                <input id="email" name="email" type="email" required className={`${inputClass} ${emailError(formEmail) ? "ring-2 ring-red-300 bg-red-50/50" : ""}`} placeholder="jean.dupont@email.com" onChange={(e) => setFormEmail(e.target.value)} />
                {emailError(formEmail) && <p className="text-xs text-red-500 mt-1">{emailError(formEmail)}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1.5">Téléphone</label>
                <input id="phone" name="phone" type="tel" required className={`${inputClass} ${phoneError(formPhone) ? "ring-2 ring-red-300 bg-red-50/50" : ""}`} placeholder="06 12 34 56 78" onChange={(e) => setFormPhone(e.target.value)} />
                {phoneError(formPhone) && <p className="text-xs text-red-500 mt-1">{phoneError(formPhone)}</p>}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1.5">Mot de passe</label>
                <input id="password" name="password" type="password" required minLength={6} className={inputClass} placeholder="Minimum 6 caractères" />
              </div>

              <button
                type="submit"
                disabled={loading || (!!formEmail && !isValidEmail(formEmail)) || (!!formPhone && !isValidPhone(formPhone))}
                className="w-full bg-neutral-950 text-white rounded-xl py-3.5 text-sm font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed btn-lift"
              >
                {loading ? "Inscription en cours..." : "S'inscrire comme chauffeur"}
              </button>
            </form>
          </>
        )}

        {/* Particulier form */}
        {profileType === "particulier" && (
          <>
            <button
              onClick={() => { setProfileType(null); setError(""); setFormEmail(""); setFormPhone(""); }}
              className="flex items-center gap-1 text-sm text-neutral-500 hover:text-neutral-900 mb-4"
            >
              <Icon icon="solar:arrow-left-linear" />
              Retour au choix du profil
            </button>

            <div className="flex items-center gap-2 mb-4 px-1">
              <Icon icon="solar:user-linear" className="text-lg text-neutral-600" />
              <span className="text-sm font-medium text-neutral-600">Inscription Particulier</span>
            </div>

            <form onSubmit={handleParticulierSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
                  {error}
                </div>
              )}

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-1.5">
                    Prénom
                  </label>
                  <input id="firstName" name="firstName" type="text" required className={inputClass} placeholder="Marie" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-1.5">
                    Nom
                  </label>
                  <input id="lastName" name="lastName" type="text" required className={inputClass} placeholder="Martin" />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email</label>
                <input id="email" name="email" type="email" required className={`${inputClass} ${emailError(formEmail) ? "ring-2 ring-red-300 bg-red-50/50" : ""}`} placeholder="marie.martin@email.com" onChange={(e) => setFormEmail(e.target.value)} />
                {emailError(formEmail) && <p className="text-xs text-red-500 mt-1">{emailError(formEmail)}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1.5">Téléphone</label>
                <input id="phone" name="phone" type="tel" required className={`${inputClass} ${phoneError(formPhone) ? "ring-2 ring-red-300 bg-red-50/50" : ""}`} placeholder="06 12 34 56 78" onChange={(e) => setFormPhone(e.target.value)} />
                {phoneError(formPhone) && <p className="text-xs text-red-500 mt-1">{phoneError(formPhone)}</p>}
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1.5">Mot de passe</label>
                <input id="password" name="password" type="password" required minLength={6} className={inputClass} placeholder="Minimum 6 caractères" />
              </div>

              <button
                type="submit"
                disabled={loading || (!!formEmail && !isValidEmail(formEmail)) || (!!formPhone && !isValidPhone(formPhone))}
                className="w-full bg-neutral-950 text-white rounded-xl py-3.5 text-sm font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed btn-lift"
              >
                {loading ? "Inscription en cours..." : "Créer mon compte"}
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
              Retour au choix du profil
            </button>

            <div className="flex items-center gap-2 mb-4 px-1">
              <Icon
                icon={bookingOptions.find((o) => o.type === profileType)!.icon}
                className="text-lg text-neutral-600"
              />
              <span className="text-sm font-medium text-neutral-600">
                Inscription {bookingOptions.find((o) => o.type === profileType)!.label}
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
                  Nom de l&apos;établissement
                </label>
                <input id="name" name="name" type="text" required className={inputClass} placeholder="Hôtel Le Grand Paris" />
              </div>

              <div>
                <label htmlFor="contactName" className="block text-sm font-medium mb-1.5">
                  Nom du contact principal
                </label>
                <input id="contactName" name="contactName" type="text" required className={inputClass} placeholder="Marie Martin" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5">Email</label>
                <input id="email" name="email" type="email" required className={`${inputClass} ${emailError(formEmail) ? "ring-2 ring-red-300 bg-red-50/50" : ""}`} placeholder="contact@hotel.com" onChange={(e) => setFormEmail(e.target.value)} />
                {emailError(formEmail) && <p className="text-xs text-red-500 mt-1">{emailError(formEmail)}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1.5">Téléphone</label>
                <input id="phone" name="phone" type="tel" required className={`${inputClass} ${phoneError(formPhone) ? "ring-2 ring-red-300 bg-red-50/50" : ""}`} placeholder="01 23 45 67 89" onChange={(e) => setFormPhone(e.target.value)} />
                {phoneError(formPhone) && <p className="text-xs text-red-500 mt-1">{phoneError(formPhone)}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium mb-1.5">Adresse</label>
                <PlacesAutocomplete
                  placeholder="12 rue de la Paix, 75002 Paris"
                  value={orgAddress}
                  onChange={(val) => setOrgAddress(val)}
                  icon="solar:map-point-linear"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium mb-1.5">Mot de passe</label>
                <input id="password" name="password" type="password" required minLength={6} className={inputClass} placeholder="Minimum 6 caractères" />
              </div>

              <button
                type="submit"
                disabled={loading || (!!formEmail && !isValidEmail(formEmail)) || (!!formPhone && !isValidPhone(formPhone))}
                className="w-full bg-neutral-950 text-white rounded-xl py-3.5 text-sm font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed btn-lift"
              >
                {loading ? "Inscription en cours..." : "Créer le compte"}
              </button>
            </form>
          </>
        )}

        <p className="text-center text-sm text-neutral-500 mt-6">
          Déjà un compte ?{" "}
          <Link href="/connexion" className="text-neutral-900 font-medium hover:underline">
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  );
}
