import React from 'react';
import styled from 'styled-components';

//FONTS
import { Headline1, Link, Colors } from '../fonts/Fonts';

const TopContainer = styled.div`
    width: 100%;

    padding: 100px 0 100px 0;

    @media (max-width: 768px) {
        padding: 80px 0 60px 0;
    }
`;


class Banner extends React.Component {

    render() {
        return (
            <TopContainer>
                <Headline1 color={Colors.black} fontWeight={600} fontSize={'3.3rem'} fontFamily={0} > 
                    {'Notes about '}
                    <Link href={'https://www.javascript.com/'} target={"_blank"} color={Colors.black} fontWeight={600} backgroundColor={'#edd53f'} >
                        JavaScript
                    </Link> 
                    {', \n'}
                    <Link href={'https://reactjs.org/'} target={"_blank"} color={'#61dafb'} fontWeight={600} backgroundColor={'#282c34'} >
                        ReactJS
                    </Link> 
                    {' and more by \n'}
                    <Link href={'https://www.linkedin.com/in/tugkanpilka/'} target={"_blank"} color={'#000'} fontWeight={600} backgroundColor={'#FAFAFA'} >
                        Tuğkan Pilka.
                    </Link> 
                </Headline1>
            </TopContainer>
        )
    }
}

export default Banner;