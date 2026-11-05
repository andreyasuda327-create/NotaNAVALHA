
import "./globals.css";
import Sidebar from "./components/Sidebar";

export const metadata = {
  title: "NotaNAVALHA — Arquivo de mídia",
  description:
    "Nosso espaço pessoal para avaliar filmes, séries, jogos e álbuns.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <div className="app-shell">
          <Sidebar />
          <main className="main-content">{children}</main>
        </div>
      </body>
    </html>
  );
}
