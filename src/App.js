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
        <ItemListContainer />
      </main>
    </body>
  );
}

export default App;
