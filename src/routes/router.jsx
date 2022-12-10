import Root from './root';
import {createBrowserRouter} from 'react-router-dom'
import Home from './home';
import CodePage from './code';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children:[
        {
          path:'/code',
          element:<CodePage/>
        }
      ]
    },
  ]);
export default router;