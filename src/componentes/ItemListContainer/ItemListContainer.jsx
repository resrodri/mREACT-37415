import React from "react"
import ItemCount from "../ItemCount/ItemCount"
export const ItemListContainer = ({tituloBienvenida}) => {
    function onAdd(count){
      console.log(`Usted selecciono ${count} productos`)

    }
  
    return (
    
    <div>
      <h1>{tituloBienvenida}</h1>
      <ItemCount stock={10} onAdd={onAdd}/>
    </div>
  )
}

