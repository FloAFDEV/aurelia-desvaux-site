import { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "EFT Emotional Freedom Techniques à Valbonne | Aurélia Desvaux",
  description:
    "Séances d'EFT à Valbonne Sophia-Antipolis. Libérez vos émotions bloquées, stress, anxiété, traumatismes. Praticienne EFT certifiée, accompagnement bienveillant.",
  keywords: [
    "EFT",
    "emotional freedom techniques",
    "libération émotionnelle",
    "Valbonne",
    "Sophia-Antipolis",
    "stress",
    "anxiété",
    "traumatismes",
    "burn-out",
    "confiance en soi",
    "arrêt du tabac",
    "perte de poids",
    "phobies",
  ],
  alternates: {
    canonical: "https://aurelia-desvaux.fr/eft",
  },
  openGraph: {
    title: "EFT Emotional Freedom Techniques à Valbonne | Aurélia Desvaux",
    description:
      "Séances d'EFT à Valbonne Sophia-Antipolis. Libérez vos émotions bloquées, stress, anxiété. Praticienne EFT certifiée.",
    type: "website",
    url: "https://aurelia-desvaux.fr/eft",
    locale: "fr_FR",
    siteName: "Aurélia Desvaux - Thérapies Brèves",
    images: [
      {
        url: "https://aurelia-desvaux.fr/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Aurélia Desvaux - EFT à Valbonne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EFT à Valbonne | Aurélia Desvaux",
    description: "Séances d'EFT. Libérez vos émotions et retrouvez l'équilibre à Valbonne Sophia-Antipolis.",
    images: ["https://aurelia-desvaux.fr/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "EFT - Emotional Freedom Techniques à Valbonne",
  description:
    "Séances d'EFT pour libération émotionnelle, stress, anxiété, traumatismes. Accompagnement personnalisé à Valbonne Sophia-Antipolis.",
  provider: {
    "@type": "Person",
    name: "Aurélia Desvaux",
    jobTitle: "Praticienne EFT",
  },
  areaServed: "Valbonne, Sophia-Antipolis, Antibes, Mougins",
  offers: {
    "@type": "Offer",
    description: "Séances d'EFT individuelles",
  },
};

export default function EFTPage() {
  return (
    <>
      <Script
        id="eft-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <Content />
    </>
  );
}

// Import du content
import Content from "./content";
