import { useRouter } from "next/router";
import data from "./data";
import { TProducts } from "../models";

// const DataBase = (id:string) => {
  
// return         

// }
// export default DataBase ;

class DataB{
  static getAll(){
    return data
  }
  static  getById(id:string){
    const onlyOne =  data.filter(item => item.id === id);
    return  onlyOne[0]
  }
  constructor(
    protected id:string
  ){

  }

}

export default DataB