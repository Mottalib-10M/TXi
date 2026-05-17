import type { TmGeneratedContent } from "@/data/taxi-medical-content-templates";
import { getTranslations } from "next-intl/server";

export async function TmComparison({ content, cityName }: { content: TmGeneratedContent; cityName: string }) {
  const t = await getTranslations("tm");
  const parts = content.comparisonText.split("\n\n").filter(Boolean);
  const textParts = parts.filter(p => !p.startsWith("|"));
  const tableBlock = parts.find(p => p.startsWith("|"));
  const tableRows = tableBlock ? tableBlock.split("\n").filter(Boolean) : [];

  return (
    <section className="py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16 fade-up">
          <p className="text-sm font-medium text-neutral-500 mb-2 uppercase tracking-wider">{t("comparisonSubtitle")}</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{t("comparisonTitle", { cityName })}</h2>
        </div>
        <div className="space-y-4 fade-up">
          {textParts.map((p, i) => {
            const boldMatch = p.match(/^\*\*(.+?)\*\*\s*—?\s*([\s\S]*)/);
            if (boldMatch) {
              return (
                <div key={i}>
                  <h3 className="text-base font-semibold tracking-tight text-neutral-900 mt-6 mb-2">{boldMatch[1]}</h3>
                  <p className="text-sm text-neutral-600 font-light leading-relaxed">{boldMatch[2]}</p>
                </div>
              );
            }
            return <p key={i} className="text-sm text-neutral-600 font-light leading-relaxed">{p}</p>;
          })}
        </div>
        {tableRows.length > 2 && (
          <div className="bg-white border border-neutral-200 rounded-2xl overflow-hidden mt-8 fade-up">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-neutral-200 bg-neutral-50">
                    {tableRows[0].split("|").filter(Boolean).map((cell, ci) => (
                      <th key={ci} className="px-4 py-3 text-left font-medium text-neutral-600">{cell.trim()}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableRows.slice(2).map((row, ri) => {
                    const cells = row.split("|").filter(Boolean).map(c => c.trim());
                    return (
                      <tr key={ri} className={ri < tableRows.length - 3 ? "border-b border-neutral-100" : ""}>
                        {cells.map((cell, ci) => (
                          <td key={ci} className={`px-4 py-3 text-left ${ci === 0 ? "font-medium" : "font-light text-neutral-600"}`}>{cell}</td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
