import React from 'react';
import styled from 'styled-components';
import errorIcon from '../assets/error404.png';

const Error = () => (
    <ErrorWrapper>
        <ErrorContainer>
            <img src={errorIcon} />
        </ErrorContainer>
    </ErrorWrapper>
)

export default Error;

const ErrorWrapper = styled.div``;

const ErrorContainer = styled.div`
    display: flex;
    justify-content: center;
    aign-items: center;

    color: #ffff;
    text-align: center;
    font-weight: bold;

    height: 80vh;
`;