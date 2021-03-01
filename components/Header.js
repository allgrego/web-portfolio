import Image from 'next/image';
import React from 'react';

const Header = () => {
    return ( 
        <header id="header">
            <div className="inner">
                <a href="#" id="avatar" className="image avatar"><Image src="/images/avatar.jpg" width="100%" height="100%" 
                layout="responsive" quality="50"
                alt=""></Image></a>
                <h1><strong>Hola, soy Gregorio</strong>.<br/> Desarrollador Web y Programador freelance.<br/></h1>
            </div>
        </header>
     );
}
 
export default Header;