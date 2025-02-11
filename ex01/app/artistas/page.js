// app/artistas/page.js
import React from 'react';

const Artistas = () => {
  const artistas = [
    { nome: "Ludmilla", genero: "Pagode" },
    { nome: "Baiana System", genero: "Rock" },
    { nome: "Liniker", genero: "Pop" },
    // Adicione outros artistas aqui...
  ];

  return (
    <div>
      <h2>Meus Artistas Mais Ouvidos de 2024</h2>
      <ul>
        {artistas.map((artista, index) => (
          <li key={index}>
            <strong>{artista.nome}</strong> - {artista.genero}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Artistas;
