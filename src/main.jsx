import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux';
import store from './store';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import BussinessName from './dashboard/BussinessName.jsx';
import DescriptionDetails from './dashboard/DescriptionDetails.jsx';
import ImageList from './dashboard/ImageList.jsx';
import Login from './login/Login.jsx';
import Test from './test/Test.jsx';
import Preview from './dashboard/Preview.jsx';
import Editor from './dashboard/editor/Editor.jsx';


const router = createBrowserRouter([
  {
    path: "/name",
    element: <BussinessName />,
  },
  {
    path: "/name",
    element: <BussinessName />
  },
  {
    path: '/description',
    element: <DescriptionDetails />
  },
  {
    path: '/image',
    element: <ImageList />,
  },
  {
    path: "/design",
    element: <App />,
  },
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/preview",
    element: <Preview />,
  },
  {
    path: "/editor",
    element: <Editor />
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>
    <RouterProvider router={router} />

  </Provider>

)
