import { useState } from "react";
import styled from "styled-components";
import { colours } from "../utils/colours";

type SelectorProps = {
    onClick?: (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const RepoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 6em;
`

const Block = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
`

const RepoButton = styled.div`
    padding: 4px 16px;
    margin-left: 36px;
    margin-right: 36px;
`

const ButtonText = styled.h4`
    font-size: 24px;
    color: ${colours.softGreen}
`

const SelectedLine = styled.hr`
    border-style: solid;
    border-width: 4px;
    border-color: ${colours.bluishGrey};

`

const RepoSelector = (props: SelectorProps) => {
    const [selectedRepo, setSelectedRepo] = useState('University')
    const hasSelectedIndustryRepo = selectedRepo === 'University';

    const handleSelect = (e?: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const value = e?.currentTarget?.textContent as string;
        setSelectedRepo(value);
    }; 

    return (
        <RepoContainer>
            <Block>
                <RepoButton onClick={(e) => handleSelect(e)}>
                    <ButtonText>University</ButtonText> 
                    {hasSelectedIndustryRepo && <SelectedLine/>}
                </RepoButton>
                {/* {hasSelectedIndustryRepo && <SelectedLine/>} */}
                <RepoButton onClick={(e)=> handleSelect(e)}>
                    <ButtonText>Industry</ButtonText>  
                    {!hasSelectedIndustryRepo && <SelectedLine/>}
                </RepoButton>
                {/* {!hasSelectedIndustryRepo && <SelectedLine/>} */}   
            </Block>
        </RepoContainer>

    );
}

export default RepoSelector;