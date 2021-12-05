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
            <h2>Mi portafolio</h2>
        </header>
        <Paragraph>
            Soy un desarrollador web de Caracas, Venezuela. A continuación podrás ver un poco de mi trabajo <small className="small text-muted">(al menos de lo que puedo mostrar)</small>:
        </Paragraph>
        {/* <Paragraph>
        ¿Quieres saber más? Puedes ver mi <a target="_blank" href="https://www.linkedin.com/in/gregorio-alvarez-martinez-6a561a124/"> Linkedin</a>.
        </Paragraph> */}
        <ul className="actions text-center">
            {/* <li><Link href="#mywork"><span className="button small primary" css={css` font-weight: 700;`}>
                Mis Trabajos Recientes</span></Link></li> */}
            <li><Link href="#contact"><span className="button small primary" css={css` font-weight: 700;`}
            >Contáctame</span></Link></li>
        </ul>
    </section> );
}
 
export default Title;