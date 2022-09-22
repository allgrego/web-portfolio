import React from 'react';
import { Paragraph } from './styledComponents';


const Title = ({titleText, children}) => {
    return ( 
    <section id="title">
        <header className="major align-center">
            <h2>Mi portafolio</h2>
        </header>
        {/* Initial paragraph */}
        <Paragraph>
            {titleText}
        </Paragraph>
        {/* Rest of content */}
        {children}
    </section> );
}
 
export default Title;