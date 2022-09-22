import React from 'react';
import Link from 'next/link';
import { css } from '@emotion/react';

import MainLayout from '../layouts/mainLayout/MainLayout';
import Title from '../components/title/Title';
import MyWork from '../components/myWork/MyWork';
import Contact from '../components/contact/Contact';

const Home = () => {
    return (
        <MainLayout>
            {/* Title section*/}
            <Title
                titleText={
                    <>
                        Soy un Desarrollador Web de Caracas, Venezuela. A continuación podrás ver un poco de mi trabajo <small className="small text-muted">(al menos de lo que puedo mostrar)</small>:
                    </>
                }
            >
                {/* Additional title section content */}
                <ul className="actions text-center">
                    <li>
                        <Link href="#contact">
                            <span className="button small primary" css={css` font-weight: 700;`}>
                                Contáctame
                            </span>
                        </Link>
                    </li>
                </ul>
            </Title>

            {/* My Work */}
            <MyWork />

            {/* Contact Info */}
            <Contact />
        </MainLayout>
    );
}

export default Home;