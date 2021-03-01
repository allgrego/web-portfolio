import React from 'react';
import {css} from '@emotion/react';
const Footer = () => {
    return ( 
        <footer id="footer">
			<div className="inner">
				<ul className="icons">
					<li><a target="_blank" href="https://www.instagram.com/allvrzgreg/" className="icon brands fa-instagram"><span className="label">Twitter</span></a></li>
					<li><a target="_blank" href="https://github.com/allgrego" className="icon brands fa-github"><span className="label">Github</span></a></li>
					<li><a target="_blank" href="https://www.linkedin.com/in/gregorio-alvarez-martinez-6a561a124/" className="icon brands fa-linkedin"><span className="label">Linkedin</span></a></li>
					<li><a target="_blank" href="mailto: allgrego14@gmail.com" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
				</ul>
				<ul className="copyright">
					<li>Universidad Simón Bolívar</li>
					<li>Caracas, Venezuela</li>
					<li css={css`font-size:smaller`}>Hecho con Next.js</li>
				</ul>
			</div>
		</footer>
     );
}
 
export default Footer;