import React from "react";
import styled from 'styled-components';
import parse from 'html-react-parser';

import '../../styles/post.css';

const TextContainer = styled.div`
    padding: 80px 24% 0 24%;

    @media screen and (max-width: 960px) {
        padding: 3rem 5rem 3rem 5rem;
    }

    @media screen and (max-width: 768px) {
        padding: 60px 0 0 0;
    }
`;


export default function PostContainer(props) {
    
    return (
        <TextContainer>
            {parse(props.data.html)}        
        </TextContainer>
    )
}