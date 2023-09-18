import styled from "styled-components";
import { colours } from "../utils/colours";
import { Link } from "react-router-dom";

const ErrorContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`

const ErrorBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ErrorTitle = styled.h1`
    font-size: 48px;
`

const ErrorMessage = styled.p`
    font-size: 20px;
`

const GoBackButton = styled.div`
    background-color: ${colours.softGreen};
    border-radius: 8px;
    padding: 16px 8px;
`

const ErrorPage = () => {
    return (
        <ErrorContainer>
            <ErrorBlock>
                <ErrorTitle>Error. Route not present, page not found.</ErrorTitle>
                <ErrorMessage>We're very sorry that this isn't available at the moment. Please try again later.</ErrorMessage>
                <Link to={'/'}><GoBackButton>Return to Front Page</GoBackButton></Link>
            </ErrorBlock>
        </ErrorContainer>
    )
};

export default ErrorPage;
