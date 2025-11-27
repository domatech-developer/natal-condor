import "@/scss/main.scss";
import { Metadata } from "next";
import QueryProvider from "@/provider/QueryProvider/QueryProvider";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Natal Condor - Promoção de Natal",
  description: "",
  metadataBase: new URL("https://www.condor.com.br/"),
  openGraph: {
    title: "Natal Condor - Promoção com Prêmios",
    description: ".",
    url: "https://www.condor.com.br/",
    images: [{ url: "/icon.png", width: 582, height: 158, alt: "Natal Condor" }]
  },
  icons: { icon: { sizes: "582x158", url: "/icon.png", type: "image/png" } }
};


export default async function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="pt-Br">
      <body>
        <QueryProvider>
            {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}