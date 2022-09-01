import React, {useEffect, useState} from "react";
import ProdList from "../ItemListProd/ItemListProd";


const ProdContainer = () => {
    const [prod, setProd] = useState ([]);

    useEffect(() => {


         const getprod = async () => {
            const misDatos = await fetch('https://pokeapi.co/api/v2/pokemon?limit=6&offset=0');

            const response = await misDatos.json()
            setProd(response.results);

         };

         getprod();

    }, []);


    return <ProdList list={prod}/>

};

export default ProdContainer;