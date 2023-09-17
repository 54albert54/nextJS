import Navbar from "@/components/Navbar"
import { TProducts } from "../app/models"
import { useEffect, useState } from "react"
import Cards from "@/components/Card"
import imge from "../images/avocados.jpg"
const Url = "/api/avo/"
const img = '../aper'
export default function App() {
  const [products , setProducts] = useState<TProducts[]>([])

  useEffect( ()=>{
    window.fetch(Url).then(data=>data.json()).then(data=>setProducts(data))
  

  },[])
  return (
    <>

<div className='container'>


    {
      products.map((item, id)=>(
        <Cards key={item.id} item={item}/> 
        
      ))
    }
</div>

    
    </>
  )
}
