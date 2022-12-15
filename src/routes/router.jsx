import {createHashRouter} from 'react-router-dom'
import DecodePage from './decodePage/decode';
import CodePage from './codePage/code';
import Root from './rootPage/root';

const router = createHashRouter([
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