import React from 'react'
import styled from 'styled-components';
import { colours } from '../utils/colours';

type LeadingTitleProps = {
    name: string, 
    colour: string, 
};

const PrettyTitle = styled.h1`
        font-size: 8em;
        text-align: start;
        justify-content: start;
        color: ${colours.softGreen};
        margin-top: 8px;
        margin-left: 8px;
    `;

const LeadingTitle = (props: LeadingTitleProps) => {
    const { name: title, colour: dotColour } = props;
    return <PrettyTitle>.{title}</PrettyTitle>
}

export default LeadingTitle;