import React from 'react';
import '../styles/myAbilities.css'
import html from '../images/html.png'
import css3 from '../images/css3.png'
import js from '../images/js.png'
import react from '../images/react.png'

const MisHabilidades = () => {
    return (
        <article className="container__abilities">
            <section className="container__circles">
                <div className="circulo__green-abilities"></div>
                <div className="circulo-orange"></div>
            </section>
            <section className="info__abilities">
                <div>
                    <h2 id="mis__habilidades" className="title__abilities"><span className="span-mis">Mis</span>habilidades</h2>
                </div>
                <article className="abitities__cards">
                    <div className="row cards">
                        <div className="col-4 card">
                            <div className="ability-1">
                                <h2 className="title__ability"> <span><img className='icon__abilities' src={html} alt="" /></span> HTML</h2>
                                <p className="parrafo-hab">Maquetar un sitio usando HTML.</p>
                            </div>
                        </div>
                        <div className="col-4 card">
                            <div className="ability-2">
                                <h2 className="title__ability"><span><img className='icon__abilities' src={css3} alt="" /></span> CSS</h2>
                                <p className="parrafo-hab">Hacer atractivo un sitio web de HTML con CSS</p>
                            </div>
                        </div>
                        <div className="col-4 card">
                            <div className="ability-3">
                                <h2 className="title__ability"><span><img className='icon__abilities' src={js} alt="" /></span> Javascript</h2>
                                <p className="parrafo-hab">Programar para crear soluciones a problemas.</p>
                            </div>
                        </div>
                        <div className="col-4 card">
                            <div className="ability-4">
                                <h2 className="title__ability"><span><img className='icon__abilities' src={react} alt="" /></span> React Js</h2>
                                <p className="parrafo-hab">Librería open source de JavaScript.</p>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </article>
    );
};

export default MisHabilidades