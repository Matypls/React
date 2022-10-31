import React from "react";
import './App.css';
import ListaNav from "./componentes/navBar/NavBar";
import ItemListContainer from "./componentes/tarjetas/ItemListContainer";

function App() {

  return (
    <body className="App">
      <header className="App-header">
        <a>
          <h1 className="Titulo">Tienda</h1>      
        </a>     
          <ListaNav text="Servicios" text1="Electrónica" text2="Gaming"/>        
      </header>
      <main>
        <ItemListContainer greeting="Steelseries 350" imagen='https://http2.mlstatic.com/D_NQ_NP_759949-MLA51150188892_082022-V.webp'/>
      </main>
    </body>
  );
}

export default App;
