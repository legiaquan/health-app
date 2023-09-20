import PropTypes from 'prop-types';
import { HeaderMenu } from '@/components/HeaderMenu';
import { Footer } from '../../components/Footer';
import ScrollButton from '../../components/Button/ScrollButton';

function Layout({ children }) {
  return (
    <div>
      <ScrollButton />
      <HeaderMenu />
      {children}
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
