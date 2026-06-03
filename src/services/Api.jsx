

function Api() {
    const pratos =
        [
  {
    "id": 1,
    "nome": "Bruschetta al Pomodoro",
    "descricao": "Pão italiano tostado com tomate, manjericão e azeite extravirgem.",
    "preco": 26,
    "categoria": "Entradas",
    "imagem": "https://placehold.co/600x400/c95820/ffffff?text=Bruschetta",
    "disponivel": true
  },
  {
    "id": 2,
    "nome": "Carpaccio di Manzo",
    "descricao": "Finas fatias de carne crua, rúcula, lascas de parmesão e limão siciliano.",
    "preco": 38,
    "categoria": "Entradas",
    "imagem": "https://placehold.co/600x400/c95820/ffffff?text=Carpaccio",
    "disponivel": true
  },
  {
    "id": 3,
    "nome": "Spaghetti alla Carbonara",
    "descricao": "Massa fresca, ovos, guanciale e pecorino romano.",
    "preco": 49.9,
    "categoria": "Massas",
    "imagem": "https://placehold.co/600x400/c95820/ffffff?text=Carbonara",
    "disponivel": true
  },
  {
    "id": 4,
    "nome": "Tagliatelle al Ragù",
    "descricao": "Tagliatelle ao tradicional ragù bolonhês de cozimento lento.",
    "preco": 52,
    "categoria": "Massas",
    "imagem": "https://placehold.co/600x400/c95820/ffffff?text=Tagliatelle",
    "disponivel": true
  },
  {
    "id": 5,
    "nome": "Lasagna della Nonna",
    "descricao": "Camadas de massa, ragù, molho bechamel e muito queijo.",
    "preco": 55,
    "categoria": "Massas",
    "imagem": "https://placehold.co/600x400/c95820/ffffff?text=Lasagna",
    "disponivel": false
  },
  {
    "id": 6,
    "nome": "Gnocchi ao Pesto",
    "descricao": "Nhoque de batata ao pesto genovês de manjericão e pinoli.",
    "preco": 47.5,
    "categoria": "Massas",
    "imagem": "https://placehold.co/600x400/c95820/ffffff?text=Gnocchi",
    "disponivel": true
  },
  {
    "id": 7,
    "nome": "Pizza Margherita",
    "descricao": "Molho de tomate San Marzano, muçarela de búfala e manjericão fresco.",
    "preco": 45,
    "categoria": "Pizzas",
    "imagem": "https://placehold.co/600x400/c95820/ffffff?text=Margherita",
    "disponivel": true
  },
  {
    "id": 8,
    "nome": "Pizza Quattro Formaggi",
    "descricao": "Muçarela, gorgonzola, parmesão e provolone.",
    "preco": 58,
    "categoria": "Pizzas",
    "imagem": "https://placehold.co/600x400/c95820/ffffff?text=Quattro+Formaggi",
    "disponivel": true
  },
  {
    "id": 9,
    "nome": "Tiramisù",
    "descricao": "Clássico italiano com café, mascarpone e cacau.",
    "preco": 28,
    "categoria": "Sobremesas",
    "imagem": "https://placehold.co/600x400/c95820/ffffff?text=Tiramisu",
    "disponivel": true
  },
  {
    "id": 10,
    "nome": "Panna Cotta",
    "descricao": "Creme de baunilha com calda de frutas vermelhas.",
    "preco": 24,
    "categoria": "Sobremesas",
    "imagem": "https://placehold.co/600x400/c95820/ffffff?text=Panna+Cotta",
    "disponivel": true
  },
  {
    "id": 11,
    "nome": "Vinho Chianti (taça)",
    "descricao": "Taça de Chianti DOCG da Toscana.",
    "preco": 32,
    "categoria": "Bebidas",
    "imagem": "https://placehold.co/600x400/c95820/ffffff?text=Chianti",
    "disponivel": true
  },
  {
    "id": 12,
    "nome": "Limonata Siciliana",
    "descricao": "Limonada artesanal com limão siciliano e hortelã.",
    "preco": 14,
    "categoria": "Bebidas",
    "imagem": "https://placehold.co/600x400/c95820/ffffff?text=Limonata",
    "disponivel": true
  },
]
const categorias = [
    
  {
    "id": 1,
    "nome": "Entradas"
  },
  {
    "id": 2,
    "nome": "Massas"
  },
  {
    "id": 3,
    "nome": "Pizzas"
  },
  {
    "id": 4,
    "nome": "Sobremesas"
  },
  {
    "id": 5,
    "nome": "Bebidas"
  },
];
    return(
        <div>
            <h1 className="pratos">Pratos</h1>
            {pratos.map(prato => (
                <div key={prato.id}>
                    <h2>{prato.nome}</h2>
                    <p>{prato.descricao}</p>
                    <p>Preço: R$ {prato.preco.toFixed(2)}</p>
                </div>
            ))}
        </div>
    )
}
export default Api