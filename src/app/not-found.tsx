import "./not-found.scss";
import { Metadata } from "next";
import { getGeneral } from "@/config/api";

export const metadata: Metadata = {
  title: "Página não encontrada - Thermoplast",
  description: "A página que você está procurando não foi encontrada. Verifique o URL ou volte para a página inicial."
};

export default async function NotFound() {
  const general = await getGeneral();

  if (!general) return null;

  return (
    <main id="not-found">
      <></>
    </main>
  );
}
