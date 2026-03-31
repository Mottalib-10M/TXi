import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Icon } from "@iconify/react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollAnimation } from "@/components/ui/ScrollAnimation";
import { getArticleBySlug, getArticleSlugs, blogArticles } from "@/data/blog";

interface PageProps {
  params: Promise<{ locale: string; slug: string }>;
}

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  const lang = locale as "fr" | "en";
  const canonical = `https://taxineo.fr/${locale === "fr" ? "" : locale + "/"}blog/${slug}`;

  return {
    title: article.metaTitle[lang],
    description: article.metaDescription[lang],
    openGraph: {
      title: article.metaTitle[lang],
      description: article.metaDescription[lang],
      url: canonical,
      type: "article",
      publishedTime: article.date,
    },
    alternates: { canonical },
  };
}

export default async function BlogArticlePage({ params }: PageProps) {
  const { locale, slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const t = await getTranslations({ locale, namespace: "blog" });
  const lang = locale as "fr" | "en";
  const content = article.content[lang];

  // Simple markdown-like rendering for headings, paragraphs, lists, bold, tables
  const renderContent = (md: string) => {
    const lines = md.split("\n");
    const elements: React.ReactNode[] = [];
    let i = 0;
    let key = 0;

    while (i < lines.length) {
      const line = lines[i];

      // Empty line
      if (line.trim() === "") {
        i++;
        continue;
      }

      // Horizontal rule
      if (line.trim() === "---") {
        elements.push(<hr key={key++} className="my-8 border-neutral-200" />);
        i++;
        continue;
      }

      // H2
      if (line.startsWith("## ")) {
        elements.push(
          <h2 key={key++} className="text-2xl font-semibold tracking-tight mt-8 mb-4">
            {formatInline(line.slice(3))}
          </h2>
        );
        i++;
        continue;
      }

      // H3
      if (line.startsWith("### ")) {
        elements.push(
          <h3 key={key++} className="text-xl font-semibold tracking-tight mt-6 mb-3">
            {formatInline(line.slice(4))}
          </h3>
        );
        i++;
        continue;
      }

      // H4
      if (line.startsWith("#### ")) {
        elements.push(
          <h4 key={key++} className="text-lg font-semibold tracking-tight mt-5 mb-2">
            {formatInline(line.slice(5))}
          </h4>
        );
        i++;
        continue;
      }

      // Table
      if (line.includes("|") && line.trim().startsWith("|")) {
        const tableLines: string[] = [];
        while (i < lines.length && lines[i].includes("|") && lines[i].trim().startsWith("|")) {
          tableLines.push(lines[i]);
          i++;
        }
        elements.push(renderTable(tableLines, key++));
        continue;
      }

      // Unordered list
      if (line.startsWith("- ")) {
        const items: string[] = [];
        while (i < lines.length && lines[i].startsWith("- ")) {
          items.push(lines[i].slice(2));
          i++;
        }
        elements.push(
          <ul key={key++} className="space-y-2 my-4">
            {items.map((item, j) => (
              <li key={j} className="flex items-start gap-2 text-sm text-neutral-600 font-light leading-relaxed">
                <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full mt-2 shrink-0" />
                <span>{formatInline(item)}</span>
              </li>
            ))}
          </ul>
        );
        continue;
      }

      // Ordered list
      if (/^\d+\.\s/.test(line)) {
        const items: string[] = [];
        while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
          items.push(lines[i].replace(/^\d+\.\s/, ""));
          i++;
        }
        elements.push(
          <ol key={key++} className="space-y-2 my-4">
            {items.map((item, j) => (
              <li key={j} className="flex items-start gap-3 text-sm text-neutral-600 font-light leading-relaxed">
                <span className="text-xs font-semibold text-neutral-400 mt-0.5 shrink-0">{j + 1}.</span>
                <span>{formatInline(item)}</span>
              </li>
            ))}
          </ol>
        );
        continue;
      }

      // Paragraph
      elements.push(
        <p key={key++} className="text-sm text-neutral-600 font-light leading-relaxed my-3">
          {formatInline(line)}
        </p>
      );
      i++;
    }

    return elements;
  };

  const formatInline = (text: string): React.ReactNode => {
    // Replace **bold** with <strong>
    const parts = text.split(/(\*\*[^*]+\*\*)/);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return <strong key={i} className="font-medium text-neutral-900">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const renderTable = (tableLines: string[], tableKey: number) => {
    const rows = tableLines
      .filter((line) => !line.match(/^\|[\s-|]+\|$/)) // Filter separator rows
      .map((line) =>
        line
          .split("|")
          .filter((cell) => cell.trim() !== "")
          .map((cell) => cell.trim())
      );

    if (rows.length === 0) return null;
    const header = rows[0];
    const body = rows.slice(1);

    return (
      <div key={tableKey} className="overflow-x-auto my-6">
        <table className="w-full text-sm border border-neutral-200 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-neutral-50">
              {header.map((cell, i) => (
                <th key={i} className="px-4 py-2 text-left font-medium text-neutral-900 border-b border-neutral-200">
                  {formatInline(cell)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map((row, i) => (
              <tr key={i} className="border-b border-neutral-100 last:border-0">
                {row.map((cell, j) => (
                  <td key={j} className="px-4 py-2 text-neutral-600 font-light">
                    {formatInline(cell)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // Related articles (up to 3, excluding current)
  const related = blogArticles.filter((a) => a.slug !== slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title[lang],
    description: article.metaDescription[lang],
    datePublished: article.date,
    author: {
      "@type": "Organization",
      name: "TaxiNeo",
    },
    publisher: {
      "@type": "Organization",
      name: "TaxiNeo",
      logo: {
        "@type": "ImageObject",
        url: "https://taxineo.fr/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://taxineo.fr/blog/${slug}`,
    },
  };

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <Navbar />
      <ScrollAnimation />

      <main className="flex-grow pt-24 pb-12 md:pt-32 md:pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-neutral-500 hover:text-neutral-900 transition-colors mb-8"
          >
            <Icon icon="solar:arrow-left-linear" className="text-sm" />
            {t("backToList")}
          </Link>

          <div>
            <div className="flex items-center gap-3 text-xs text-neutral-400 font-light mb-4">
              <time dateTime={article.date}>
                {t("publishedOn")}{" "}
                {new Date(article.date).toLocaleDateString(locale, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span className="text-neutral-200">|</span>
              <span>{t("readingTime", { minutes: article.readingTime })}</span>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight mb-8 leading-tight">
              {article.title[lang]}
            </h1>

            <article className="prose-custom">
              {renderContent(content)}
            </article>
          </div>

          {/* Related articles */}
          {related.length > 0 && (
            <div className="mt-16 pt-12 border-t border-neutral-200">
              <h2 className="text-xl font-semibold tracking-tight mb-6">
                {t("relatedArticles")}
              </h2>
              <div className="grid gap-4">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/blog/${rel.slug}` as never}
                    className="group bg-white border border-neutral-200 rounded-xl p-5 hover:border-neutral-300 transition-colors"
                  >
                    <h3 className="text-sm font-medium tracking-tight group-hover:text-neutral-600 transition-colors">
                      {rel.title[lang]}
                    </h3>
                    <p className="text-xs text-neutral-400 font-light mt-1">
                      {rel.excerpt[lang]}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
