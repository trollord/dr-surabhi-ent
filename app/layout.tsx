import type { Metadata } from "next";
import { Poppins, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { doctorSchema } from "@/lib/structured-data";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://drsurabhinikam.com"),
  title: {
    default: "Dr. Surabhi Nikam Mirajkar | ENT Specialist & Allergy Doctor in Mumbai",
    template: "%s | Dr. Surabhi Nikam Mirajkar - ENT Mumbai",
  },
  description:
    "Dr. Surabhi Nikam Mirajkar is a dedicated ENT specialist in Mumbai with qualifications in MBBS, MS (ENT), Allergy Specialist certification and Fellowship in Skull Base Surgery. Compassionate, ethical, evidence-based ENT care.",
  keywords: [
    "ENT specialist Mumbai",
    "ENT doctor Mumbai",
    "allergy specialist Mumbai",
    "skull base surgery Mumbai",
    "sinus specialist Mumbai",
    "ear nose throat doctor Mumbai",
    "Dr Surabhi Nikam Mirajkar",
    "ENT clinic Mumbai",
    "rhinitis treatment Mumbai",
    "FESS surgery Mumbai",
    "tonsillitis treatment Mumbai",
    "vertigo specialist Mumbai",
  ],
  authors: [{ name: "Dr. Surabhi Nikam Mirajkar" }],
  creator: "Dr. Surabhi Nikam Mirajkar",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://drsurabhinikam.com",
    siteName: "Dr. Surabhi Nikam Mirajkar - ENT Specialist",
    title: "Dr. Surabhi Nikam Mirajkar | ENT Specialist Mumbai",
    description:
      "Expert ENT & allergy care in Mumbai. MBBS, MS (ENT), Allergy Specialist, Fellowship in Skull Base Surgery. Ethical, patient-centered treatment with advanced minimally invasive techniques.",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Dr. Surabhi Nikam Mirajkar - ENT Specialist Mumbai" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Surabhi Nikam Mirajkar | ENT Specialist Mumbai",
    description: "Compassionate, ethical ENT & allergy care in Mumbai. Book a consultation today.",
    images: ["/images/og-image.jpg"],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${playfair.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(doctorSchema) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
