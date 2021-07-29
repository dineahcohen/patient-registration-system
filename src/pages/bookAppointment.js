import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextField from '@material-ui/core/TextField';
import Button from '../components/StyledElements/Button';
import { useSelector } from 'react-redux';


const AddAppointment = ({ history }) => {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const [purpose, setPurpose] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handlePurpose = (event) => {
        setPurpose(event.target.value);
    };

    const handleDate = (event) => {
        setDate(event.target.value);
    };

    const handleTime = (event) => {
        setTime(event.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        try {
            const appointment = { user: userInfo.id, purpose, date, time }

            axios.post('http://localhost:5000/api/appointments/add', appointment)
                .then(res => console.log(res.data));

            history.push('/appointment/view');
        } catch (error) {
            console.log(error.response.data.message)
        }
    }

    return (
        <AddAppointmentWrapper>
            <FormContainer>
                <AddAppointmentContainer>
                    <div>
                        <h4> Make Appointment </h4>
                    </div>

                    <div className='form-row'>
                        <TextField
                            required
                            label="Purpose of Visit"
                            id="standard-size-normal"
                            size="normal"
                            value={purpose}
                            onChange={handlePurpose} />

                        <TextField
                            required
                            label="Appointment Date"
                            id="standard-size-normal"
                            size="normal"
                            value={date}
                            onChange={handleDate} />

                        <TextField
                            required
                            label="Appointment Time"
                            id="standard-size-normal"
                            size="normal"
                            value={time}
                            onChange={handleTime} />
                    </div>

                    <div className='button-container'>
                        <Button title={'Submit'} onClick={handleSubmit} />
                    </div>
                </AddAppointmentContainer>
            </FormContainer>
        </AddAppointmentWrapper>
    );
}

export default AddAppointment;

const AddAppointmentWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 80vh;
`;

const AddAppointmentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
 
    text-align: center;

    border-radius: 8px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    background-color: #fff;

    padding: 1rem 2rem; 

    .form-row{
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin-bottom: 1.5rem;
    }

    .button-container{
        display: flex;
        justify-content: center;
    }
`;

const FormContainer = styled.div`
    display: flex;
   
    width: fit-content;
    height: 90%;
`;