import { TProducts } from "@/app/models";
import Link from "next/link";

interface Props {
  item: TProducts

}

const Cards = ({item}:Props ):JSX.Element => {
  const id = item

return(      
  
<div className="Card">  
  
        
     <h2 className="Card-title" >{item.name}</h2>  
     <Link className="nav-link" href={`/Products/${item.id}`}>
     <img className="Card-img" src={item.image} alt={item.name} />
     </Link>
     <p className="Card-price">$ {item.price}</p>
          
</div>
   )}           

export default Cards ;