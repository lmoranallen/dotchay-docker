import styled from 'styled-components';
import { colours } from '../utils/colours';
import { Link } from 'react-router-dom';

type LeadingTitleProps = {
    name: string, 
    onClick?: () => void;
};

const TitleLink = styled(Link)`
    text-decoration: none;
`


const Title = styled.h1`
    font-size: 8em;
    text-align: start;
    justify-content: start;
    color: ${colours.softGreen};
    margin-top: 0px;
    margin-bottom: 16px;
    margin-left: 8px;
`;

const LeadingTitle = (props: LeadingTitleProps) => {
    const { name: title, onClick } = props;
    return <div onClick={onClick}><TitleLink to={'/'}><Title>{title}</Title></TitleLink></div>
}



export default LeadingTitle;