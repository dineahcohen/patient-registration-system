import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import healthcareGroup from '../assets/healthcare-fight.svg';
import Button from '../components/StyledElements/Button';
import { useSelector } from 'react-redux';

const Landing = ({ history }) => {
    const userLogin = useSelector((state) => state.userLogin);
    const { userInfo } = userLogin;

    const handleSchedule = () => {
        if (userInfo) {
            history.push('/user/dashboard')
        }
        else {
            history.push('/error')
        }
    }
    return (
        <LandingWrapper>
            <LandingContainer>
                <ContentContainer>
                    <div className="inner-content">
                        <div className='landing-title'>
                            We Take Care Of Your Health
                        </div>

                        <div className="landing-subtitle">
                            Health problems, even minor ones, can interfere with or even overshadow other
                            aspects of your life. Even relatively minor health issues such as aches, pains,
                            lethargy, and indigestion.
                        </div>
                        <Button title={'Schedule appointment'} onClick={handleSchedule} />
                    </div>
                </ContentContainer>

                <ImageContainer>
                    <img src={healthcareGroup} className='landing-image' />
                </ImageContainer>
            </LandingContainer>
        </LandingWrapper>
    );
}

export default Landing;

const LandingWrapper = styled.div`
    display: flex;
    justify-content: center;
`;

const LandingContainer = styled.div`
    display: flex;
    flex-direction: row;

    margin: 1rem;
    padding: 1rem;

    background-color: #ffff;

    height: 65vh;
    width: 80vw;

    border-radius: 8px;
`;

const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
    
    width: 58%;

    .landing-image{
        height: 100%;
        width: 100%;
        margin: 1rem 0rem;
    }
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;

    width: 42%;
    height: fit-content;

    .inner-content{
        display: flex;
        flex-direction: column;

        gap: 25px;

        margin: 1rem;
    }

    .landing-title{
        font-size: 48px;
        font-weight: bold;
        color: #00003D;
    }

    .landing-subtitle{
        font-size: 16px;
        color: #42434C;
    }
`;