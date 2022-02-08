import React from "react";
import styled from 'styled-components';

//LAYOUT
import Layout from "../layout";

//FONTS
import { Headline1, Headline5, Paragraph, Colors } from "../fonts/Fonts";

//CUSTOM COMPONENTS
import ProfilePhoto  from "../profile-photo/ProfilePhoto";

const TopContainer = styled.div`
    padding: 6% 24% 0 24%;

    @media screen and (max-width: 768px) {
        padding: 120px 0 0 0;
    }
`;

const DataContainer = styled.div`
    margin: 24px 0 24px 0;
    display: flex;
    align-items: center;
`;


export default function PostHeader(props) {

    const {
        title,
        date
    } = props.data.frontmatter;

    return (
        <TopContainer>
            <Headline1 fontWeight={600} color={Colors.black} fontFamily={1} >
                {title}
            </Headline1>
            <DataContainer>
                <div style={{ marginRight: '12px' }} >
                    <ProfilePhoto variant={'small'} />
                </div>
                <Paragraph color={'#73737D'} fontWeight={600} fontSize={'20px'}>
                    Tuğkan Pilka
                </Paragraph>
                <Paragraph color={'#73737D'} fontWeight={300} fontSize={'20px'}>
                    {', ' + date}
                </Paragraph>
            </DataContainer>
        </TopContainer>
    )
}