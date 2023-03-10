import { Outlet } from 'react-router-dom';
import Navigation from '../../components/navigation/Navigation';

const RootLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  );
};
export default RootLayout;
