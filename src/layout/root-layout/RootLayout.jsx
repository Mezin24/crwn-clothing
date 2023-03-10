import { ToastContainer } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import Navigation from '../../components/navigation/Navigation';
import 'react-toastify/dist/ReactToastify.css';

const RootLayout = () => {
  return (
    <>
      <Navigation />
      <Outlet />
      <ToastContainer />
    </>
  );
};
export default RootLayout;
