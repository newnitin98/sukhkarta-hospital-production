import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/ui/Breadcrumb";
import SchemaScript from "@/components/ui/SchemaScript";
import { GALLERY_ITEMS, GALLERY_NOTICE } from "@/data/gallery";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE_URL } from "@/data/seo";

export const metadata: Metadata = {
  title: "Gallery | Sukhkarta Hospital Saoner",
  description:
    "Gallery of representative hospital facilities for Sukhkarta Hospital, including operation theatre, ICU, consultation spaces, and patient care areas.",
  alternates: { canonical: `${SITE_URL}/gallery` },
};

export default function GalleryPage() {
  return (
    <>
      <SchemaScript
        schema={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Gallery", url: `${SITE_URL}/gallery` },
        ])}
      />

      <section className="bg-gradient-to-br from-brand-blue-900 to-brand-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Gallery" }]} className="text-blue-300 mb-5" />
          <h1 className="text-4xl font-bold font-display mb-3">Hospital Gallery</h1>
          <p className="text-blue-200">
            A look at our facilities, infrastructure, and care environment.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 font-display mb-6">
            Gallery Preview
          </h2>
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5 text-sm text-blue-900 mb-8">
            <strong>Phase 1 note:</strong> {GALLERY_NOTICE}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {GALLERY_ITEMS.map((item) => (
              <div
                key={item.title}
                className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-card"
              >
                <div className="relative aspect-video">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1280px) 22vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue-600">
                      {item.category}
                    </span>
                    <span className="text-[11px] font-medium text-gray-400">
                      Representative visual
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-gray-900">
                    {item.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
