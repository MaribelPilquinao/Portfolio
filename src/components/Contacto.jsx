import React from 'react';
import '../styles/contactStyle.css'
import phone3 from '../images/phone3.svg'
import mail3 from '../images/mail3.svg'

const Contacto = () => {
    return (
        <article className="container-contacto">
                <div className="circle__green-contact"></div>
            <div className="contact">
                <h2 id="contact">Contacto</h2>
            </div>
            <section className="container__info-contact">
                <div className="info__contact">
                    <div className="circle__small-1"><img src={phone3} alt="icon phone" /></div>
                    <div className="info-contacto">
                        <h3>Número celular</h3>
                        <p>+51 952193831</p>
                    </div>
                </div>
                <div className="info__contact">
                    <div className="circle__small-2"><img src={mail3} alt="icon mail" /></div>
                    <div className="info__contact">
                        <h3>Email</h3>
                        <p>maribel.pilquinaopm@gmail.com</p>
                    </div>
                </div>
            </section>
        </article>

    );
};

export default Contacto;