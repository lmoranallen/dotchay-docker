import styled from "styled-components";

interface PageProps {
    pageName?: number
    children: React.ReactNode
}

const PageStyling = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 1em;
    background-color: #F8F0FB;
`


export const Page:React.FC<PageProps> = ({children, pageName}) => {
    return <PageStyling>{children}</PageStyling>    
}
    
export default Page;