import React from 'react';
import styled from 'styled-components';
import awesomeLogo from '../../images/tugkanpilkacodes.png';
import { navigate } from "gatsby"
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { IconContext } from 'react-icons';

//FONTS
import { Paragraph, Colors } from '../fonts/Fonts';

const TopContainer = styled.div`
    width: 100%;
    padding: 50px 0 0 0;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
`;


class Header extends React.Component {

    render() {
        return (
            <TopContainer>
                <Paragraph color={Colors.black} >
                    <div style={{ cursor: 'pointer' }}  onClick={() => navigate('/')} >
                        <img src={awesomeLogo} style={{ width: '50px', height: '50px' }} />
                    </div>
                </Paragraph>
                <div>
                    <IconContext.Provider value={{ color: "black" }}  >
                        <div style={{ display: 'flex', alignItems: 'center' }} >
                            <div style={{ cursor: 'pointer', marginRight: '24px' }}  >
                                <a href="https://github.com/tugkanpilka" target="_blank" >
                                    <FiGithub size={'28px'}/>
                                </a>
                            </div>
                            <div style={{ cursor: 'pointer' }}  >
                                <a href="https://www.linkedin.com/in/tugkanpilka/" target="_blank" >
                                    <FiLinkedin size={'28px'}/>
                                </a>
                            </div>
                        </div>
                    </IconContext.Provider>
                </div>
            </TopContainer>
        )
    }
}

export default Header;