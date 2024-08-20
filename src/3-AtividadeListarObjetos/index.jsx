// Crie um elemento `<div>`.
// Utilize o método `map` para listar cada objeto da `listaProdutos`
// dentro desse `<div>`.
import { useState } from "react";

export default function Home() {
  const [listaProdutos, setProdutos] = useState([
    { id: 1, nome: 'Pamonha', preco: 'R$ 18,00' },
    { id: 2, nome: 'Cachorro Quente', preco: 'R$ 23,00' },
    { id: 3, nome: 'Milho Verde', preco: 'R$ 65,00' }
  ]);

  return (
    <div>
        <h1>Mercado</h1>

     {
      listaProdutos.map((produto)=>
        <div key={produto.id}>
        <p>{produto.nome}</p>
        <p>{produto.preco}</p>
        </div> 
 )} 
   </div>         
)}