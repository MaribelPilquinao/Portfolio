import React from 'react';
import '../styles/homeStyle.css'
import picture1 from '../images/picture1.png'
import linkedin from '../images/linkedin.svg'
import instagram from '../images/instagram.svg'
import github from '../images/github.svg'
import flecha from '../images/flecha.png'
import dcv from '../images/dcv.png'


const Home = () => {
    return (

        <main className='container__home'>
            <section>
                <section className='title-name'>
                    <h1>Maribel Pilquinao</h1>
                </section>
                <section className='container-home__circles'>
                    <div className="circle-orange__linkedin"><a href="https://www.linkedin.com/in/maribel-pilquinao/"><img src={linkedin} alt="icono linkedin" /></a></div>
                    <div className="circle-orange__instagram"><a href="https://www.instagram.com/mar_alejandrap/"><img src={instagram} alt="icono instagram" /></a></div>
                    <div className="circle-orange__github"><a href="https://github.com/MaribelPilquinao"><img className='icon-github' src={github} alt="icono github" /></a></div>
                    <div className="cv__downland">
                        <a href="cvmp">CV <img className='img-btn'src={dcv} alt="" /></a>
                    </div>
                </section>
            </section>
            <section className='container__picture'>
                <div className="circle-green__picture"></div>
                <img className='picture__me' src={picture1} alt="Maribel Pilquinao" />
            </section>
           <button className='btn__down'><img className='img-btn' src={flecha} alt="" /></button>
        </main>
    );
};

export default Home;