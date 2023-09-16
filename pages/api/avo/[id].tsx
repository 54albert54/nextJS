import DataB from "@/app/database/db";
import { NextApiRequest,NextApiResponse } from "next";
import { useRouter } from "next/router";



const ProductItem = (reques:NextApiRequest, response:NextApiResponse)=>{
  const { id } =reques.query
  
  if(typeof id === "string" ){
    const data = DataB.getById(id)
    response.end(JSON.stringify(data)) 
  }

}


export default ProductItem;


   