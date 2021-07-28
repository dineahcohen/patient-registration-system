import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Card from '../components/DashboardCard';
import settings from '../assets/settings.svg';
import addAppointment from '../assets/add-appointment.svg'
import view from '../assets/view.svg';
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    console.log("test", userInfo)
    return (
        <DashboardWrapper>
            <DashboardContainer>
                <div className='dashboard-title'>
                    <p> Welcome, {userInfo && userInfo.firstName}</p>
                </div>
                <div className='card-container'>
                    <Link to="/appointment/add" className='link-style'>
                        <Card title={'Make an Appointment'}
                            content={<img src={addAppointment} className="card-img" />} />
                    </Link>

                    <Link to='/appointment/view' className='link-style'>
                        <Card title={'View All Appointments'}
                            content={<img src={view} className="card-img" />} />
                    </Link>

                    <Link to='/user/settings' className='link-style'>
                        <Card title={'Edit User Profile'}
                            content={<img src={settings} className="card-img" />} />
                    </Link>
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

    width: fit-content;
    height: 70vh;

    border-radius: 8px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    padding: 1rem;

    .dashboard-title{
        font-size: 24px;
        font-weight: bold;
        margin-left: 1.5rem;
    }
    
    .card-container{
        display: flex;
        flow-direction: row;
        justify-content: center;
        width: fit-content;

        gap: 40px;

        padding: 1rem;
    }

    .link-style{
        text-decoration: none;
    }
    
    .card-img{
        height: 5rem;
        width: 5rem;
    }
`;