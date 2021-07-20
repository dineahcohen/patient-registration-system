import React, { useState } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import Button from '../components/StyledElements/Button';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };


    return (
        <LoginWrapper>
            <FormContainer>
                <LoginContainer>
                    <div>
                        <h4> Log In </h4>
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

                    <Button title={'Submit'} />
                </LoginContainer>
            </FormContainer>
        </LoginWrapper>
    );
}

export default Login;

const Gender = [
    {
        value: "Female",
        label: "F"
    },
    {
        value: "Male",
        label: "M"
    }
]

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


    border-radius: 8px;
    border: 1px solid #000;
    padding: 1rem 2rem; 

    .form-row{
        display: flex;
        flex-direction: row;
        gap: 30px;
    }

    .button-container{
        display: flex;
        justify-content: flex-end;
    }
`;

const FormContainer = styled.div`
    display: flex;
    justify-content: center;
    height: 90%;
    width: 50%;
`;