import React from 'react';
import styled from 'styled-components';

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
                    Tuğkan Pilka
                </Paragraph>
                <Paragraph color={Colors.black}>
                    Merhaba
                </Paragraph>
            </TopContainer>
        )
    }
}

export default Header;