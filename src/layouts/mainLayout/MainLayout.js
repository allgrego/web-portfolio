import React from 'react';
import Head from 'next/head';

import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';



const MainLayout = ({children}) => {

    return (  
        <> 
          <Head>
              <title>Portfolio - Gregorio Alvarez</title>
              <meta charSet="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
          </Head>     
          
            {/* Header */}
            <Header/>

            <body className="">  
            {/* Content */}
            <div id="main">
              {children}
            </div>
            
            </body>

            {/* Footer */}
            {<Footer/>}
            
            {/* Public scripts */}
            {/* TODO: Correct this. It is not an ideal way to do this, but it works */}
            <script src="/js/jquery.min.js"></script>
            <script src="/js/jquery.poptrox.min.js"></script>
            <script src="/js/browser.min.js"></script>
            <script src="/js/breakpoints.min.js"></script>
            <script src="/js/util.js"></script>
            <script src="/js/main.js"></script>
        </>
    );
}
 
export default MainLayout;