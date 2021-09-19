
import React from 'react';
import Intro from '../Intro';
import me from '../../../assets/me.jpeg';


const mystyle = {
        backgroundImage: `url(${me})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
    
    
  }

function introMain() {
    return (
        <div style={mystyle}>
           <div class="container-fluid">
               <div class="row">
                   <div class="col-6"></div>
                   <div class="col-6">
               <Intro/>
               </div>
               </div>
           </div>
           
        </div>
    )
}

export default introMain
