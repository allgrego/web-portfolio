import React from 'react';
import Head from 'next/head';
import {Global, css} from '@emotion/react';
import Header from '../Header';
import Footer from '../Footer';
import ContentLayout from './ContentLayout';



const MainLayout = (props) => {
    return (  
        <> 
          <Head>
              <title>Portfolio - Gregorio Alvarez</title>
              <meta charSet="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
          </Head>
        
          
            {/*<!-- Header -->*/}
            <Header/>
            <body className="">  
            {/* Content */}
            <ContentLayout>
              {props.children}
            </ContentLayout>
            </body>
            {/*<!-- Footer -->*/}
            {<Footer/>}
            
            {/* Scripts */}
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