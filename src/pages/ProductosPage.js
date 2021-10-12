import React from 'react';
import '../styles/pages/productosPage.css';
import tortas from '../img/tortas.jpeg';
import combos from '../img/combos.jpeg';

const NovedadesPage = (props) => {
    return (
        <main>
        <div className="box3">
        <div className="card">
            <h2>Tortas</h2>
                <img src={tortas} width="300" alt="Tortas"/>
          </div>
          <div className="card">
            <h2>La Hora del Té</h2>
                <img src={combos} width="300" alt="Pastelería miniatura"/>
          </div>
        </div>
    </main>
        );
}

export default NovedadesPage;