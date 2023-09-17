import DataB from "@/app/database/db";
import { TProducts } from "@/app/models";
import Cards from "@/components/Card";
import { addHookAliases } from "next/dist/server/require-hook";
import { useRouter } from "next/router";
import { useState } from "react";

const example = DataB.getById('2zd33b8c')
let item:TProducts
const ProductItem = ():JSX.Element =>{
  const [asa, setAsa] = useState(null)
 
  const {query:{id}} = useRouter()
  
    if (typeof id === "string"){
      item = DataB.getById(id)
      
      console.log('data',item)
     
    }
  return (
    <>
    <section className="show">
      
      <div className="show-info">
        <h3 className="Card-title" >{item.name}</h3>
        <p className="show-text"> {item.sku}</p>
      </div>
    <img className="show-img" src={item.image} alt={item.name} />
    <h2 className="show-title">{item.attributes.taste}</h2>
    <p className="show-text" >{item.attributes.description}</p>
    <div className="show-foother">
    <p className="show-price" >$ {item.price}</p>
    <button className="boton">Comprar</button>
    </div>



    </section>
    
    </>
  )
}


export default ProductItem;


   