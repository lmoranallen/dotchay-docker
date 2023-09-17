import styled from "styled-components";
import { colours } from "../utils/colours";

interface PageProps {
    pageName?: number
    children: React.ReactNode
}

const PageStyling = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
`

const PageRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: end;
`


export const Page:React.FC<PageProps> = ({children, pageName}) => {
    return (
        <PageStyling>
            <PageRow>{children}</PageRow>
        </PageStyling> 
    )   
}
    
export default Page;