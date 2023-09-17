import styled from "styled-components";

interface ThumbnailProps {
    title?: string;
    image?: string;
    description?: string;
}



const OuterBlock = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items; center;
    border-style: solid;
    border-width: 4px;
    border-color: #3E5C76;  
`

const RepoImage = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1em;
    border-style: solid;
    border-width: 1px;
    border-color: #3E5C76;
    width: 50%;
    height: auto;
`

const ThumbnailTitle = styled.h4`
    text-align: center;
`
const ThumbnailDescription = styled.p`
    text-align: center;
`

const ProjectThumbnail = (props: ThumbnailProps) => {
    const { title, image, description } = props;
    const defaultImage = 'https://cdn.cloudflare.steamstatic.com/steam/apps/960090/capsule_616x353.jpg?t=1689560104';
    return (
        <OuterBlock>
            <RepoImage src={image ?? defaultImage}/>
            <ThumbnailTitle>{title}</ThumbnailTitle>
            <ThumbnailDescription>{description}</ThumbnailDescription>
        </OuterBlock>
    )
}

export default ProjectThumbnail;