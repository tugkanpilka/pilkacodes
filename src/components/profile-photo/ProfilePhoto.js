import React from 'react';
import styled from 'styled-components';
import handsomeDeveloper from '../../images/handsomedeveloper.png';


const ProfilePhotoContainer = styled.div`
    border: 1px solid #0002;
    border-radius: 100%;
    padding: ${props => props.variant === 'large' ? '5px' : '3px'};
    display: flex;
    align-items: center;
`;

const ProfilePhotoInner = styled.img`
    width: ${props => props.variant === 'large' ? '42px' : '24px'};
    height: ${props => props.variant === 'large' ? '42px' : '24px'};

    border-radius: 50%;
`;

export default function ProfilePhoto(props) {

    const { variant } = props;

    return (
        <ProfilePhotoContainer>
            <ProfilePhotoInner variant={variant} src={handsomeDeveloper}  />
        </ProfilePhotoContainer>
    )
}