import styled from "styled-components";
import { colours } from "../utils/colours";
import LeadingTitle from "./LeadingTitle";



const RoadmapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  background-color: ${colours.bluishGrey};
  height: 36em;
  width: 48em;
  border-style: solid;
  border-width: 1px;
  border-radius: 16px;
  margin: 16px;
`

export const RoadmapPage = () => {
    return (
        <>
          <LeadingTitle name={'Roadmaps'}/>
          <RoadmapContainer>
          </RoadmapContainer>
        </>
    );
}