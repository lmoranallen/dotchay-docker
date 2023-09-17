import './App.css';
import LeadingTitle from './WebsiteComponents/LeadingTitle';
import Page from './WebsiteComponents/StartPage';
import ThumbnailList from './WebsiteComponents/ThumbnailList';
import styled from 'styled-components';
import { colours } from './utils/colours';


const PageHeader = styled.div`
  background-color: ${colours.magnolia};
`

const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: end;
  align-items: end;
`

function App() {

  return (
    <PageHeader>
    <LeadingTitle name={'chay'} colour={'#90AA86'}/>
      <Page>
          <ThumbnailContainer>
            <ThumbnailList/>
          </ThumbnailContainer>
      </Page>
    </PageHeader>
  );
}

export default App;
