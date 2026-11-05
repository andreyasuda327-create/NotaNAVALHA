
"use client";

import { useState } from "react";

const movies = [
  { id: 1, title: "Filme de exemplo", year: 2025 },
];

export default function Home() {
  const [selectedMovie, setSelectedMovie] = useState(0);
  const [votes, setVotes] = useState({});

  const movie = movies[selectedMovie];

  function vote(column, row) {
    setVotes((previous) => ({
      ...previous,
      [movie.id]: {
        ...previous[movie.id],
        [column + "-" + row]: true,
      },
    }));
  }

  return (
    <main className="min-h-screen bg-[#151515] text-[#e9e5dc] px-6 py-10">
      <header className="max-w-6xl mx-auto flex justify-between items-center border-b border-[#34322e] pb-6">
        <div>
          <h1 className="text-2xl tracking-[0.25em] font-light">
            NOTANAVALHA
          </h1>
          <p className="text-xs text-[#89857c] mt-2 tracking-widest">
            CINEMA • OPINIÕES • MEMÓRIAS
          </p>
        </div>
        <span className="text-sm text-[#b49a64]">CINEMATECA</span>
      </header>

      <section className="max-w-6xl mx-auto mt-12">
        <p className="text-xs tracking-[0.3em] text-[#b49a64] mb-3">
          NOSSA COLEÇÃO
        </p>
        <h2 className="text-4xl font-light mb-3">
          O que achamos dos filmes?
        </h2>
        <p className="text-[#99958c] mb-10">
          Um espaço para registrar, comparar e descobrir opiniões sobre cinema.
        </p>

        <div className="bg-[#1d1d1b] border border-[#38362f] rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-xs text-[#b49a64] tracking-widest">
                FILME EM DESTAQUE
              </p>
              <h3 className="text-2xl mt-2">{movie.title}</h3>
              <p className="text-sm text-[#89857c]">{movie.year}</p>
            </div>
            <div className="w-20 h-28 bg-[#292722] border border-[#494337] rounded flex items-center justify-center text-[#b49a64] text-xs">
              PÔSTER
            </div>
          </div>

          <div className="flex justify-between text-xs text-[#aaa69c] mb-3">
            <span>RUIM</span>
            <span>BOM</span>
          </div>

          <div className="grid grid-cols-10 gap-1">
            {Array.from({ length: 100 }, (_, index) => {
              const column = (index % 10) + 1;
              const row = Math.floor(index / 10) + 1;

              return (
                <button
                  key={index}
                  onClick={() => vote(column, row)}
                  className="aspect-square border border-[#454239] bg-[#252522] hover:bg-[#a68b55] hover:border-[#a68b55] transition-colors rounded-sm"
                  title={`Coluna ${column}, linha ${row}`}
                />
              );
            })}
          </div>

          <div className="flex justify-between text-xs text-[#89857c] mt-3">
            <span>DESINTERESSANTE</span>
            <span>INTERESSANTE</span>
          </div>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto mt-16 border-t border-[#34322e] pt-5 text-xs text-[#77736b]">
        NOTANAVALHA — NOSSO ARQUIVO DE CINEMA
      </footer>
    </main>
  );
}
