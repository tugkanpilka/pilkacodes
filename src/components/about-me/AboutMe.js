import React from 'react';
import styled from 'styled-components';
import { MdEmail } from "react-icons/md";

//FONTS
import { Paragraph, Link, Colors } from '../fonts/Fonts';

const TopContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 0 0 100px 0;
`;


const ProfilePhotoContainer = styled.div`
    border: 1px solid #0002;
    border-radius: 100%;
    padding: 5px;
`;


const ProfilePhoto = styled.img`
    width: 42px;
    height: 42px;

    border-radius: 50%;
`;

const LeftSectionContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    max-width: 524px;
`;


class AboutMe extends React.Component {

    render() {
        return (
            <TopContainer>
                <LeftSectionContainer>
                    <ProfilePhotoContainer>
                        <ProfilePhoto src={'https://picsum.photos/200'} />
                    </ProfilePhotoContainer>
                    <Paragraph color={'#9c9da1'} horizontalMargin={'16px'} fontSize={'0.9rem'} >
                        I am a front-end developer based in Milan. I love learning new things and staying up-to-date with the latest web technologies.
                    </Paragraph>
                </LeftSectionContainer>
                <MdEmail />
            </TopContainer>
        )
    }
}

export default AboutMe;