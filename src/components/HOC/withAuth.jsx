
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// Определяем HOC
const withAuth1 = (WrappedComponent) => {
  const HOC = ({ isAuthenticated, ...props }) => {
    
    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }
    return <WrappedComponent {...props} />;
  };

  HOC.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired, 
  };

  // Подключаем HOC к Redux для получения состояния аутентификации
  const mapStateToProps = (state) => ({
    isAuthenticated: state.isAuthenticated,
  });

  return connect(mapStateToProps)(HOC);
};

export default withAuth1;