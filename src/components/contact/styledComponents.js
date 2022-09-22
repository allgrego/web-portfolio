import styled from '@emotion/styled';

export const Paragraph = styled.p`
    text-indent: 1rem;
    text-align: justify;
`;

export const Pseudolink = styled.span`
    text-decoration: underline;
    color: var(--green);
    cursor: pointer;

    &:hover{
        color: var(--light-green);
    }
`;