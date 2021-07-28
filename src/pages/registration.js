import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '../components/StyledElements/Button';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';


const Registration = ({ history }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [gender, setGender] = useState('Female');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const dispatch = useDispatch();

    const userRegister = useSelector((state) => state.userRegister);
    const { loading, error, userInfo } = userRegister;

    useEffect(() => {
        if (userInfo) {
            history.push('/user/dashboard')
        }
    }, [userInfo, history]);

    const handleGender = (event) => {
        setGender(event.target.value);
    };

    const handleFirstName = (event) => {
        setFirstName(event.target.value);
    };

    const handleLastName = (event) => {
        setLastName(event.target.value);
    };

    const handleEmail = (event) => {
        setEmail(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const handlePhone = (event) => {
        setPhone(event.target.value);
    };

    const handleAddress = (event) => {
        setAddress(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(register(firstName, lastName, gender, email, address, phone, password));
    };
    return (
        <RegisterWrapper>
            <FormContainer>
                <RegisterContainer>
                    <div>
                        <h4> Registration </h4>
                    </div>
                    <div className='form-row'>
                        <TextField
                            required
                            label="First Name"
                            id="standard-size-small"
                            size="small"
                            value={firstName}
                            onChange={handleFirstName}
                        />
                        <TextField
                            required
                            label="Last Name"
                            id="standard-size-normal"
                            size="small"
                            value={lastName}
                            onChange={handleLastName}
                        />
                        <TextField
                            required
                            select
                            label="Gender"
                            value={gender}
                            onChange={handleGender}
                            size="small" >
                            {Gender.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
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

                    <div className='form-row'>
                        <TextField
                            id="standard-multiline-flexible"
                            label="Address"
                            size="small"
                            required
                            multiline
                            maxRows={4}
                            value={address}
                            onChange={handleAddress}
                        />
                        <TextField required
                            label="Phone"
                            id="standard-size-normal"
                            size="small"
                            value={phone}
                            onChange={handlePhone}
                        />
                    </div>

                    <Button title={'Submit'} onClick={handleSubmit} />
                </RegisterContainer>
            </FormContainer>
        </RegisterWrapper>
    );
}

export default Registration;

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

const RegisterWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 80vh;
`;

const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
 
    text-align: center;

    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

    border-radius: 8px;

    padding: 1rem 2rem; 
    background-color: #ffff;

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