import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../components/DashboardCard';

const Dashboard = () => {
    return (
        <DashboardWrapper>
            <DashboardContainer>
                <div>
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
    flex-direction: column;

    background: #ffff;

    width: 85vw;
    height: 70vh;

    border-radius: 8px;

    padding: 2rem;
    .dashboard-title{
        font-size: 36;
        font-weight: bold;
    }
    
    .card-container{
        display: flex;
        width: fit-content;

        gap: 30px;
    }
`;