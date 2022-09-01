import React from "react";
import ItemProd from "../ItemProd/ItemProd";
const ProdList = ({ list }) => {
    return (
    <ul>
        {list.map((prod) => (
        <ItemProd prod={prod} key={prod.name} />
        ))}
    </ul>
    );

};

export default ProdList;