import React from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import { ItemListContainer } from './ItemListContainer/ItemListContainer';


const App = () => {
    return (
        <div>
            <Navbar/>
            <ItemListContainer tituloBienvenida='E-commerce'/>
        </div>
    );
}

export default App;
