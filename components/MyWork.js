import React from 'react';
import Link from 'next/link';
import {css} from '@emotion/react';
import Image from 'next/image';


const MyWork = () => {

    const mywebpages = [
        {
            name: "Página principal de GBA Logistics",
            description: "Página principal de empresa venezolana de transporte internacional",
            specifications: "Desarrollador de Full-Stack. Tecnologías: React.js, Redux, Styled-Components, Laravel, Firebase",
            url: "https://gbalogistic.com",
            img: "gba-logistics.jpg"
        },
        {
            name: "Portal de pacientes Wellness Mervra",
            description: "Portal de salud en que el paciente puede ver e ingresar sus datos médicos e interactuar con los sistemas que conforman la plataforma de Wellness Mervra",
            url: "https://portal.wellness-mervra.com",
            specifications: "Desarrollador Full Stack. Tecnologías: React.js, Bootstrap, Laravel",
            img: "02.jpg"
        },
        {
            name: "Página principal de Wellness Mervra",
            description: "Página principal del startup con intereses en las áreas de medicina e ingeniería, Wellness Mervra.",
            specifications: "Desarrollador de Front-end. Tecnologías: HTML, CSS y Javascript",
            url: "https://wellness-mervra.com",
            img: "01.jpg"
        },
        {
            name: "Portal de pagos de Laboratorio InmunoXXI",
            description: "Portal de pagos de los distintos exámenes, perfiles y servicios que ofrece el laboratorio.",
            specifications: "Desarrollador de front-end. Tecnologías: Wordpress, Woocommerce, Elementor",
            url: "https://portal.inmuno21.com",
            img: "04.jpg"
        },
        {
            name: "Página principal de proyecto HUC-OASIS",
            description: "Página web principal de proyecto de Registro Médico Electrónico (EMR) implementado en el Hospital Universitario de Caracas por investigadores de la Universidad Simón Bolívar (USB).",
            specifications: "Desarrollador de front-end. Tecnologías: HTML, CSS y Javascript",
            url: "https://huc-oasis.health",
            img: "03.jpg"
        },
        {
            name: "Registro Médico Electrónico HUC-OASIS",
            description: "Registro Médico Electrónico (EMR) en la nube de Hospital Universitario de Caracas",
            specifications: "Programador de personalizaciones. Tecnologías: PHP, MariaDB. Basado en OpenEMR",
            url: "https://huc-oasis.health/medik",
            img: "huc-oasis-emr.jpg"
        },
        {
            name: "Portal de pacientes HUC Oasis",
            description: "Portal web en que el paciente puede ver e ingresar sus datos médicos",
            url: "https://portal.huc-oasis.health",
            specifications: "Desarrollador Full Stack. Tecnologías: React.js, Bootstrap, Laravel",
            img: "huc-oasis-portal.jpg"
        },
        {
            name: "Damuvis App",
            description: "[Side project] Aplicación web sencilla de tendencias de películas y series",
            specifications: 'Creado con React.js y lanzado en Heroku. Powered by TMDB.',
            url: "http://damuvis.herokuapp.com/",
            img: "damuvis-app.jpg"
        },
        {
            name: "Administrador de citas",
            description: "[Side project] Aplicación web sencilla para agendar y administrar citas de pacientes veterinarios",
            specifications: 'Creado con React.js y lanzado en Netlify',
            url: "https://allgrego-patient-admin.netlify.app/",
            img: "06.jpg"
        }
    ];

    return ( 
        <section id="mywork">
            <h2>Trabajos Recientes</h2>
            <div className="row">
                {
                    mywebpages.map((website,i) => (
                        <article className="col-6 col-12-xsmall work-item" key={i}>
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
        </section>
     );
}
 
export default MyWork;