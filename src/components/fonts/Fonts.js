import styled from 'styled-components';

export const Headline1 = styled.h1`
    margin: 0;
    font-weight: ${props => props.fontWeight ? props.fontWeight : 'normal'};
    color: ${props => props.color ? props.color : 'white'};
    font-size: ${props => props.fontSize && props.fontSize};

    margin-top: ${props => props.verticalMargin ? props.verticalMargin : '0'};
    margin-bottom: ${props => props.verticalMargin ? props.verticalMargin : '0'};
    margin-left: ${props => props.horizontalMargin ? props.horizontalMargin : '0'};
    margin-right: ${props => props.horizontalMargin ? props.horizontalMargin : '0'};

    white-space: pre-line;

    @media screen and (max-width: 576px) {
        font-size: 2rem;
    };

    @media screen and (min-width: 576px) {
        font-size: 2.6rem;
    };

    @media screen and (min-width: 768px) {
        font-size: ${props => props.fontSize ? props.fontSize : '3rem'} ;
    };
`;

export const Headline2 = styled.h2`
    margin: 0;
    font-weight: ${props => props.fontWeight ? props.fontWeight : 'normal'};
    color: ${props => props.color ? props.color : 'white'};
    font-size: ${props => props.fontSize && props.fontSize};

    margin-top: ${props => props.verticalMargin ? props.verticalMargin : '0'};
    margin-bottom: ${props => props.verticalMargin ? props.verticalMargin : '0'};
    margin-left: ${props => props.horizontalMargin ? props.horizontalMargin : '0'};
    margin-right: ${props => props.horizontalMargin ? props.horizontalMargin : '0'};

    white-space: pre-line;
`;

export const Headline3 = styled.h3`
    margin: 0;
    font-weight: ${props => props.fontWeight ? props.fontWeight : 'normal'};
    color: ${props => props.color ? props.color : 'white'};
    font-size: ${props => props.fontSize && props.fontSize};

    margin-top: ${props => props.verticalMargin ? props.verticalMargin : '0'};
    margin-bottom: ${props => props.verticalMargin ? props.verticalMargin : '0'};
    margin-left: ${props => props.horizontalMargin ? props.horizontalMargin : '0'};
    margin-right: ${props => props.horizontalMargin ? props.horizontalMargin : '0'};

    white-space: pre-line;

    font-family: 'Source Sans Pro', sans-serif;
`;

export const Headline4 = styled.h4`
    margin: 0;
    font-weight: ${props => props.fontWeight ? props.fontWeight : 'normal'};
    color: ${props => props.color ? props.color : 'white'};
    font-size: ${props => props.fontSize && props.fontSize};

    margin-top: ${props => props.verticalMargin ? props.verticalMargin : '0'};
    margin-bottom: ${props => props.verticalMargin ? props.verticalMargin : '0'};
    margin-left: ${props => props.horizontalMargin ? props.horizontalMargin : '0'};
    margin-right: ${props => props.horizontalMargin ? props.horizontalMargin : '0'};

    white-space: pre-line;

    font-family: 'Source Sans Pro', sans-serif;
`;

export const Headline5 = styled.h5`
    margin: 0;
    font-weight: ${props => props.fontWeight ? props.fontWeight : 'normal'};
    color: ${props => props.color ? props.color : 'white'};
    font-size: ${props => props.fontSize && props.fontSize};

    margin-top: ${props => props.verticalMargin ? props.verticalMargin : '0'};
    margin-bottom: ${props => props.verticalMargin ? props.verticalMargin : '0'};
    margin-left: ${props => props.horizontalMargin ? props.horizontalMargin : '0'};
    margin-right: ${props => props.horizontalMargin ? props.horizontalMargin : '0'};

    white-space: pre-line;
`;

export const Paragraph = styled.p`
    margin: 0;
    font-weight: ${props => props.fontWeight ? props.fontWeight : 'normal'};
    color: ${props => props.color ? props.color : 'white'};
    font-size: ${props => props.fontSize && props.fontSize};
    
    margin-top: ${props => props.verticalMargin ? props.verticalMargin : '0'};
    margin-bottom: ${props => props.verticalMargin ? props.verticalMargin : '0'};
    margin-left: ${props => props.horizontalMargin ? props.horizontalMargin : '0'};
    margin-right: ${props => props.horizontalMargin ? props.horizontalMargin : '0'};

    white-space: pre-line;
`;

export const Link = styled.a`
    margin: 0;
    font-weight: ${props => props.fontWeight ? props.fontWeight : 'normal'};
    color: ${props => props.color ? props.color : 'white'};
    font-size: ${props => props.fontSize && props.fontSize};

    background-color: ${props => props.backgroundColor ? props.backgroundColor : 'transparent'};
    
    margin-top: ${props => props.verticalMargin ? props.verticalMargin : '0'};
    margin-bottom: ${props => props.verticalMargin ? props.verticalMargin : '0'};
    margin-left: ${props => props.horizontalMargin ? props.horizontalMargin : '0'};
    margin-right: ${props => props.horizontalMargin ? props.horizontalMargin : '0'};

    white-space: pre-line;

    &:hover {
        color: ${props => props.color ? props.color : 'blue'};
        text-decoration: none;
    }
`;


export const Colors = {
    white: '#FFF',
    black: '#000',
    directoryGrey: '#171717',
    editorGrey: '#1E1E20',
    systemGrey: '#9596A3',
    systemPurple: '#914BCF',
    portalGrey: '#566069',
    selectedRowGrey: '#17171B',
    descriptionGrey: '#7A7A7A'
}

export const MarginValues = {
    margin1: '1px',
    margin2: '2px',
    margin3: '3px',
    margin4: '4px',
    margin5: '5px',
}

