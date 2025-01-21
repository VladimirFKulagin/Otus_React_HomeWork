
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../redux/authSlice';

const Login = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogin = () => {
    // Фиктивная функция входа
    alert('Допустим пользователь вошел');
    dispatch(login()); 
  };

  return (
    <div>
      <h1>Login Page</h1>
      {!isAuthenticated && (<Link className="btn btn-primary" onClick={handleLogin} to="/">Войти</Link>)}
    </div>
  );
};

export default Login;