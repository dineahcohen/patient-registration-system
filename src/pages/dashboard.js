import React from 'react';
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
                    <Card title={'test'} content={'gregrbbtb rgregre'} />
                    <Card title={'test'} content={'gregrbbtb rgregre'} />
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