import { createBrowserRouter } from 'react-router-dom';
import AppLayout from '../layouts/AppLayout';
import ErrorPage from '../components/common/ErrorPage';
import Home from '../pages/Home';
import View from '../pages/View';
import Search from '../pages/Search';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/search',
        element: <Search />
      },
      {
        path: '/:type/:id',
        element: <View />
      },
      {
        path: '*',
        element: <ErrorPage />
      }
    ]
  }
]);

export default routes;
