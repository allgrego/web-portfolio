import React from 'react';
import {css} from '@emotion/react';
import Image from 'next/image';
import { mywebpages } from './webpages';

const MyWork = () => {
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