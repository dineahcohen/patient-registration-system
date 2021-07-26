import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../components/StyledElements/Button';
import logo from '../assets/logo.svg'

const Navbar = () => {
    return (
        <NavWrapper>
            <NavContainer>
                <Link to="/" className='link-style'>
                    <img src={logo} className="logo-img" />
                </Link>
                <div className='nav-items'>
                    <Link to="/auth/login" className='link-style'> Login </Link>
                    <Link to="/auth/registration" className='link-style'>
                        <Button title={'Sign Up'} />
                    </Link>
                </div>
            </NavContainer>
        </NavWrapper>
    );
}

export default Navbar;

const NavWrapper = styled.div`
    height: 100%;
    width: 100%;
`;

const NavContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    height: 2rem;
    padding: 2rem;

    .nav-items{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;

        width: 40%;

        font-weight: bold;
    }

    .link-style{
        color: #A5243D;
        font-size: 16px;
        text-decoration: none;
        margin-right: 1rem;
    }

    .logo-img{
      height: 2rem;
    }
`;