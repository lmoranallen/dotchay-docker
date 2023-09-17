import { useEffect, useState } from "react";
import UoB from "../universityGithubDB";
import {query as UOBQuery} from '../queries/getUniversityGithubRepositories';
import ProjectThumbnail from "./ProjectThumbnail";
import styled from "styled-components";

type RepoLightweightData = {
    name: string, 
    url: string,
}

const ThumbnailBlock = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const ThumbnailList = () => {
const [repoData, setRepoData] = useState<RepoLightweightData[]>([]);

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
    const getGithubData = async () => {
        const params:any = {
            method: "POST", 
            headers: UoB.headers,
            body: JSON.stringify(UOBQuery)
        };
        const response = await fetch(UoB.baseURL, params);
        const json = await response.json();
        console.log('JSON DATA: ', json);
        if(json) {
          preprocessData(json.data.viewer.repositories.edges);
        }
    };

    getGithubData();
  }, []);


  return (
    <ThumbnailBlock>
        {repoData.map(item => <ProjectThumbnail key={item.url} title={item.name} description={item.url}/>)}
    </ThumbnailBlock>
  )
}

export default ThumbnailList;