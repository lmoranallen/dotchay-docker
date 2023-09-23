import App from "../App";
import ErrorPage from "../WebsiteComponents/ErrorPage";
import { FitnessPage } from "../WebsiteComponents/FitnessPage";
import { PersonalPage } from "../WebsiteComponents/PersonalPage";
import { ProjectsPage } from "../WebsiteComponents/ProjectsPage";
import { RoadmapPage } from "../WebsiteComponents/RoadmapPage";

export const routes = [
  {
    path: '/', 
    element: <App/>,
    errorElement: <ErrorPage />,
  }, 
  {
    path: '/about',
    element: <PersonalPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/projects/uni',
    element: <ProjectsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/fitness', 
    element: <FitnessPage/>,
    errorElement: <ErrorPage />,
  }, 
  {
    path: '/roadmaps',
    element: <RoadmapPage />,
    errorElement: <ErrorPage />,
  }
]