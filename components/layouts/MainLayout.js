import React from 'react';
import Head from 'next/head';
import {Global, css} from '@emotion/react';
import Header from '../Header';
import Footer from '../Footer';



const MainLayout = (props) => {
    return (  
        <> 
          <Head>
              <title>Strata by HTML5 UP</title>
              <meta charSet="utf-8" />
              <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
          </Head>
        
          {/*<!-- Header -->*/}
          <Header/>
          
          {/* Content */}
          <div id="main">
            {props.children}
          </div>

          {/*<!-- Footer -->*/}
          <Footer/>
          
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