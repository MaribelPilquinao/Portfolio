import React from 'react';
import '../styles/portfolioStyle.css'
import { Card } from 'react-bootstrap';
import ecommercepm from '../images/ecommercemp.png'
import pokedex from '../images/pokedex.png'
import rickandmorty from '../images/rickandmorty.png'
import crud from '../images/crud.png'
import quotes from '../images/quotes.png'


const Portafolio = () => {





    return (
        <article>
                <section className='section-title'>
                    <h2 className="title__portfolio">Portafolio</h2> <hr />
                </section>
            <section className='container__portfolio'>
                <Card style={{ width: '10rem' }} className='cards'>
                    <Card.Img variant="top" src={ecommercepm} style={{ height: '12rem' }} />
                    <Card.Body>
                        <Card.Title>E commerce</Card.Title>
                        <Card.Text>
                            Tienda virtual de tecnología que permite ingresar un usuario y
                            así loguearse y simular una compra agregando productos.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '10rem' }} className='cards'>
                    <Card.Img variant="top" src={pokedex} />
                    <Card.Body>
                        <Card.Title>Pokedex</Card.Title>
                        <Card.Text>
                            Proyecto deseñada para jugadores pokemon que, trae alrededor de 1000 pokemones
                            con su descripción y habilidades. Filtrados por tipo y por nombre.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '10rem' }} className='cards'>
                    <Card.Img variant="top" src={rickandmorty} />
                    <Card.Body>
                        <Card.Title>Rick and Morty</Card.Title>
                        <Card.Text>
                            Proyecto deseñada en la cual se ingresa el id y se filtran los habiltantes
                            del mundo de Rick and Morty mostrando si están vivos, muertos o su estado
                            es desconocido, con la información que corresponde a cada uno.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '10rem' }} className='cards'>
                    <Card.Img variant="top" src={crud} />
                    <Card.Body>
                        <Card.Title>CRUD</Card.Title>
                        <Card.Text>
                            Simulación de un CRUD (Create, Read, Updade, Delete),
                            con la finalidad de realizar cada una de estas acciones y almacenar los datos.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '10rem' }} className='cards'>
                    <Card.Img variant="top" src={quotes} />
                    <Card.Body>
                        <Card.Title>Otros</Card.Title>
                        <Card.Text>
                            Traer información de un Json (en quotes), y de una página con la ubicación para
                            saber el clima actual, según los datos de esa página.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </section>
        </article>
    );
};

export default Portafolio;