import React from 'react';


import '../../styles/layout/Header.css';
import petit from '../../img/PetitGallec.png';



const Header = (prop) => {
    return (
      

     <header>
        <section>
            <div className= "line1">1</div>
            <div className= "line2">2</div>
            <div className= "line3">3</div>
        </section>     

        <div className= "holder">
            <div className= "logo"> <img src= {petit} alt= "Petit Gallec" /> </div>
        </div>
     </header>
    );
       
}

export default Header;