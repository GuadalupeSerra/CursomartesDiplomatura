import React from 'react';
import '../styles/pages/homePage.css';
import tortas from '../img/tortas.jpeg';
import combos from '../img/combos.jpeg';

const HomePage = (props) => {
    return (
        <main>

        <div className="box4">
            <div className="card1">
                <h2>Tortas</h2>
                <img src= {tortas} width="300" alt="Tortas"/>
              </div>
            <div className="card1">
                <h2>La Hora del Té</h2>
                <img src={combos} width="300" alt="Pastelería miniatura"/>
              </div>
         </div>
    </main>
        );
}

export default HomePage;