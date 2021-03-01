import React from 'react';

const ContentLayout = (props) => {
    return (  
        <div id="main">
            {props.children}
        </div>
    );
}
 
export default ContentLayout;