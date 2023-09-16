
import DataB from "@/app/database/db";
import { useRouter } from "next/router";

import { IncomingMessage, ServerResponse } from "http";
import { NextApiRequest } from "next";
import { TProducts } from "@/app/models";


const Avo = async (request:NextApiRequest, response:ServerResponse) => {
 

    const data = DataB.getAll()
    response.end(JSON.stringify(data))      

  

  
}           

export default Avo ;