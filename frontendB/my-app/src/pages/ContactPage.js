import React from 'react';

import '../styles/pages/contactoPage.css';

const ContactoPage = (props) => {
    return (
        <main className="holder">
            <div className="columna contacto">
                <h2>Complete el siguiente formulario</h2>
                <form action = "" method= "" className="formulario">
                    <p>
                        <label>Nombre</label>
                        <input type="text" name="nombre"/>
                    </p>
                    <p>
                        <label>Mail</label>
                        <input type="text" name="mail"/>
                    </p>
                    <p>
                        <label>Teléfono</label>
                        <input type="text" name="telefono"/>
                    </p>
                    <p>
                        <label>Comentario</label>
                        <textarea name="mensaje"></textarea>
                    </p>
                    <p className="centrar"><input type="submit" value="Enviar"/> </p>
                </form>
            </div>
            <div className="columna datos">
                <h2>Otras vías de contacto</h2>
                <p>También puede contactarse con nosotros a través de los siguientes medios:</p>
                <ul>
                    <li>Teléfono: 123456789</li>
                    <li>Mail: .......</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </main>
        );
}

export default ContactoPage;