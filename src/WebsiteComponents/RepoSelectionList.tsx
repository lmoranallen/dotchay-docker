import { Dispatch, SetStateAction, useCallback, useState } from "react";
import styled from "styled-components";
import { colours } from "../utils/colours";

type SelectorProps = {
    getRepoType: Dispatch<SetStateAction<string>>;
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
    const { getRepoType } = props;
    const [selectedRepo, setSelectedRepo] = useState('University')
    const hasSelectedIndustryRepo = selectedRepo === 'University';

    const handleSwitch = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const val = event?.currentTarget?.textContent as string;
        setSelectedRepo(val);
        getRepoType(val);
    }

    return (
        <RepoContainer>
            <Block>
                <RepoButton onClick={(e) => handleSwitch(e)}>
                    <ButtonText>University</ButtonText> 
                    {hasSelectedIndustryRepo && <SelectedLine/>}
                </RepoButton>
                <RepoButton onClick={(e)=> handleSwitch(e)}>
                    <ButtonText>Industry</ButtonText>  
                    {!hasSelectedIndustryRepo && <SelectedLine/>}
                </RepoButton> 
            </Block>
        </RepoContainer>

    );
}

export default RepoSelector;