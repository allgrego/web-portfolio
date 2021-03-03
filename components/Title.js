import React from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import {css} from '@emotion/react';

const Paragraph = styled.p`
    color: #666;
    font-size: large;
    text-indent: 1rem;
    text-align: justify;
`;

const Title = () => {
    return ( 
    <section id="title">
        <header className="major align-center">
            <h2>¿Necesitas una aplicación o sitio web?</h2>
        </header>
        <Paragraph>
            Soy un desarrollador web y programador freelance de Caracas, Venezuela. Hago aplicaciones y sitios web con HTML+CSS+Javascript, Laravel y React.js/Next.js.
        </Paragraph>
        <Paragraph>
        ¿Quieres saber más? Puedes ver mi <a href="#linkedin"> Linkedin</a>.
        </Paragraph>
        <ul className="actions">
            <li><Link href="#mywork"><span className="button small primary" css={css` font-weight: 700;`}>
                Mis Trabajos Recientes</span></Link></li>
            <li><Link href="#contact"><span className="button small primary" css={css` font-weight: 700;`}
            >Contáctame</span></Link></li>
        </ul>
    </section> );
}
 
export default Title;