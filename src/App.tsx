import './App.css';
import LeadingTitle from './WebsiteComponents/LeadingTitle';
import styled from 'styled-components';
import { useState } from 'react';
import DashboardTray from './WebsiteComponents/DashboardTray';


const TopBanner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const App:React.FC = () => {
  const [openDashboard, setOpenDashboard] = useState(false);

  return (
    <>
      {openDashboard ? <DashboardTray onClose={() => setOpenDashboard(false)} /> : <></>}
      <TopBanner>
        <LeadingTitle name={'chay'} onClick={() => setOpenDashboard(true)}/>
      </TopBanner>
    </> 
  )
}

export default App;
