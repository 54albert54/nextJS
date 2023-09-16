import { TProducts } from "../app/models"
import Navbar from "../components/Navbar"
import { useEffect, useState } from "react"
const Url = "/api/avo/"
export default function App() {
  const [products , setProducts] = useState<TProducts[]>([])

  useEffect( ()=>{
    window.fetch(Url).then(data=>data.json()).then(data=>setProducts(data))
  

  },[])
  return (
    <>

    
    {
      products.map((item, id)=>(
        <div key={item.id}>{id} a ver {item.name}  </div>
      ))
    }


    
    </>
  )
}
