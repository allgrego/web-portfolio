import React from 'react';
import styled from '@emotion/styled';


const ContentBox = styled.div`
    margin-left: 0;
    padding: 0;
`;

const ContentLayout = (props) => {
    return (  
        <>
            <ContentBox>                        
                {props.children}
            </ContentBox>
        </>
    );
}
 
export default ContentLayout;