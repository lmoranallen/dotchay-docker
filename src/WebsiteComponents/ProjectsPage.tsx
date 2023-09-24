import styled from "styled-components";
import LeadingTitle from "./LeadingTitle";
import ThumbnailList from "./ThumbnailList";

const PageContainer = styled.div`
  display: flex;
  width: 50%;
  align-self: center;
  margin-bottom: 16px;
  padding-bottom: 16px;
`

export const ProjectsPage = () => {

    return (
        <>
          <LeadingTitle name={'Projects'}/>
          <PageContainer>
            <ThumbnailList/>
          </PageContainer>
        </>
    );
}