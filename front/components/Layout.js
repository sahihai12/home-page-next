import Footer from './Footer';
import Header from './Header';

const Layout = ({ children , pageClass}) => (
  <div>
    <Header />
    <main className={`${pageClass}`}>{children}</main>
    <Footer />
  </div>
);

export default Layout;
