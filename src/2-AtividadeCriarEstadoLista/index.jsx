// Crie um estado chamado `listaProdutos` para armazenar uma lista de objetos.
// Inicialize o estado com, no mínimo, 3 objetos, cada um contendo 3 propriedades, incluindo um `id` único.
// Lembre-se de importar o `useState` do módulo `react` para utilizar o estado.

import { useState } from "react";

export default function Home() {
  const [listaProdutos, setProdutos] = useState([
    { id: 1, nome: 'Produto 1', preco: 'R$ 50,00' },
    { id: 2, nome: 'Produto 2', preco: 'R$ 70,00' },
    { id: 3, nome: 'Produto 3', preco: 'R$ 90,00' }
  ]);

  return (
    <div>
         <h1>Livros de Programação</h1>
    </div>
   
  );
}