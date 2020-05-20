import React from 'react';
import styled from 'styled-components';

//FONTS
import { Headline4, Paragraph, Colors } from '../fonts/Fonts';


const TopContainer = styled.div`
    margin-bottom: 30px;

    height: 180px;
    max-height: 180px;

    background-image: linear-gradient(to right, rgba(35, 38, 45, 1), rgba(23, 23, 27, 0.5)),
    url(${props => props.backgroundImage});
    background-repeat: no-repeat;
    background-position: center;

    overflow: hidden;

    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: box-shadow, transform;
    transition-property: box-shadow, transform;

    &:focus, &:active, &:hover {
        box-shadow: 0px 46px 42px -28px rgba(0,0,0,0.4);
        -webkit-transform: scale(1.05);
        transform: scale(1.05);
    }
`;

const TextContainer = styled.div`
    height: 180px;
    max-height: 180px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 10px 0 2em;    

    margin: ${props => props.isHovered && props.isFirst ? '-180px' : '0'} 0 0 0;
    transition: margin 0.5s ease;
`;


class PostCard extends React.Component {

    constructor() {
        super();
        this.state = {
            isHovered: false
        }
    }

    render() {
        const { title, description, backgroundImage } = this.props.data;
        const { isHovered } = this.state;

        return (
            <TopContainer 
                backgroundImage={backgroundImage} 
                onMouseEnter={() => this.setState({ isHovered: true })}
                onMouseLeave={() => this.setState({ isHovered: false })}
            >
                <TextContainer isHovered={isHovered} isFirst>
                    <Headline4 fontWeight={600} >{title}</Headline4>
                    <Paragraph>{description}</Paragraph>
                </TextContainer>
                <TextContainer isHovered={isHovered} >
                    <Headline4 fontWeight={600} >Hellooo</Headline4>
                </TextContainer>
            </TopContainer>
        )
    }
}

export default PostCard;