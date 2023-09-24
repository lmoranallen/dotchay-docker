import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import './index.css';
import { routes } from './routes/routes';
import Wrapper from './Wrapper';

const router = createBrowserRouter(routes)

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Wrapper>
        <RouterProvider router={router}/>
      </Wrapper>
  </React.StrictMode>
);
