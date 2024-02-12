// libraries
import { Outlet} from 'react-router-dom';

// components
import Header from './Header';
import Footer from './Footer';

function Layout() {
  return (
    <>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Layout;