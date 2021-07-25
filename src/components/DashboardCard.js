import styled from 'styled-components';

const Card = ({ title, content }) => (
    <CardWrapper>
        <CardContainer>
            <div>
                {title}
            </div>
            <div>
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

    width: 10rem;
    height: 11rem;

    border-radius: 8px;

    ${'' /* box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px; */}

    .card-title{
        display: flex;
        text-align: center;
        font-size: 30px;
    }
`;