import React from 'react'
import { createContext, useContext, useState } from 'react'

const FavoritosContext = createContext()

export function FavoritosProvider({ children }) {
    const [favoritos, setFavoritos] = useState([])

    function adicionarFavorito(prato) {
        setFavoritos([...favoritos, prato])
    }
    function removerFavorito(pratoId) {
        setFavoritos(favoritos.filter(prato => prato.id !== pratoId))
    }
    return (
        <FavoritosContext.Provider value={{ favoritos, adicionarFavorito, removerFavorito }}>
            {children}
        </FavoritosContext.Provider>
    )
}

export function useFavoritos() {
    return useContext(FavoritosContext)
}

