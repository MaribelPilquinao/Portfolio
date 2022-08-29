import React from 'react';
import '../styles/experienceStyle.css'
import logoAcademlo from '../images/logoAcademlo.png'

const Experiencia = () => {
    return (
        <article>
            <section className='container__experience'>
                <div className="title__experience">
                    <h2 className="" id='experience'>Experiencia</h2>
                </div>
                <div className="info__experience">
                    <div className="container-img__experience">
                        <img className='img__experience' src={logoAcademlo} alt="" />
                    </div>
                    <div className="text__experience">
                        <h4 className="name__experience">Academlo</h4>
                        <p className="description__experience">Desarrollo web</p>
                        <p className="description__experience">2022</p>
                    </div>
                    <div className="time__experience">6 meses</div>
                </div>
            </section>
        </article>
    );
};

export default Experiencia;