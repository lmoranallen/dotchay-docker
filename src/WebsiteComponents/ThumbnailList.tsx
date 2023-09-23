import { useEffect, useState } from "react";
import UoB, { Industry } from "../universityGithubDB";
import { query } from '../queries/getGithubRepositories';
import ProjectThumbnail from "./ProjectThumbnail";
import styled from "styled-components";
import RepoSelector from "./RepoSelectionList";

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
const [repoData, setRepoData] = useState<RepoLightweightData[]>([]);
const [selectedRepo, setSelectedRepo] = useState('University');


  const handleChange = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const value = e?.currentTarget?.textContent as string;
    console.log('Input inside: ', e?.currentTarget?.textContent);
    setSelectedRepo(value);
  }

  const preprocessData= (response: any) => {
    let data:RepoLightweightData[]= [];
    response.forEach( (r:any) => {
        const name = r.node.name
        const url = r.node.url
        data.push({name: name, url: url});

    });
    setRepoData(data);
  }

  useEffect(() => {
    console.log('Repo:' ,selectedRepo);
    const repo = selectedRepo === 'University' ? UoB : Industry;
    const getGithubData = async () => {
        const params:any = {
            method: "POST", 
            headers: repo.headers,
            body: JSON.stringify(query)
        };
        const response = await fetch(repo.baseURL, params);
        const json = await response.json();
        if(json) {
          preprocessData(json.data.viewer.repositories.edges);
        }
    };

    getGithubData();
  }, [selectedRepo, setSelectedRepo]);


  return (
    <ThumbnailContainer>
      <RepoSelector onClick={(e:any) => handleChange(e)}/>
      <ThumbnailBlock>
          {repoData.map(item => <ProjectThumbnail key={item.url} title={item.name} link={item.url}/>)}
      </ThumbnailBlock>
    </ThumbnailContainer>
  )
}

export default ThumbnailList;