import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '../components/StyledElements/Button';
import Error from '../components/Error';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';

const Login = ({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const userLogin = useSelector((state) => state.userLogin);
    const { loading, error, userInfo } = userLogin;

    useEffect(() => {
        if (userInfo) {
            history.push('/user/dashboard')
        }
    }, [history, userInfo]);

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };


    return (
        <LoginWrapper>
            <FormContainer>
                <LoginContainer>
                    <div>
                        <h4> Login </h4>
                    </div>

                    <div className='form-row'>
                        <TextField
                            required
                            label="Email"
                            id="standard-size-normal"
                            size="normal"
                            value={email}
                            onChange={handleEmail} />

                        <TextField
                            required
                            type="password"
                            label="Password"
                            id="standard-size-normal"
                            size="normal"
                            value={password}
                            onChange={handlePassword} />
                    </div>

                    <Button title={'Submit'} onClick={handleSubmit} />
                </LoginContainer>
            </FormContainer>
        </LoginWrapper>
    );
}

export default Login;

const LoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 80vh;
`;

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
 
    text-align: center;

    width: 60%;

    background-color: #fff;

    border-radius: 8px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, 
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

    padding: 1rem 2rem; 

    .form-row{
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin-bottom: 1.5rem;
    }

    .button-container{
        display: flex;
        justify-content: flex-end;
    }
`;

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
   
    width: 50%;
    height: 90%;
`;