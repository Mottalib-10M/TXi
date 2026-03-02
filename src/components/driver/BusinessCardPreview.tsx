"use client";

import { useEffect, useCallback, useState } from "react";
import { Icon } from "@iconify/react";
import QRCode from "qrcode";

type CardFormat = "business" | "a6" | "a5";

interface DriverInfo {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  slug: string;
  vehicleBrand: string;
  vehicleModel: string;
  zoneAddress: string;
  companyName?: string;
}

const formats: { id: CardFormat; label: string; description: string; icon: string }[] = [
  { id: "business", label: "Carte de visite", description: "85 x 55 mm", icon: "solar:card-linear" },
  { id: "a6", label: "Format A6", description: "148 x 105 mm", icon: "solar:document-linear" },
  { id: "a5", label: "Format A5", description: "210 x 148 mm — Dossier siège", icon: "solar:monitor-linear" },
];

export function BusinessCardPreview({ driver }: { driver: DriverInfo }) {
  const [qrDataUrl, setQrDataUrl] = useState<string>("");
  const [qrDataUrlLarge, setQrDataUrlLarge] = useState<string>("");
  const [activeFormat, setActiveFormat] = useState<CardFormat>("business");
  const profileUrl = `https://taxinoir.fr/taxi/${driver.slug}`;

  const generateQrCode = useCallback(async () => {
    try {
      const [small, large] = await Promise.all([
        QRCode.toDataURL(profileUrl, {
          width: 200,
          margin: 1,
          color: { dark: "#171717", light: "#ffffff" },
        }),
        QRCode.toDataURL(profileUrl, {
          width: 600,
          margin: 1,
          color: { dark: "#171717", light: "#ffffff" },
        }),
      ]);
      setQrDataUrl(small);
      setQrDataUrlLarge(large);
    } catch {
      // Fallback
    }
  }, [profileUrl]);

  useEffect(() => {
    generateQrCode();
  }, [generateQrCode]);

  // ── Print helper ──
  function handlePrint() {
    const html = buildPrintHtml();
    const win = window.open("", "_blank", "width=800,height=600");
    if (!win) return;
    win.document.write(html);
    win.document.close();
    win.onload = () => {
      setTimeout(() => win.print(), 300);
    };
  }

  function buildPrintHtml(): string {
    const qr = activeFormat === "business" ? qrDataUrl : qrDataUrlLarge;
    const name = `${driver.firstName} ${driver.lastName}`;
    const vehicle = driver.vehicleBrand && driver.vehicleModel ? `${driver.vehicleBrand} ${driver.vehicleModel}` : "";

    if (activeFormat === "business") {
      return `<!DOCTYPE html><html><head><style>
        @page { size: 85mm 55mm; margin: 0; }
        body { margin: 0; font-family: Helvetica, Arial, sans-serif; }
        .card { width: 85mm; height: 55mm; padding: 6mm; box-sizing: border-box; position: relative; }
        .brand { font-size: 14pt; font-weight: bold; margin-bottom: 4mm; }
        .brand .t { color: #525252; } .brand .n { color: #171717; }
        .company { font-size: 8pt; color: #525252; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 1mm; }
        .name { font-size: 11pt; font-weight: bold; color: #171717; }
        .details { font-size: 7pt; color: #737373; margin-top: 2mm; line-height: 1.6; }
        .qr { position: absolute; top: 4mm; right: 5mm; width: 24mm; height: 24mm; }
        .footer { position: absolute; bottom: 4mm; left: 6mm; font-size: 7pt; color: #a3a3a3; }
      </style></head><body><div class="card">
        <div class="brand"><span class="t">Taxi</span><span class="n">Noir</span></div>
        ${driver.companyName ? `<div class="company">${driver.companyName}</div>` : ""}
        <div class="name">${name}</div>
        <div class="details">${vehicle ? vehicle + "<br>" : ""}${driver.zoneAddress ? driver.zoneAddress + "<br>" : ""}${driver.phone}<br>${driver.email}</div>
        ${qr ? `<img class="qr" src="${qr}" />` : ""}
        <div class="footer">Scannez pour réserver directement</div>
      </div></body></html>`;
    }

    if (activeFormat === "a6") {
      return `<!DOCTYPE html><html><head><style>
        @page { size: 148mm 105mm landscape; margin: 0; }
        body { margin: 0; font-family: Helvetica, Arial, sans-serif; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; color-adjust: exact !important; }
        .card { width: 148mm; height: 105mm; display: flex; }
        .left { flex: 3; padding: 10mm 8mm; display: flex; flex-direction: column; justify-content: center; }
        .right { flex: 2; background: #171717; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 8mm; text-align: center; }
        .brand { font-size: 20pt; font-weight: bold; margin-bottom: 5mm; }
        .brand .t { color: #525252; } .brand .n { color: #171717; }
        .name { font-size: 17pt; font-weight: bold; color: #171717; }
        .sub { font-size: 9pt; color: #a3a3a3; margin-top: 1mm; text-transform: uppercase; letter-spacing: 0.5px; }
        .sep { width: 15mm; height: 0.5px; background: #e5e5e5; margin: 4mm 0; }
        .label { font-size: 7pt; color: #a3a3a3; text-transform: uppercase; letter-spacing: 0.5px; font-weight: bold; }
        .val { font-size: 11pt; color: #333; margin-bottom: 3mm; }
        .qr { width: 38mm; height: 38mm; background: #fff; border-radius: 3mm; padding: 2mm; box-sizing: border-box; margin-bottom: 4mm; }
        .qr img { width: 100%; height: 100%; }
        .cta { color: #fff; font-size: 16pt; font-weight: bold; line-height: 1.3; }
        .ctasub { color: #a3a3a3; font-size: 11pt; margin-top: 3mm; line-height: 1.5; }
      </style></head><body><div class="card">
        <div class="left">
          <div class="brand"><span class="t">Taxi</span><span class="n">Noir</span></div>
          ${driver.companyName ? `<div style="font-size:8pt;color:#525252;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:1mm;">${driver.companyName}</div>` : ""}
          <div class="name">${name}</div>
          <div class="sub">Chauffeur de taxi</div>
          <div class="sep"></div>
          ${vehicle ? `<div class="label">Véhicule</div><div class="val">${vehicle}</div>` : ""}
          ${driver.zoneAddress ? `<div class="label">Zone</div><div class="val">${driver.zoneAddress}</div>` : ""}
          <div class="label">Contact</div>
          <div class="val">${driver.phone}<br>${driver.email}</div>
        </div>
        <div class="right">
          ${qr ? `<div class="qr"><img src="${qr}" /></div>` : ""}
          <div class="cta">Restons en<br>contact !</div>
          <div class="ctasub">Scannez pour enregistrer mes<br>coordonnées et réserver facilement.</div>
        </div>
      </div></body></html>`;
    }

    // A5
    return `<!DOCTYPE html><html><head><style>
      @page { size: 210mm 148mm landscape; margin: 0; }
      body { margin: 0; font-family: Helvetica, Arial, sans-serif; -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; color-adjust: exact !important; }
      .card { width: 210mm; height: 148mm; display: flex; flex-direction: column; }
      .header { background: #171717; padding: 8mm 14mm; display: flex; justify-content: space-between; align-items: center; }
      .brand { font-size: 24pt; font-weight: bold; }
      .brand .t { color: #666; } .brand .n { color: #fff; }
      .hname { color: #fff; font-size: 18pt; font-weight: bold; margin-top: 2mm; }
      .hsub { color: #888; font-size: 10pt; margin-top: 1mm; }
      .hright { text-align: right; color: #999; font-size: 11pt; line-height: 1.6; }
      .center { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 8mm; }
      .qr { width: 55mm; height: 55mm; border: 1px solid #e5e5e5; border-radius: 4mm; padding: 3mm; box-sizing: border-box; }
      .qr img { width: 100%; height: 100%; }
      .cta { font-size: 22pt; font-weight: bold; color: #171717; margin-top: 6mm; }
      .ctasub { font-size: 13pt; color: #666; margin-top: 3mm; text-align: center; max-width: 170mm; line-height: 1.5; }
      .footer { border-top: 1px solid #e5e5e5; padding: 4mm 14mm; display: flex; justify-content: space-between; font-size: 10pt; color: #999; }
    </style></head><body><div class="card">
      <div class="header">
        <div>
          <div class="brand"><span class="t">Taxi</span><span class="n">Noir</span></div>
          ${driver.companyName ? `<div style="font-size:9pt;color:#a3a3a3;text-transform:uppercase;letter-spacing:0.5px;">${driver.companyName}</div>` : ""}
          <div class="hname">${name}</div>
          <div class="hsub">Votre chauffeur de taxi</div>
        </div>
        <div class="hright">${vehicle ? vehicle + "<br>" : ""}${driver.zoneAddress || ""}</div>
      </div>
      <div class="center">
        ${qr ? `<div class="qr"><img src="${qr}" /></div>` : ""}
        <div class="cta">Restons en contact !</div>
        <div class="ctasub">Scannez ce QR code pour enregistrer mes coordonnées et réserver votre prochaine course encore plus facilement.</div>
      </div>
      <div class="footer">
        <span>${driver.phone}</span>
        <span>${driver.email}</span>
        <span>${profileUrl.replace("https://", "").replace("http://", "")}</span>
      </div>
    </div></body></html>`;
  }

  // ── PDF downloads ──
  async function downloadBusinessCard() {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: [85, 55] });
    doc.setFillColor(255, 255, 255);
    doc.rect(0, 0, 85, 55, "F");

    doc.setFontSize(14); doc.setFont("helvetica", "bold");
    doc.setTextColor(82, 82, 82); doc.text("Taxi", 6, 10);
    const tw = doc.getTextWidth("Taxi");
    doc.setTextColor(23, 23, 23); doc.text("Noir", 6 + tw, 10);

    let y = 17;
    if (driver.companyName) {
      doc.setFontSize(8); doc.setFont("helvetica", "normal"); doc.setTextColor(82, 82, 82);
      doc.text(driver.companyName.toUpperCase(), 6, y);
      y += 5;
    }
    doc.setFontSize(11); doc.setFont("helvetica", "bold"); doc.setTextColor(23, 23, 23);
    doc.text(`${driver.firstName} ${driver.lastName}`, 6, y);
    y += 6;

    doc.setFontSize(7); doc.setFont("helvetica", "normal"); doc.setTextColor(115, 115, 115);
    if (driver.vehicleBrand && driver.vehicleModel) { doc.text(`${driver.vehicleBrand} ${driver.vehicleModel}`, 6, y); y += 5; }
    if (driver.zoneAddress) { doc.text(driver.zoneAddress, 6, y); y += 5; }
    doc.text(driver.phone, 6, y); y += 5;
    doc.text(driver.email, 6, y);

    if (qrDataUrl) doc.addImage(qrDataUrl, "PNG", 57, 4, 24, 24);

    doc.setFontSize(7); doc.setTextColor(163, 163, 163);
    doc.text("Scannez pour réserver directement", 6, 50);
    doc.save(`carte-visite-${driver.slug}.pdf`);
  }

  async function downloadA6Card() {
    const { jsPDF } = await import("jspdf");
    const W = 148, H = 105;
    const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: [W, H] });
    doc.setFillColor(255, 255, 255); doc.rect(0, 0, W, H, "F");

    // Dark panel
    const panelX = 88;
    doc.setFillColor(23, 23, 23); doc.rect(panelX, 0, W - panelX, H, "F");

    // Brand
    doc.setFontSize(20); doc.setFont("helvetica", "bold");
    doc.setTextColor(82, 82, 82); doc.text("Taxi", 10, 16);
    const tw6 = doc.getTextWidth("Taxi");
    doc.setTextColor(23, 23, 23); doc.text("Noir", 10 + tw6, 16);

    // Company name + Name
    let y6 = 28;
    if (driver.companyName) {
      doc.setFontSize(8); doc.setFont("helvetica", "normal"); doc.setTextColor(82, 82, 82);
      doc.text(driver.companyName.toUpperCase(), 10, y6);
      y6 += 5;
    }
    doc.setFontSize(17); doc.setFont("helvetica", "bold"); doc.setTextColor(23, 23, 23);
    doc.text(`${driver.firstName} ${driver.lastName}`, 10, y6 + 2);

    doc.setFontSize(9); doc.setFont("helvetica", "normal"); doc.setTextColor(160, 160, 160);
    doc.text("Chauffeur de taxi", 10, y6 + 9);

    doc.setDrawColor(230, 230, 230); doc.setLineWidth(0.3); doc.line(10, 42, 76, 42);

    let y = 50;
    if (driver.vehicleBrand && driver.vehicleModel) {
      doc.setFont("helvetica", "bold"); doc.setFontSize(7); doc.setTextColor(170, 170, 170);
      doc.text("VÉHICULE", 10, y - 3);
      doc.setFont("helvetica", "normal"); doc.setFontSize(11); doc.setTextColor(50, 50, 50);
      doc.text(`${driver.vehicleBrand} ${driver.vehicleModel}`, 10, y + 3);
      y += 14;
    }
    if (driver.zoneAddress) {
      doc.setFont("helvetica", "bold"); doc.setFontSize(7); doc.setTextColor(170, 170, 170);
      doc.text("ZONE", 10, y - 3);
      doc.setFont("helvetica", "normal"); doc.setFontSize(11); doc.setTextColor(50, 50, 50);
      doc.text(driver.zoneAddress, 10, y + 3);
      y += 14;
    }
    doc.setFont("helvetica", "bold"); doc.setFontSize(7); doc.setTextColor(170, 170, 170);
    doc.text("CONTACT", 10, y - 3);
    doc.setFont("helvetica", "normal"); doc.setFontSize(11); doc.setTextColor(50, 50, 50);
    doc.text(driver.phone, 10, y + 3);
    doc.text(driver.email, 10, y + 10);

    // Right panel
    const cx = panelX + (W - panelX) / 2;
    if (qrDataUrlLarge) doc.addImage(qrDataUrlLarge, "PNG", cx - 18, 10, 36, 36);

    doc.setFontSize(16); doc.setFont("helvetica", "bold"); doc.setTextColor(255, 255, 255);
    doc.text("Restons en", cx, 56, { align: "center" });
    doc.text("contact !", cx, 64, { align: "center" });

    doc.setFontSize(10); doc.setFont("helvetica", "normal"); doc.setTextColor(180, 180, 180);
    const cta = doc.splitTextToSize("Scannez pour enregistrer mes coordonnées et réserver facilement.", W - panelX - 10);
    doc.text(cta, cx, 74, { align: "center" });

    doc.save(`carte-a6-${driver.slug}.pdf`);
  }

  async function downloadA5Card() {
    const { jsPDF } = await import("jspdf");
    const W = 210, H = 148;
    const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: [W, H] });
    doc.setFillColor(255, 255, 255); doc.rect(0, 0, W, H, "F");

    // Header
    const hH = 40;
    doc.setFillColor(23, 23, 23); doc.rect(0, 0, W, hH, "F");

    doc.setFontSize(24); doc.setFont("helvetica", "bold");
    doc.setTextColor(100, 100, 100); doc.text("Taxi", 14, 17);
    const tw5 = doc.getTextWidth("Taxi");
    doc.setTextColor(255, 255, 255); doc.text("Noir", 14 + tw5, 17);

    let y5 = 26;
    if (driver.companyName) {
      doc.setFontSize(9); doc.setFont("helvetica", "normal"); doc.setTextColor(163, 163, 163);
      doc.text(driver.companyName.toUpperCase(), 14, y5);
      y5 += 5;
    }
    doc.setFontSize(18); doc.setFont("helvetica", "bold"); doc.setTextColor(255, 255, 255);
    doc.text(`${driver.firstName} ${driver.lastName}`, 14, y5 + 2);
    doc.setFontSize(10); doc.setFont("helvetica", "normal"); doc.setTextColor(150, 150, 150);
    doc.text("Votre chauffeur de taxi", 14, y5 + 9);

    if (driver.vehicleBrand && driver.vehicleModel) {
      doc.setFontSize(11); doc.setTextColor(180, 180, 180);
      doc.text(`${driver.vehicleBrand} ${driver.vehicleModel}`, W - 14, 28, { align: "right" });
    }
    if (driver.zoneAddress) {
      doc.setFontSize(11); doc.setTextColor(140, 140, 140);
      doc.text(driver.zoneAddress, W - 14, 37, { align: "right" });
    }

    // QR large
    const qrS = 50;
    const qrX = W / 2 - qrS / 2;
    const qrY = hH + 8;
    if (qrDataUrlLarge) {
      doc.setDrawColor(230, 230, 230); doc.setLineWidth(0.5);
      doc.roundedRect(qrX - 3, qrY - 3, qrS + 6, qrS + 6, 3, 3, "S");
      doc.addImage(qrDataUrlLarge, "PNG", qrX, qrY, qrS, qrS);
    }

    // CTA
    const ctaY = qrY + qrS + 10;
    doc.setFontSize(22); doc.setFont("helvetica", "bold"); doc.setTextColor(23, 23, 23);
    doc.text("Restons en contact !", W / 2, ctaY, { align: "center" });

    doc.setFontSize(13); doc.setFont("helvetica", "normal"); doc.setTextColor(90, 90, 90);
    const cta = doc.splitTextToSize("Scannez ce QR code pour enregistrer mes coordonnées et réserver votre prochaine course encore plus facilement.", 170);
    doc.text(cta, W / 2, ctaY + 9, { align: "center" });

    // Footer
    const fY = H - 10;
    doc.setDrawColor(235, 235, 235); doc.setLineWidth(0.3); doc.line(14, fY - 4, W - 14, fY - 4);
    doc.setFontSize(10); doc.setFont("helvetica", "normal"); doc.setTextColor(140, 140, 140);
    doc.text(driver.phone, 14, fY);
    doc.text(driver.email, W / 2, fY, { align: "center" });
    doc.text(profileUrl.replace("https://", "").replace("http://", ""), W - 14, fY, { align: "right" });

    doc.save(`carte-a5-siege-${driver.slug}.pdf`);
  }

  function handleDownload() {
    if (activeFormat === "business") downloadBusinessCard();
    else if (activeFormat === "a6") downloadA6Card();
    else downloadA5Card();
  }

  const shortUrl = profileUrl.replace("https://", "").replace("http://", "");

  return (
    <div className="max-w-2xl">
      {/* Format selector */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-6">
        {formats.map((f) => (
          <button
            key={f.id}
            onClick={() => setActiveFormat(f.id)}
            className={`px-3 py-3 rounded-xl border text-left transition-all ${
              activeFormat === f.id
                ? "border-neutral-900 bg-neutral-50 shadow-sm"
                : "border-neutral-200 hover:border-neutral-300"
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <Icon icon={f.icon} className={`text-base ${activeFormat === f.id ? "text-neutral-900" : "text-neutral-400"}`} />
              <p className={`text-sm font-medium ${activeFormat === f.id ? "text-neutral-900" : "text-neutral-600"}`}>
                {f.label}
              </p>
            </div>
            <p className="text-xs text-neutral-400">{f.description}</p>
          </button>
        ))}
      </div>

      {/* ── Business card preview ── */}
      {activeFormat === "business" && (
        <div className="bg-white border border-neutral-200 rounded-2xl p-8 mb-6">
          <div className="aspect-[85/55] bg-white border border-neutral-200 rounded-xl p-6 relative shadow-lg max-w-md mx-auto">
            <p className="text-lg tracking-tight mb-4">
              <span className="text-neutral-600 font-normal">Taxi</span>
              <span className="text-neutral-950 font-bold">Noir</span>
            </p>
            {driver.companyName && (
              <p className="text-[10px] text-neutral-500 uppercase tracking-wider font-medium">{driver.companyName}</p>
            )}
            <p className="text-base font-semibold">{driver.firstName} {driver.lastName}</p>
            <div className="text-xs text-neutral-500 space-y-0.5 mt-2">
              {driver.vehicleBrand && driver.vehicleModel && <p>{driver.vehicleBrand} {driver.vehicleModel}</p>}
              {driver.zoneAddress && <p>{driver.zoneAddress}</p>}
              <p>{driver.phone}</p>
              <p>{driver.email}</p>
            </div>
            {qrDataUrl && (
              <div className="absolute top-6 right-6 w-20 h-20 rounded-lg overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={qrDataUrl} alt="QR Code" className="w-full h-full object-cover" />
              </div>
            )}
            <p className="absolute bottom-4 left-6 text-xs text-neutral-400">Scannez pour réserver directement</p>
          </div>
        </div>
      )}

      {/* ── A6 preview ── */}
      {activeFormat === "a6" && (
        <div className="bg-white border border-neutral-200 rounded-2xl p-6 mb-6">
          <div className="aspect-[148/105] bg-white border border-neutral-200 rounded-xl relative shadow-lg max-w-xl mx-auto overflow-hidden flex">
            <div className="flex-[3] p-5 flex flex-col justify-center">
              <p className="text-xl tracking-tight mb-3">
                <span className="text-neutral-500 font-normal">Taxi</span>
                <span className="text-neutral-950 font-bold">Noir</span>
              </p>
              {driver.companyName && (
                <p className="text-[9px] text-neutral-500 uppercase tracking-wider font-medium">{driver.companyName}</p>
              )}
              <p className="text-lg font-bold text-neutral-900">{driver.firstName} {driver.lastName}</p>
              <p className="text-[10px] text-neutral-400 mt-0.5 uppercase tracking-wider">Chauffeur de taxi</p>
              <div className="w-8 h-px bg-neutral-200 my-3" />
              <div className="space-y-2">
                {driver.vehicleBrand && driver.vehicleModel && (
                  <div>
                    <p className="text-[8px] text-neutral-400 uppercase tracking-wider font-medium">Véhicule</p>
                    <p className="text-sm text-neutral-700 font-medium">{driver.vehicleBrand} {driver.vehicleModel}</p>
                  </div>
                )}
                {driver.zoneAddress && (
                  <div>
                    <p className="text-[8px] text-neutral-400 uppercase tracking-wider font-medium">Zone</p>
                    <p className="text-sm text-neutral-700 font-medium">{driver.zoneAddress}</p>
                  </div>
                )}
                <div>
                  <p className="text-[8px] text-neutral-400 uppercase tracking-wider font-medium">Contact</p>
                  <p className="text-sm text-neutral-700">{driver.phone}</p>
                  <p className="text-sm text-neutral-700">{driver.email}</p>
                </div>
              </div>
            </div>
            <div className="flex-[2] bg-neutral-950 flex flex-col items-center justify-center p-4 text-center">
              {qrDataUrl && (
                <div className="w-[5.5rem] h-[5.5rem] bg-white rounded-lg p-1.5 mb-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={qrDataUrl} alt="QR Code" className="w-full h-full object-cover rounded" />
                </div>
              )}
              <p className="text-white text-base font-bold leading-tight">Restons en<br />contact !</p>
              <p className="text-neutral-400 text-xs mt-2 leading-relaxed px-1">
                Scannez pour enregistrer mes<br />coordonnées et réserver facilement.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ── A5 preview — Behind driver seat ── */}
      {activeFormat === "a5" && (
        <div className="bg-white border border-neutral-200 rounded-2xl p-6 mb-6">
          <div className="aspect-[210/148] bg-white border border-neutral-200 rounded-xl relative shadow-lg mx-auto overflow-hidden flex flex-col">
            {/* Header */}
            <div className="bg-neutral-950 px-6 py-4 flex items-center justify-between shrink-0">
              <div>
                <p className="text-xl tracking-tight">
                  <span className="text-neutral-500 font-normal">Taxi</span>
                  <span className="text-white font-bold">Noir</span>
                </p>
                {driver.companyName && (
                  <p className="text-neutral-400 text-[10px] uppercase tracking-wider mt-1">{driver.companyName}</p>
                )}
                <p className="text-white font-bold text-base mt-0.5">{driver.firstName} {driver.lastName}</p>
                <p className="text-neutral-500 text-xs mt-0.5">Votre chauffeur de taxi</p>
              </div>
              <div className="text-right">
                {driver.vehicleBrand && driver.vehicleModel && (
                  <p className="text-neutral-400 text-xs">{driver.vehicleBrand} {driver.vehicleModel}</p>
                )}
                {driver.zoneAddress && <p className="text-neutral-500 text-xs">{driver.zoneAddress}</p>}
              </div>
            </div>

            {/* Center — QR + CTA large */}
            <div className="flex-1 flex flex-col items-center justify-center px-6 py-3">
              {qrDataUrl && (
                <div className="w-32 h-32 border-2 border-neutral-200 rounded-xl p-2 mb-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={qrDataUrl} alt="QR Code" className="w-full h-full object-cover rounded-lg" />
                </div>
              )}
              <h3 className="text-xl font-bold text-neutral-900 mt-1">Restons en contact !</h3>
              <p className="text-sm text-neutral-500 text-center mt-2 max-w-sm leading-relaxed">
                Scannez ce QR code pour enregistrer mes coordonnées et réserver votre prochaine course encore plus facilement.
              </p>
            </div>

            {/* Footer */}
            <div className="border-t border-neutral-200 px-4 sm:px-6 py-2.5 flex flex-wrap items-center justify-center sm:justify-between gap-x-4 gap-y-0.5 text-xs text-neutral-400 shrink-0">
              <span>{driver.phone}</span>
              <span className="truncate">{driver.email}</span>
              <span className="truncate">{shortUrl}</span>
            </div>
          </div>
        </div>
      )}

      {/* Profile URL */}
      <div className="bg-neutral-50 border border-neutral-200 rounded-xl p-4 mb-6">
        <label className="block text-xs text-neutral-500 font-light mb-1.5">Lien de votre profil public</label>
        <div className="flex items-center gap-2">
          <input readOnly value={profileUrl} className="flex-1 bg-white border border-neutral-200 rounded-lg px-3 py-2 text-sm outline-none" />
          <button onClick={() => navigator.clipboard.writeText(profileUrl)} className="bg-neutral-900 text-white rounded-lg px-3 py-2 text-sm hover:bg-neutral-800 transition-colors">
            <Icon icon="solar:copy-linear" />
          </button>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3">
        <button
          onClick={handleDownload}
          className="flex-1 bg-neutral-950 text-white rounded-xl py-3 text-sm font-medium hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 btn-lift"
        >
          <Icon icon="solar:document-linear" />
          Télécharger PDF
        </button>
        <button
          onClick={handlePrint}
          className="flex-1 bg-white text-neutral-900 border border-neutral-200 rounded-xl py-3 text-sm font-medium hover:bg-neutral-50 transition-colors flex items-center justify-center gap-2 btn-lift"
        >
          <Icon icon="solar:printer-linear" />
          Imprimer
        </button>
      </div>
    </div>
  );
}
