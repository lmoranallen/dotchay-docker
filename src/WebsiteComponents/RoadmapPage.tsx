import styled from "styled-components";
import { colours } from "../utils/colours";
import LeadingTitle from "./LeadingTitle";


const PageHeader = styled.div`
  background-color: ${colours.magnolia};
  height: auto;
  width: 100vw;
  display: flex;
  flex-direction: column;
`

const PageContainer = styled.div`
  display: flex;
  height: 36em;
  width: 48em;
  align-self: center;
  background-color: ${colours.bluishGrey};
  border-style: solid;
  border-width: 1px;
  border-radius: 16px;
  margin: 16px;
`

export const RoadmapPage = () => {
    return (
        <PageHeader>
          <LeadingTitle name={'Roadmaps'}/>
          <PageContainer>
          </PageContainer>
        </PageHeader>
    );
}