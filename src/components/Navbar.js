import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Menu from '@material-ui/core/Menu';
// import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '../components/StyledElements/Button';
import logo from '../assets/logo.svg'
import { useSelector } from 'react-redux';

const Navbar = () => {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <NavWrapper>
            <NavContainer>
                <Link to="/" className='link-style'>
                    <img src={logo} className="logo-img" />
                </Link>

                {userInfo ?
                    <div>
                        <Button onClick={handleClick} title={'df'} />
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                        </Menu>
                    </div>
                    :
                    <div className='nav-items'>
                        <Link to="/auth/login" className='link-style'> Login </Link>
                        <Link to="/auth/registration" className='link-style'>
                            <Button title={'Sign Up'} />
                        </Link>
                    </div>

                }
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