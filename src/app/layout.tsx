import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BE THE GOAT — Sua carreira. Sua história.",
  description:
    "Construa sua carreira no futebol, da base ao topo. Cada escolha faz parte da sua história.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
