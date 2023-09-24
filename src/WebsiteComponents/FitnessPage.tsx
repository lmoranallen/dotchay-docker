import styled from "styled-components";
import { colours } from "../utils/colours";
import LeadingTitle from "./LeadingTitle";


const PageContainer = styled.div`
  display: flex;
  height: 36em;
  width: 48em;
  align-self: center;
  background-color: ${colours.bluishGrey};
  border-style: solid;
  border-width: 1px;
  border-radius: 16px;
`

export const FitnessPage = () => {
    return (
        <>
          <LeadingTitle name={'Gym and Fitness'}/>
           <PageContainer>
           </PageContainer>
        </>
    );
}