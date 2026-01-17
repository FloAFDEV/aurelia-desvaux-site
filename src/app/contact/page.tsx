import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Aurélia Desvaux - Thérapeute à Valbonne",
  description:
    "Contactez Aurélia Desvaux pour prendre rendez-vous. Cabinet à Valbonne Sophia-Antipolis. Téléphone, email et adresse disponibles.",
  keywords: [
    "contact thérapeute valbonne",
    "rendez-vous hypnose",
    "cabinet valbonne",
    "Aurélia Desvaux contact",
  ],
  alternates: {
    canonical: "https://aurelia-desvaux.fr/contact",
  },
  openGraph: {
    title: "Contact | Aurélia Desvaux",
    description:
      "Contactez Aurélia Desvaux pour prendre rendez-vous. Cabinet à Valbonne Sophia-Antipolis.",
    url: "https://aurelia-desvaux.fr/contact",
    siteName: "Aurélia Desvaux - Thérapies Brèves",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "https://aurelia-desvaux.fr/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Aurélia Desvaux - Contact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Aurélia Desvaux",
    description: "Contactez Aurélia Desvaux pour prendre rendez-vous à Valbonne Sophia-Antipolis.",
    images: ["https://aurelia-desvaux.fr/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Import du content
export { default } from "./content";
