import Root from './root';
import {createBrowserRouter} from 'react-router-dom'
import Home from './home';
import CodePage from './code';
import DecodePage from './decode';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children:[
        {
          path:'/code',
          element:<CodePage/>
        },
        {
          path:'/decode',
          element:<DecodePage/>
        }
      ]
    },
  ]);
export default router;