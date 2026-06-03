import {Link} from 'react-router-dom'
import api from '../services/Api'
import CardPrato from '../components/CardPrato'
import { useEffect, useState } from 'react'

function Cardapio() {
    const [pratos, setPratos] = useState([])

    useEffect(() => {
        fetch(' https://jhonatanwll.github.io/aula_api_restaurante/pratos.json ')
        .then(resposta => resposta.json())
        .then(dados => {

            setPratos(dados)
        })
        .catch(erro => console.error('Erro ao buscar o cardapio:', erro));
    }, []);
  return (
    <div className='cardapio-container'>
        <h2>Cardapio</h2>

        <div className='lista-pratos'>
            {pratos.map((prato) => (
          <div key={prato.id} className="card-prato">
            <img src={prato.imagem} alt={prato.nome} />
            <h3>{prato.nome}</h3>
            <p>{prato.descricao}</p>
            <span>R$ {prato.preco}</span>
        </div>
            ))}
        </div>
         <Link to="/">Voltar ao inicio</Link>
    </div>
   
  )
}

export default Cardapio