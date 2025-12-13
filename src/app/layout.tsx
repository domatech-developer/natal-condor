import "@/scss/main.scss";
import { Metadata } from "next";
import { ModalProvider } from "@/provider/ModalProvider/ModalProvider";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import QueryProvider from "@/provider/QueryProvider/QueryProvider";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Natal Condor - Promoção de Natal",
  description: "",
  metadataBase: new URL("https://www.natal.condor.com.br"),
  openGraph: {
    title: "Natal Condor - Promoção com Prêmios",
    description: ".",
    url: "https://www.natal.condor.com.br",
    images: [{ url: "/icon.png", width: 582, height: 158, alt: "Natal Condor" }]
  },
  icons: { icon: { sizes: "582x158", url: "/icon.png", type: "image/png" } }
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const gtmId = process.env.NEXT_PUBLIC_GOOGLE_GTM || "GTM-WHQLMCSH";
  const gaId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || "";
  return (
    <html lang="pt-Br">
      <body>
        <QueryProvider>
          <ModalProvider>
            {children}

            <Footer />
          </ModalProvider>
        </QueryProvider>

        <GoogleTagManager gtmId={gtmId} />
        <GoogleAnalytics gaId={gaId} />
      </body>
    </html>
  );
}
