import React from "react";
import NavBarChild from "./NavBarChild";


const Items =[
    {
        title:"home",
        url:"#",      // drop:["x","y","z"]

  
    },
    {
        title:"Movies",
        url:" #"
 
    },
    {
        title:"Series",
        url:" #"//,
       //drop:["x","y","z"]
    }
]
const noun="flen";

const NavBarParent =()=>{

    return (
        <nav className="NavBarParent">
            <NavBarChild  Array={Items} name="CINé" />
             
        </nav>
    )

}

export default NavBarParent