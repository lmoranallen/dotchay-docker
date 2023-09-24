import styled from "styled-components";
import { colours } from "./utils/colours";


interface Page {
    pageTitle?: string,
    children: React.ReactNode,
  }


const PageStyling = styled.div`
    background-color: ${colours.magnolia};
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
`;

const PageRow = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: start;
`

const Wrapper:React.FC<Page> = ({children}) => {

    return (
      <PageStyling>
        <PageRow>
            {children}
        </PageRow>
        
      </PageStyling> 
    )
  }
  
  export default Wrapper;