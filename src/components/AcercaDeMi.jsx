import React from 'react';
import '../styles/aboutMeStyle.css'


const AcercaDeMi = () => {
    return (
        <section className="container__aboutMe">
            <div className="info__aboutMe">
                <h2 id="aboutMe" className="title__aboutMe">Acerca de mí</h2>
                <p className="parragraph__aboutMe">
                    Apasionada por el dibujo, la programación y los
                    libros, además de los paseos en bicicleta. Creo que lo complejo
                    de las cosas tienen soluciones simples, solo hay que ser pacientes y esforzados.
                </p>
            </div>
        </section>
    );
};

export default AcercaDeMi;