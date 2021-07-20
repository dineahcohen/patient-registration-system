import React, { useState } from 'react';
import styled from 'styled-components';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TextField from '@material-ui/core/TextField';
import Button from '../components/StyledElements/Button';


const AddAppointment = () => {
    const [purpose, setPurpose] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);

    const handlePurpose = (event) => {
        setPurpose(event.target.value);
    };

    const handleDate = (date) => {
        setSelectedDate(date);
    };

    const handleTime = (time) => {
        setSelectedTime(time);
    };


    console.log(new Date())
    return (
        <AddAppointmentWrapper>
            <FormContainer>
                <AddAppointmentContainer>
                    <div>
                        <h4> Add Appointment </h4>
                    </div>

                    <div className='form-row'>
                        <TextField
                            required
                            label="Purpose of Visit"
                            id="standard-size-normal"
                            size="normal"
                            value={purpose}
                            onChange={handlePurpose} />


                        <DatePicker
                            selected={selectedDate}
                            onChange={handleDate}
                            dateFormat='dd/MM/yyyy'
                            minDate={new Date()}
                            withPortal
                            portalId="root-portal"
                            placeholderText='Appointment Date'
                        />

                        <DatePicker
                            selected={selectedTime}
                            onChange={handleTime}
                            dateFormat="h:mm aa"
                            showTimeSelect
                            showTimeSelectOnly
                            timeIntervals={30}
                            timeCaption="Time"
                            withPortal
                            portalId="root-portal"
                            placeholderText='Appointment Time'
                        />
                    </div>

                    <Button title={'Submit'} />
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
   
    width: fit-content;
    height: 90%;
`;