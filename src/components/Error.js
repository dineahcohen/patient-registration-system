import React from 'react';
import styled from 'styled-components';

const Error = ({ message }) => (
    <ErrorWrapper>
        <ErrorContainer>
            {message}
        </ErrorContainer>
    </ErrorWrapper>
)

export default Error;

const ErrorWrapper = styled.div``;

const ErrorContainer = styled.div`
    display: flex;
    justify-content: center;
    aign-items: center;

    background: #A5243D;

    color: #ffff;

    text-align: center;
`;