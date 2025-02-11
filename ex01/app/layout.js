// app/layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <html lang="pt-BR">
      <head>
        <title>Meu App de Artistas</title>
        {/* Aqui você pode adicionar mais tags como meta, links para fontes, etc. */}
      </head>
      <body>
        <header>
          <h1>Meu App de Artistas</h1>
          <nav>
            <a href="/">Home</a> | <a href="/artistas">Artistas</a>
          </nav>
        </header>
        
        <main>
          {children}  {/* O conteúdo específico de cada página será renderizado aqui */}
        </main>
        
        <footer>
          <p>&copy; 2024 Todos os direitos reservados.</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;

