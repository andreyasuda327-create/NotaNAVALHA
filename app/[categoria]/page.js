
"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

const categories = {
  filmes: {
    title: "Filmes",
    description: "Uma coleção de histórias para assistir e recordar.",
    button: "Adicionar filme",
  },
  series: {
    title: "Séries",
    description: "Histórias que continuam episódio após episódio.",
    button: "Adicionar série",
  },
  jogos: {
    title: "Jogos",
    description: "Experiências, mundos e aventuras.",
    button: "Adicionar jogo",
  },
  albuns: {
    title: "Álbuns",
    description: "Músicas, artistas e descobertas.",
    button: "Adicionar álbum",
  },
};

export default function CategoryPage() {
  const params = useParams();
  const category = categories[params.categoria];
  const [items, setItems] = useState([]);

  if (!category) {
    return <div className="site">Categoria não encontrada.</div>;
  }

  function addItem() {
    const title = prompt("Qual é o título da obra?");
    if (!title) return;

    const year = prompt("Qual é o ano?");
    
    setItems((previous) => [
      ...previous,
      {
        id: Date.now(),
        title,
        year: year || "Ano não informado",
      },
    ]);
  }

  return (
    <div className="site">
      <section className="content">
        <p className="eyebrow">NOSSO ARQUIVO</p>

        <div className="library-heading">
          <div>
            <h1 className="headline">{category.title}</h1>
            <p className="description">
              {category.description}
            </p>
          </div>

          <button className="add-button" onClick={addItem}>
            + {category.button}
          </button>
        </div>

        <div className="library-grid">
          {items.length === 0 ? (
            <div className="empty-library">
              <span>✳</span>
              <p>Nenhuma obra adicionada ainda.</p>
              <small>Comece montando nossa coleção.</small>
            </div>
          ) : (
            items.map((item) => (
              <article className="library-card" key={item.id}>
                <div className="library-poster">CAPA</div>
                <h3>{item.title}</h3>
                <p>{item.year}</p>
              </article>
            ))
          )}
        </div>
      </section>
    </div>
  );
}
