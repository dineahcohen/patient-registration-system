import styled from 'styled-components';

const Card = ({ title, content }) => (
    <CardWrapper>
        <CardContainer>
            <div className='card-title'>
                {title}
            </div>
            <div className='card-content'>
                {content}
            </div>
        </CardContainer>
    </CardWrapper>
);

export default Card;

const CardWrapper = styled.div`
    height: 100%;
    width: 100%;
`;

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;

    background-color: #A5243D;
    color: #fff;

    padding: 2rem;

    width: 9rem;
    height: 10rem;

    border-radius: 8px;

    .card-title{
        display: flex;
        justify-content: center;
        text-align: center;
        font-size: 20px;
        font-weight: bold;

        margin-bottom: 16px; 

        text-align: center;
    }

    .card-content{
        width: 100%;
        height: fit-content;

        display: flex;
        justify-content: center;
    }

    &:hover{
        background: #861D32;
        box-shadow: box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`;