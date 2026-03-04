"use client";

import { useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { PlacesAutocomplete } from "@/components/booking/PlacesAutocomplete";
import { useTranslations } from "next-intl";

export default function ParametresPage() {
  const t = useTranslations("org");
  const tc = useTranslations("common");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [contactName, setContactName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [orgType, setOrgType] = useState<string>("");

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/org/profile");
        const data = await res.json();
        setName(data.name || "");
        setContactName(data.contactName || "");
        setPhone(data.phone || "");
        setAddress(data.address || "");
        setOrgType(data.type || "");
      } catch {
        // Silently fail
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage("");
    setError("");

    try {
      const body: Record<string, string> = { name, contactName, phone, address };
      if (newPassword) body.password = newPassword;

      const res = await fetch("/api/org/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const data = await res.json();
        setError(data.error || t("saveError"));
        return;
      }

      setMessage(t("saveSuccess"));
      setNewPassword("");
    } catch {
      setError(tc("serverError"));
    } finally {
      setSaving(false);
    }
  }

  const inputClass =
    "w-full bg-neutral-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-neutral-900 focus:bg-white transition-all";

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Icon icon="solar:refresh-linear" className="text-2xl animate-spin text-neutral-400" />
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight">
          {orgType === "INDIVIDUAL" ? t("profileSection") : t("settingsTitle")}
        </h1>
        <p className="text-sm text-neutral-500 mt-1">
          {orgType === "INDIVIDUAL" ? t("settingsSubtitleIndividual") : t("settingsSubtitleOrg")}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {message && (
          <div className="bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-xl">
            {message}
          </div>
        )}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-xl">
            {error}
          </div>
        )}

        <div className="bg-white rounded-2xl border border-neutral-200 p-5 space-y-4">
          <h2 className="font-medium text-sm text-neutral-500 uppercase tracking-wider">
            {orgType === "INDIVIDUAL" ? t("personalInfo") : t("establishment")}
          </h2>

          <div>
            <label className="block text-sm font-medium mb-1.5">
              {orgType === "INDIVIDUAL" ? t("fullName") : t("establishmentName")}
            </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} className={inputClass} required />
          </div>

          {orgType !== "INDIVIDUAL" && (
            <div>
              <label className="block text-sm font-medium mb-1.5">{t("mainContact")}</label>
              <input type="text" value={contactName} onChange={(e) => setContactName(e.target.value)} className={inputClass} required />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-1.5">{t("phone")}</label>
            <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputClass} />
          </div>

          {orgType !== "INDIVIDUAL" && (
            <div>
              <label className="block text-sm font-medium mb-1.5">{t("address")}</label>
              <PlacesAutocomplete
                placeholder={t("addressPlaceholder")}
                value={address}
                onChange={(val) => setAddress(val)}
                icon="solar:map-point-linear"
              />
            </div>
          )}
        </div>

        <div className="bg-white rounded-2xl border border-neutral-200 p-5 space-y-4">
          <h2 className="font-medium text-sm text-neutral-500 uppercase tracking-wider">{t("security")}</h2>
          <div>
            <label className="block text-sm font-medium mb-1.5">{t("newPassword")}</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className={inputClass}
              placeholder={t("leaveBlank")}
              minLength={6}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={saving}
          className="w-full bg-neutral-950 text-white rounded-xl py-3.5 text-sm font-medium hover:bg-neutral-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed btn-lift"
        >
          {saving ? t("saving") : t("saveButton")}
        </button>
      </form>
    </div>
  );
}
