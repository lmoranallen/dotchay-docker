import styled from "styled-components";
import { colours } from "../utils/colours";
import { Link } from "react-router-dom";

type DashboardProps = {
    onClose: () => void;
}

const TrayView = styled.div`
    position: fixed;
    display: block;
    height: 100vh;
    width: 20%;
    z-index: 10;
    background-color: ${colours.bluishGrey};
`

const TrayList = styled.ul`
    list-style-type: none;
`

const TrayItem = styled.li`
    background-opacity: 75%;
    border-style: solid;
    border-width: 1px;
    padding: 2em;
    margin: 16px;
    text-color: white;
`

const TrayItemLink = styled.div`
    padding: 1em;
    text-color: white;
`

const CloseDashboard = styled.div`
    padding: 4px;
    border-style: solid;
    z-index: 15;
    background-color: ${colours.saffronYellow};
`

const DashboardTray = (props: DashboardProps) => {
    const {onClose} = props;
    return (
        <TrayView>
            <TrayList>
                <TrayItem>
                        <Link to={'/about'}><TrayItemLink>About Me</TrayItemLink></Link>
                </TrayItem>
                <TrayItem>
                    <Link to={'/projects/uni'}><TrayItemLink>Projects</TrayItemLink></Link>
                </TrayItem>
                <TrayItem>
                <Link to={'/roadmaps'}><TrayItemLink>Development Roadmaps</TrayItemLink></Link>
                </TrayItem>
                <TrayItem>
                <Link to={'/fitness'}><TrayItemLink>Gym and Fitness</TrayItemLink></Link>
                </TrayItem>
                <TrayItem>
                <Link to={'/error'}><TrayItemLink>Visuals [TBA]</TrayItemLink></Link>
                </TrayItem>
                <TrayItem><CloseDashboard onClick={onClose}> X</CloseDashboard></TrayItem>
            </TrayList>
        </TrayView>
    )
}

export default DashboardTray;