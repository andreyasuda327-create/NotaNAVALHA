
import "./globals.css";

export const metadata = {
  title: "NotaNAVALHA — Cinemateca",
  description: "Nosso espaço pessoal para avaliar e descobrir filmes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
