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
  position:absolute;
  top: 0;
  left: 0;
  height: auto;
  width: 100vw;
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 36em;
  justify-content: end;
  align-items: end;
  background-color: ${colours.bluishGrey};
  border-style: solid;
  border-width: 1px;
  border-radius: 16px;
  margin-right: 16px;
`

function App() {
  const [openDashboard, setOpenDashboard] = useState(false);
  

  return (
    <>
    {openDashboard ? <DashboardTray onClose={() => setOpenDashboard(false)} /> : <></>}
    <PageHeader>
    <LeadingTitle name={'chay'} onClick={() => setOpenDashboard(true)}/>
      <Page>
          <PageContainer>

          </PageContainer>
      </Page>
    </PageHeader>
    </>
  );
}

export default App;
