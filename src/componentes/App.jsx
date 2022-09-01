import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';
import ItemListContainerProd from './ItemListContainesProd/ItemListContainerProd';


const App = () => {
    return (
        <div>
            <Navbar/>
            <ItemListContainer tituloBienvenida='E-commerce'/>
            <ItemListContainerProd/>
        </div>
    );
}

export default App;
