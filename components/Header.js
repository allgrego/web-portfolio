import Image from 'next/image';
import React from 'react';

const Header = () => {
    return ( 
        <header id="header">
            <div className="inner">
                <a href="#" className="image avatar"><Image src="/images/avatar.jpg" width="100%" height="100%" 
                layout="responsive"
                alt=""></Image></a>
                <h1><strong>Hi, I'm Gregorio</strong>.<br/> A super simple
                responsive site template freebie<br />
                crafted by <a href="http://html5up.net">HTML5 UP</a>.</h1>
            </div>
        </header>
     );
}
 
export default Header;