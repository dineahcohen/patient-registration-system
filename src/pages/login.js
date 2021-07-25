import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '../components/StyledElements/Button';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState('');
    const [error, setError] = useState('');

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (e) => {
        console.log(email, password);

        e.preventDefault();

        const userInfo = { email, password }

        axios.post('http://localhost:5000/api/auth/login', userInfo)
            .then(res => console.log(res.data));

        setEmail('');
        setPassword('');
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

    border-radius: 8px;
    border: 1px solid #A5243D;
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