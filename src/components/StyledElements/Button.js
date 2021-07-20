import React from 'react';
import styled from 'styled-components';

const Button = ({ onClick, title, ...props }) => {
    return (
        <ButtonWrapper
            onClick={onClick}
            {...props}
        >
            {title}
        </ButtonWrapper>
    );
}

export default Button;

const ButtonWrapper = styled.button`
    height: 2rem;
    width: 8rem;

    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 16px 35px;
    margin-top: 0.5rem;
    border: none;
    border-radius: 8px;

    background: #A5243D;
    color: #ffff;

    font-weight: 600;
    
    cursor: pointer;
`;
