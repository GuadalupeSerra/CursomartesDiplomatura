import React from 'react';
import '../styles/pages/nosotrosPage.css';

const NosotrosPage = (props) => {
    return (
    <main>
    <div className="box">
        <section className="team">
            <h2 className="section-heading">Nosotras</h2>
    
        <div className="box2">
        <div className="profile">
          <img src="img/Mujer pastelera 2.jpg" alt=""/><span className="name">Guadalupe</span>
        </div>
        <div className="profile">
          <img src="img/Mujer pastelera 2.jpg" alt=""/><span className="name">Juanita</span>
        </div>
    
        <div className="profile">
          <img src="img/Mujer pastelera 2.jpg" alt=""/><span className="name">Julia</span>
        </div>
        </div>
    </section>
    </div>
    </main>
);
}

export default NosotrosPage;