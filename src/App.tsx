import { useEffect, useState } from 'react';
import UoB from './universityGithubDB';
import {query as UOBQuery} from './queries/getUniversityGithubRepositories';
import logo from './logo.svg';
import './App.css';
import LeadingTitle from './WebsiteComponents/LeadingTitle';
import Page from './WebsiteComponents/StartPage';
import ProjectThumbnail from './WebsiteComponents/ProjectThumbnail';
import ThumbnailList from './WebsiteComponents/ThumbnailList';

function App() {

  return (
    <Page>
        <LeadingTitle name={'lee.chay'} colour={'#90AA86'}/>
        <ThumbnailList/>
    </Page>
  );
}

export default App;
