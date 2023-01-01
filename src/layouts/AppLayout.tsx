import { Outlet } from 'react-router-dom';
import Header from '../components/common/Header';

const AppLayout = () => (
  <main role="main" className="min-h-screen">
    <Header />
    <Outlet />
  </main>
);

export default AppLayout;
