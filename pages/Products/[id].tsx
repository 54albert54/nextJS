import { addHookAliases } from "next/dist/server/require-hook";
import { useRouter } from "next/router";



const ProductItem = ():JSX.Element =>{
  const {query:{id}} = useRouter()
  return (
    <>
    <h2>esto es solo una prueba {id}</h2>
    </>
  )
}


export default ProductItem;


   