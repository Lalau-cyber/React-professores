import { Link } from 'react-router-dom'
import React from 'react'
import Cardapio from './Cardapio'

function Inicio() {
  return (
    <div>
        <h1>Seja Bem-Vindo!</h1>
        <p>A cantina Bella Massa</p>
        <Link to="/Cardapio">Ver Cardápio</Link>
    </div>
  )
}

export default Inicio