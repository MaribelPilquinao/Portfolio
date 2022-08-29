import React from 'react';
import '../styles/portfolioStyle.css'
import ecommercepm from '../images/ecommercepm.png'
import pokedex from '../images/pokedex.png'
import rickandmorty from '../images/rickandmorty.png'
import crud from '../images/crud.png'
import quotes from '../images/quotes.png'


const Portafolio = () => {





    return (
        <article className='portfolio'>
            <section className='section-title'>
                <h2 id='portfolio' className="title__portfolio">Portafolio</h2>
            </section>
            <section className='container__portfolio'>
                <article className='container-card'>
                    <figure>
                        <img  src={ecommercepm} alt="" />
                    </figure>
                    <div className="capa">
                        <h3>E commerce</h3>
                        <p>Tienda virtual de tecnología que permite ingresar un usuario y
                            así loguearse y simular una compra agregando productos.</p>
                        <a style={{color: 'rgb(242, 100, 64)'}} href="https://ecommerce-mp.netlify.app/">E commerce Proyect</a>
                    </div>
                </article>
                <article className='container-card'>
                    <figure>
                        <img src={pokedex} alt="image trainers pokemons" />
                    </figure>
                    <div className="capa">
                        <h3>Pokedex</h3> 
                        <p>Proyecto deseñada para jugadores pokemon que, trae alrededor de 1000 pokemones
                            con su descripción y habilidades.</p>
                            <a style={{color: 'rgb(242, 100, 64)'}} href="https://pokedex-react-mp.netlify.app/">Pokedex link</a>
                    </div>
                </article>
                <article className='container-card'>
                    <figure>
                        <img src={rickandmorty} alt="image rick asnd morty" />
                    </figure>
                    <div className="capa">
                        <h3>Rick and Morty</h3> 
                        <p>Proyecto deseñado en el cual se puede traer ingresando el ID a los habitantes 
                            de cada dimensión de Rick and Morty.
                        </p>
                            <a style={{color: 'rgb(242, 100, 64)'}} href="https://rick-and-morty-mp.netlify.app/">Rick and Morty link</a>
                    </div>
                </article>
                <article className='container-card'>
                    <figure>
                        <img src={crud} alt="image " />
                    </figure>
                    <div className="capa">
                        <h3>CRUD</h3>
                        <p>Simulación de un CRUD (Create, Read, Updade, Delete),
                            con la finalidad de realizar cada una de estas acciones y almacenar los datos.</p>
                            <a style={{color: 'rgb(242, 100, 64)'}} href="https://users-crud-mp.netlify.app/">CRUD link</a>
                    </div>
                </article>
                <article className='container-card'>
                    <figure>
                        <img src={quotes} alt="image quotes" />
                    </figure>
                    <div className="capa">
                        <h3>Otros-Quotes</h3> 
                        <p>Traer información de un Json (en quotes), y de una página con la ubicación para
                            saber el clima actual, según los datos de esa página.</p>
                            <a style={{color: 'rgb(242, 100, 64)'}} href="https://quotes-maribel.netlify.app/">link quotes</a>
                    </div>
                </article>
            </section>
        </article>
    );
};

export default Portafolio;