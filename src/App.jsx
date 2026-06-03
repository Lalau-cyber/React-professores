import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Cardapio from './pages/Cardapio'
import Contato from './pages/Contato'
import Api from './services/Api.jsx'
import {FavoritosProvider}  from './context/FavoritosContext.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
      <FavoritosProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/cardapio" element={<Cardapio />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/favoritos" element={<FavoritosProvider />} />
          </Routes>
        </BrowserRouter>
      </FavoritosProvider>
  )
}

export default App
