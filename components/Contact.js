import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';
import {css} from '@emotion/react';

const Paragraph = styled.p`
    text-indent: 1rem;
    text-align: justify;
`;

const Pseudolink = styled.span`
    text-decoration: underline;
    color: var(--green);
    cursor: pointer;

    &:hover{
        color: var(--light-green);
    }
`;

const Contact = () => {
    return (
        <section id="contact">
            <h2>Contáctame</h2>
            
            <div className="row">
                <div className="col-5 col-6-medium col-12-small">
                    <Paragraph>
                        ¿Necesitas una aplicación o sitio web para tu negocio? ¿Quieres hacer un proyecto en conjunto? <br/>No dudes en escribirme
                    </Paragraph>        
                    <ul className="actions">
                        <li><Link href="#"><span className="button small">Volver arriba</span></Link></li>
                    </ul>
                </div>
                <div className="col-7 col-6-medium col-12-small">
                    <ul className="labeled-icons">
                        <li>
                            <h3 className="icon solid fa-mobile-alt"></h3>
                            <Link target="_blank" href="https://api.whatsapp.com/send?phone=584242280231"><Pseudolink>+58 424-2280231</Pseudolink></Link>
                            
                        </li>
                        <li>
                            <h3 className="icon solid fa-envelope"><span className="label">Email</span></h3>
                            <Link target="_blank" href="mailto:allgrego14@gmail.com"><Pseudolink>allgrego14@gmail.com</Pseudolink></Link>
                        </li>
                        <li>
                            <h3 className="icon brands fa-linkedin"><span className="label">Linkedin</span></h3>
                            <Link target="_blank" href="https://www.linkedin.com/in/gregorio-alvarez-martinez-6a561a124/"><Pseudolink>Linkedin</Pseudolink></Link>
                        </li>
                        <li>
                            <h3 className="icon brands fa-instagram"><span className="label">Instagram</span></h3>
                            <Link target="_blank" href="https://www.instagram.com/allvrzgreg/"><Pseudolink>@allvrzgreg</Pseudolink></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}
 
export default Contact;