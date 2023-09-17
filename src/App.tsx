import './App.css';
import LeadingTitle from './WebsiteComponents/LeadingTitle';
import Page from './WebsiteComponents/StartPage';
import ThumbnailList from './WebsiteComponents/ThumbnailList';
import styled from 'styled-components';
import { colours } from './utils/colours';
import { useState } from 'react';
import DashboardTray from './WebsiteComponents/DashboardTray';


const PageHeader = styled.html`
  background-color: ${colours.magnolia};
  position:relative;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
`

const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: end;
  align-items: end;
`

function App() {
  const [openDashboard, setOpenDashboard] = useState(false);
  

  return (
    <>
    <PageHeader>
    {openDashboard ? <DashboardTray onClose={() => setOpenDashboard(false)} /> : <></>}
    <LeadingTitle name={'chay'} onClick={() => setOpenDashboard(true)}/>
      <Page>
          <ThumbnailContainer>
            <ThumbnailList/>
          </ThumbnailContainer>
          <h1>{`${openDashboard}`}</h1>
      </Page>
    </PageHeader>
    </>
  );
}

export default App;
