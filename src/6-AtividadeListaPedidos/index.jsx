// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaPedidos`
// dentro desse `<div>`.


import { useState } from "react";

export default function Home() {
  const [listaProdutos, setProdutos] = useState([
    { id: 1, nome: 'Pamanho', preco: 'R$ 18,00' },
    { id: 2, nome: 'Cachorro Quente', preco: 'R$ 30,00' },
    { id: 3, nome: 'Milho Verde', preco: 'R$ 65,00' }
  ]);

  const [listaPedidos, setListaPedidos] = useState([]);
  const adicionarItemPedidos = (objeto) => {
    setListaPedidos([...listaPedidos,objeto])
  }

  return (
    <div>
         <h1>Mercado</h1>

      {
        listaProdutos.map((produto)=>
     <div key={produto.id}>
     <p>{produto.nome}</p>
     <p>{produto.preco}</p>
     <button onClick={()=> adicionarItemPedidos(produto)}>Selecionar</button>
      </div>
)} 
              
    {
    listaPedidos.map((produto)=> 
   <div key={produto.id}>
   <p>{produto.nome}</p>
   <p>{produto.preco}</p>
   <button onClick={()=> removerPedido(produto.id)}>Remover</button>
          </div>
        )
    }
</div> 
)
}