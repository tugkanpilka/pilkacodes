import React from 'react';
import styled from 'styled-components';

//FONTS
import { Paragraph, Colors } from '../fonts/Fonts';


const TopContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin: 80px 0 0 8px;
`;

const CustomImage = styled.img`
    width: 100%;
`;

const CapitonContainer = styled.div`

    @media screen and (max-width: 768px) {
        margin: 24px 0;
    }

    @media screen and (min-width: 768px) {
        margin: 32px 12% 24px 12%;
    }
`;


export default function PostEntryImage() {

    return (
        <TopContainer>
            <CustomImage src={'https://picsum.photos/1920/1080'} />
            <CapitonContainer>
                <Paragraph color={Colors.systemGrey} textAlign={'center'} fontSize={'16px'}>
                    Merhaba Dünya, bu bir caption yazısıdır. Dilersen bu yazıyı büyültebilirsin fakat hiçbir yan etkisi olmayacaktır.
                </Paragraph>
            </CapitonContainer>
        </TopContainer>
    )
}