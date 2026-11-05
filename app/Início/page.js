
"use client";

import { useParams } from "next/navigation";

const categories = {
  filmes: {
    title: "Filmes",
    description: "Uma coleção de histórias para assistir e recordar.",
  },
  series: {
    title: "Séries",
    description: "Histórias que continuam episódio após episódio.",
  },
  jogos: {
    title: "Jogos",
    description: "Experiências, mundos e aventuras.",
  },
  albuns: {
    title: "Álbuns",
    description: "Músicas, artistas e descobertas.",
  },
};

export default function CategoryPage() {
  const params = useParams();
  const category = categories[params.categoria];

  if (!category) {
    return <div className="site">Categoria não encontrada.</div>;
  }

  return (
    <div className="site">
      <section className="content">
        <p className="eyebrow">NOSSO ARQUIVO</p>
        <h1 className="headline">{category.title}</h1>
        <p className="description">{category.description}</p>

        <div className="movie-card">
          <p className="description">
            Nossa coleção de {category.title.toLowerCase()} aparecerá aqui.
          </p>
        </div>
      </section>
    </div>
  );
}
