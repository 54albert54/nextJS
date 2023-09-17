import Link from "next/link";

type Props = {
  clase:string
}

const SideMenu = ({clase}:Props):JSX.Element => {

return(         
<>              
<section className={`menu ${clase}`}>
  <h2>Esto es una prueba</h2>
  <h4>solo para ver </h4>
  <p>termina esto ya!! para que hagas el despliege</p>
</section>               
</>)}           

export default SideMenu ;