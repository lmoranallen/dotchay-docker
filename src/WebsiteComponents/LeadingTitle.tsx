import React, { ButtonHTMLAttributes, useState } from 'react'
import styled from 'styled-components';
import { colours } from '../utils/colours';

type LeadingTitleProps = {
    name: string, 
    onClick: () => void;
};



const Title = styled.h1`
    font-size: 8em;
    text-align: start;
    justify-content: start;
    color: ${colours.softGreen};
    margin-top: 0;
    margin-left: 8px;
`;

const LeadingTitle = (props: LeadingTitleProps) => {
    const { name: title, onClick } = props;
    return <div onClick={onClick}><Title>{title}</Title></div>
}



export default LeadingTitle;