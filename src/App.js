import { useEffect, useState } from 'react';
import './App.css'; 
import Prato from './componentes/Prato';

function App() { 

  const [pratos, setPratos] = useState([])
  
  useEffect(() => {
    fetch('http://177.66.116.68:8001/api/pratos')
      .then(resposta => resposta.json())
      .then(dados => {
        setPratos(dados)
        console.log(dados) 
      }) 
  }, [])  
  
  return (
    <div className="App">
      <div className='banner-container'> 
        <img src="/imagens/banner.png" alt="Logo banner"/> 
      </div>
      <div className='logo-container'>
        <img src="/imagens/logo.png" alt="Logo Pizza"/> 
      </div>
      <section className='cardapio'> 
        {pratos.map(prato => 
        (<Prato 
          key={prato.id} 
          nome={prato.nome}  
          descricao={prato.descricao} 
          imagem={prato.imagem}
          preco={prato.preco} 
          />))} 
      </section> 
    </div>
  ); 
} 
 
export default App;
