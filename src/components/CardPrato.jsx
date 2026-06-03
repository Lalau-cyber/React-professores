import { useFavoritos } from "../context/FavoritosContext"

export default function CardPrato({ prato }) {
    const { favoritos, adicionarFavorito, removerFavorito } = useFavoritos()

    const isFavorito = favoritos.some(item => item.id === prato.id)

    function alternarFavorito() {
        if (isFavorito) {
            removerFavorito(prato.id)
        } else {
            adicionarFavorito(prato)
        }
    }

    return (
        <div>
            <button onClick={alternarFavorito} className="btn-favoritar" type="button">
                {isFavorito ? '❤️' : '🤍'}
            </button>
        </div>
    )
}
