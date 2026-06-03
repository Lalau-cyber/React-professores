
// src/components/Navbar.jsx
import React from 'react';
import { useFavoritos } from '../context/FavoritosContext';

export default function Navbar() {
  // Consumimos apenas a lista de favoritos do contexto
  const { favoritos } = useFavoritos();

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 30px', backgroundColor: '#2c3e50', color: '#fff' }}>
      <h2>🍽️ App de Receitas</h2>
      <div style={{ fontWeight: 'bold' }}>
        ❤️ Favoritos: <span style={{ backgroundColor: '#e74c3c', padding: '2px 8px', borderRadius: '10px' }}>{favoritos.length}</span>
      </div>
    </nav>
  );
}