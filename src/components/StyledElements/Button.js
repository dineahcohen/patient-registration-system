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
    width: fit-content;

    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 16px 25px;
    
    border: none;
    border-radius: 8px;

    background: #A5243D;
    color: #ffff;

    font-weight: 600;
    
    cursor: pointer;

    &:hover{
        background: #861D32;
        box-shadow: box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`;
