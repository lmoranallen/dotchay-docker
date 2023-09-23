import styled from "styled-components";
import { colours } from "../utils/colours";
import LeadingTitle from "./LeadingTitle";
import ThumbnailList from "./ThumbnailList";
import RepoSelector from "./RepoSelectionList";


const PageHeader = styled.div`
  background-color: ${colours.magnolia};
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`

const PageContainer = styled.div`
  display: flex;
  height: 36em;
  width: 50%;
  align-self: center;
  margin: 16px;
`

export const ProjectsPage = () => {

    return (
        <>
        <PageHeader>
          <LeadingTitle name={'Projects'}/>
          <PageContainer>
            <ThumbnailList/>
          </PageContainer>
        </PageHeader>
        </>
    );
}