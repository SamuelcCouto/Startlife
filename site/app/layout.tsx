import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Sans } from "next/font/google";
import "./globals.css";

const display = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  display: "swap",
});

const body = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://startlife-vera-cruz.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Start Life Vera Cruz — Academia em Goiânia",
  description:
    "Academia Start Life Vera Cruz, em Goiânia. Equipamento novo, muito cardio e equipe que acompanha. Planos a partir de R$ 109,90/mês. Fale no WhatsApp.",
  keywords: [
    "academia Goiânia",
    "academia Vera Cruz",
    "Start Life",
    "musculação Goiânia",
    "academia perto de mim",
  ],
  openGraph: {
    title: "Start Life Vera Cruz — Academia em Goiânia",
    description:
      "Treino sério, preço de bairro. Planos a partir de R$ 109,90/mês. 4,5★ no Google.",
    locale: "pt_BR",
    type: "website",
    url: SITE_URL,
    siteName: "Start Life Academia",
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <body>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('anim')}catch(e){}",
          }}
        />
        {children}
      </body>
    </html>
  );
}
