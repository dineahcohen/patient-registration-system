import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '../components/StyledElements/Button';
import Error from '../components/Error';

const Login = ({ history }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        const userInfo = localStorage.getItem("userInfo");

        if (userInfo) {
            history.push("/user/dashboard")
        }
    }, [history])

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (e) => {
        console.log(email, password);

        e.preventDefault();

        try {
            const userInfo = { email, password }

            axios.post('http://localhost:5000/api/auth/login', userInfo)
                .then(res => console.log(res.data));

            localStorage.setItem("userInfo", JSON.stringify(userInfo));

        } catch (error) {
            setError(error.response.data.message)
        }

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

                    {error && <Error> {error} </Error>}

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
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

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