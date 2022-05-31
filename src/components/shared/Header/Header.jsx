import styles from './header.module.css';
import PropTypes from 'prop-types';

function Header(props) {
  const { heading } = props;
  return (
    <h1 className={styles['header__heading'] + ' ' + styles['basket-header']}>
      {heading}
    </h1>
  );
}

Header.propTypes = {
  heading: PropTypes.string,
};

export default Header;
