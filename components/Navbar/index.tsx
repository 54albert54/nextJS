import Link from "next/link";

const Navbar = ():JSX.Element => {

return(         
<> 
  <nav className="nav">  
  <figure>
  <Link className="" href="/"> 
  <img className="nav-img" src="https://i.pinimg.com/564x/9d/d8/66/9dd866f92d91cb83294955c27104566c.jpg" alt="" />
  </Link>
   
   
  </figure> 
 <h2>AGUACATELANDA</h2>
 <Link className="" href="/Menu"><div>MENU</div></Link>
  </nav>   
             
</>)}           

export default Navbar ;

//   