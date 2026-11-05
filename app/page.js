
"use client";

import { useState } from "react";

const movies = [
  { id: 1, title: "Filme de exemplo", year: 2025 },
];

export default function Home() {
  const [votes, setVotes] = useState({});

  const movie = movies[0];

  function vote(column, row) {
    setVotes((previous) => ({
      ...previous,
      [movie.id]: {
        ...previous[movie.id],
        position: { column, row },
      },
    }));
  }

  const currentVote = votes[movie.id]?.position;

  return (
    <main className="site">
      <header className="header">
        <div>
          <h1 className="logo">NOTANAVALHA</h1>
          <p className="tagline">CINEMA • OPINIÕES • MEMÓRIAS</p>
        </div>
        <span className="category">CINEMATECA</span>
      </header>

      <section className="content">
        <p className="eyebrow">NOSSA COLEÇÃO</p>
        <h2 className="headline">O que achamos dos filmes?</h2>
        <p className="description">
          Um espaço para registrar, comparar e descobrir opiniões sobre cinema.
        </p>

        <article className="movie-card">
          <div className="movie-info">
            <div>
              <p className="eyebrow">FILME EM DESTAQUE</p>
              <h3>{movie.title}</h3>
              <p className="year">{movie.year}</p>
            </div>
            <div className="poster">PÔSTER</div>
          </div>

          <div className="axis-labels">
            <span>RUIM</span>
            <span>BOM</span>
          </div>

          <div className="rating-grid">
            {Array.from({ length: 100 }, (_, index) => {
              const column = (index % 10) + 1;
              const row = Math.floor(index / 10) + 1;
              const selected =
                currentVote?.column === column &&
                currentVote?.row === row;

              return (
                <button
                  key={index}
                  className={`grid-cell ${selected ? "selected" : ""}`}
                  onClick={() => vote(column, row)}
                  title={`Coluna ${column}, linha ${row}`}
                  aria-label={`Avaliar na coluna ${column}, linha ${row}`}
                >
                  {selected ? "●" : ""}
                </button>
              );
            })}
          </div>

          <div className="axis-labels bottom-labels">
            <span>DESINTERESSANTE</span>
            <span>INTERESSANTE</span>
          </div>

          {currentVote && (
            <p className="vote-feedback">
              Posição selecionada: coluna {currentVote.column}, linha {currentVote.row}
            </p>
          )}
        </article>
      </section>

      <footer className="footer">
        NOTANAVALHA — NOSSO ARQUIVO DE CINEMA
      </footer>
    </main>
  );
}
