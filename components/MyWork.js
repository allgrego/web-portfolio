import React from 'react';
import Link from 'next/link';
import {css} from '@emotion/react';
import Image from 'next/image';


const MyWork = () => {

    const mywebpages = [
        {
            id: 1,
            name: "Página principal de Wellness Mervra",
            description: "Página principal del startup con intereses en las áreas de medicina e ingeniería, Wellness Mervra.",
            specifications: "Desarrollador de Front-end. Creado con HTML, CSS y Javascript",
            url: "https://wellness-mervra.com",
            img: "01.jpg"
        },
        {
            id: 2,
            name: "Portal de pacientes Wellness Mervra",
            description: "Portal de salud en que el paciente puede ver e ingresar sus datos médicos e interactuar con los sistemas que conforman la plataforma de Wellness Mervra",
            url: "https://portal.wellness-mervra.com",
            specifications: "Desarrollador de front-end y back-end. Creado con Laravel",
            img: "02.jpg"
        },
        {
            id: 3,
            name: "Página principal de proyecto HUC-OASIS",
            description: "Página web principal de proyecto de Registro Médico Electrónico (EMR) implementado en el Hospital Universitario de Caracas por investigadores de la Universidad Simón Bolívar (USB).",
            specifications: "Desarrollador de front-end. Creado con HTML, CSS y Javascript",
            url: "https://huc-oasis.health",
            img: "03.jpg"
        },
        {
            id: 4,
            name: "Portal de pagos de Laboratorio InmunoXXI",
            description: "Portal de pagos de los distintos exámenes, perfiles y servicios que ofrece el laboratorio.",
            specifications: "Desarrollador de front-end. Creado con Wordpress",
            url: "https://portal.inmuno21.com",
            img: "04.jpg"
        },
        {
            id: 5,
            name: "Guacacktail",
            description: "Página web con listado de cocteles clasificados por su licor principal, y receta para prepararlos. Usando API pública de The CocktailDB",
            url: "https://guacacktail.herokuapp.com",
            specifications: "Desarrollador de front-end y back-end. Creado con Laravel",
            img: "05.jpg"
        },
        {
            id: 6,
            name: "Administrador de citas",
            description: "Aplicación web sencilla para agendar y administrar citas de pacientes veterinarios",
            specifications: 'Creado con React.js',
            url: "https://allgrego-patient-admin.netlify.app/",
            img: "06.jpg"
        },
        {
            id: 7,
            name: "Mi portafolio",
            description: "Actual portafolio de proyectos web realizados",
            specifications: 'Creado con Next.js',
            img: "07.jpg"
        }


    ];

    return ( 
        <section id="mywork">
            <h2>Trabajos Recientes</h2>
            <div className="row">
                {
                    mywebpages.map(website => (
                        <article className="col-6 col-12-xsmall work-item" key={website.id}>
                            <a href={website.url} target="_blank" className="image fit thumb"><Image src={'/images/thumbs/'+website.img} alt={website.name} width="100%" height="50%" quality="50" layout="responsive"/></a>
                            <h3><a target={website.url&&'_blank'} href={website.url}>{website.name}</a></h3>
                            <p css={css`
                                text-indent: 1rem;
                                text-align: justify;
                            `}>{website.description}</p>
                            <p css={css`
                                color: var(--light-green);
                                text-align: justify;
                            `}>{website.specifications}</p>
                        </article>
                    ))
                }
            </div>
            <ul className="actions">
                <li><Link href="#contact"><span className="button small">Contáctame</span></Link></li>
            </ul>
        </section>
     );
}
 
export default MyWork;