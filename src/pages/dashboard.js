import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../components/DashboardCard';

const Dashboard = () => {
    return (
        <DashboardWrapper>
            <DashboardContainer>
                <div className='dashboard-title'>
                    <p> WELCOME</p>
                </div>
                <div className='card-container'>
                    <Link to="/appointment/add">
                        <Card title={'Make Appointment'} content={'gregrbbtb rgregre'} />
                    </Link>

                    <Card title={'View Appointments'} content={'gregrbbtb rgregre'} />
                    <Card title={'Settings'} content={'gregrbbtb rgregre'} />
                </div>

            </DashboardContainer>
        </DashboardWrapper>
    );
}

export default Dashboard;

const DashboardWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const DashboardContainer = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;

    background: #ffff;

    width: 85vw;
    height: 70vh;

    border-radius: 8px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    padding: 2rem;

    .dashboard-title{
        font-size: 24px;
        font-weight: bold;
    }
    
    .card-container{
        display: flex;
        flow-direction: row;
        justify-content: center;
        width: fit-content;

        gap: 40px;

        border: 1px solid #000;

        padding: 1rem;
    }
`;