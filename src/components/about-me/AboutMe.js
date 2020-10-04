import React from 'react';
import styled from 'styled-components';
import { MdEmail } from "react-icons/md";
import { IconContext } from 'react-icons';
import handsomeDeveloper from '../../images/handsomedeveloper.png';

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

const RightSectionContainer = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`;

class AboutMe extends React.Component {

    render() {
        return (
            <TopContainer>
                <LeftSectionContainer>
                    <ProfilePhotoContainer>
                        <ProfilePhoto src={handsomeDeveloper} />
                    </ProfilePhotoContainer>
                    <Paragraph color={'#9c9da1'} horizontalMargin={'16px'} fontSize={'0.9rem'} >
                        I am a front-end developer based in Istanbul. I love learning new things and translating solutions into code.
                    </Paragraph>
                </LeftSectionContainer>
                <RightSectionContainer>
                    <IconContext.Provider value={{ color: "black" }}  >
                        <div style={{ cursor: 'pointer' }}  >
                            <a href="mailto:tugkanpilka@gmail.com">
                                <MdEmail size={'28px'}/>
                            </a>
                        </div>
                    </IconContext.Provider>
                </RightSectionContainer>
            </TopContainer>
        )
    }
}

export default AboutMe;