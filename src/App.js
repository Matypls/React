import React from "react";
import './App.css';
import ListaNav from "./componentes/navBar/NavBar";
import ItemListContainer from "./componentes/tarjetas/ItemListContainer";
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import ItemDetailContainer from "./componentes/tarjetas/detallesItem/ItemDetailContainer";
import { CartContextProvider } from "./context/cartContext";

function App() {

  return (
    <CartContextProvider>
      <BrowserRouter>
        <body>
          <header>   
            <ListaNav text="Servicios" text1="Electrónica" text2="Gaming"/>          
          </header>
          <main>
            <Routes>
              <Route path="/" element={ <ItemListContainer />} />    
              <Route path="/category/:idCategory" element={ <ItemListContainer />} />    
              <Route path="/Item/:id" element={ <ItemDetailContainer/> }/> 
              <Route path="*" element= {<p>Esta página no existe</p>}/>    
            </Routes>           
          </main>
        </body>
        <footer> Proyecto de React Matias Rabano Caceres </footer>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
