import { useEffect, useState } from "react";
import UoB, { Industry } from "../universityGithubDB";
import { query } from '../queries/getGithubRepositories';
import ProjectThumbnail from "./ProjectThumbnail";
import styled from "styled-components";
import RepoSelector from "./RepoSelectionList";

interface RepositoryQueryData {
  repository: RepoLightweightData[];
  name: string;
}

type RepoLightweightData = {
    name: string, 
    url: string,
}

const ThumbnailContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
`

const ThumbnailBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex-wrap: wrap;
`

const ThumbnailList = () => {
const [repoData, setRepoData] = useState<RepositoryQueryData>({repository: [], name: '',});

const [selectorData, setSelectorData] = useState('University');

  const preprocessData= (response: any, name: string) => {
    let data:RepoLightweightData[]= [];
    response.forEach( (r:any) => {
        const name = r.node.name
        const url = r.node.url
        data.push({name: name, url: url});

    });
    setRepoData({repository: data, name: name,});
  }

  useEffect(() => {

    const repo = (selectorData === 'University') ? UoB : Industry;
    console.log('Repo: ', repo, selectorData);

    const getGithubData = async () => {
        const params:any = {
            method: "POST", 
            headers: repo.headers,
            body: JSON.stringify(query)
        };
        const response = await fetch(repo.baseURL, params);
        const json = await response.json();
        if(json) {
          preprocessData(json.data.viewer.repositories.edges, selectorData);
        }
    };

    getGithubData();
  }, [selectorData]);


  return (
    <ThumbnailContainer>
      <RepoSelector getRepoType={setSelectorData}/>
      <ThumbnailBlock>
          {repoData.repository.map(item => <ProjectThumbnail key={item.url} title={item.name} link={item.url}/>)}
      </ThumbnailBlock>
    </ThumbnailContainer>
  )
}

export default ThumbnailList;