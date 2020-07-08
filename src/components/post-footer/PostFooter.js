import React from 'react';
import styled from 'styled-components';

//FONTS
import { Paragraph, Colors } from '../fonts/Fonts';

const TopContainer = styled.div`
    width: 100%;
`;

const Line = styled.hr`
    width: 100%;
    height: 1px;

    background-color: ${props => props.color}
`;

const TextContainer = styled.div`
    width: 100%;
    margin: 44px 0 100px 0;
`;

export default function PostFooter() {

    return (
        <TopContainer>
            <Line color={'#f2f2f2'} />
            <TextContainer>
                <Paragraph color={Colors.systemGrey} >
                    2020 Tuğkan Pilka
                </Paragraph>
            </TextContainer>
        </TopContainer>
    )
}