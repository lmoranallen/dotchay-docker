import styled from "styled-components";
import { colours } from "../utils/colours";

type DashboardProps = {
    onClose: () => void;
}

const TrayView = styled.div`
    position: sticky;
    display; flex;
    inset: 0;
    height: 100vh;
    flex: 1 0 auto;
    width: 20%;
    z-index: 10;
    background-color: ${colours.bluishGrey};
    margin: 0;
    padding: 0;
`

const TrayItem = styled.div`
    background-opacity: 75%;
    padding: 1em;
    text-color: white;
`

const CloseDashboard = styled.div`
    padding: 4px;
    border-style: solid;
    background-color: ${colours.saffronYellow};
`

const DashboardTray = (props: DashboardProps) => {
    const {onClose} = props;
    return (
        <>
    
        <TrayView>
            <TrayItem>
                <ul>
                    <li>About Me</li>
                    <li>University Projects</li>
                    <li>Hobbies</li>
                    <li>Visuals [TBA]</li>
                    <li>Data Mapping</li>
                </ul>
                <CloseDashboard onClick={onClose}> X</CloseDashboard>
            </TrayItem>
        </TrayView>
        </>
    )
}

export default DashboardTray;