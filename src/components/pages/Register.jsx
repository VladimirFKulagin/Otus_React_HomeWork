
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/authSlice';
import { Link } from 'react-router-dom';

const Register = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleRegister = () => {
    // Фиктивная функция регистрации
    alert('Допустим что пользователь зарегистрировался и вошел');
    dispatch(login());
  };

  return (
    <div>
      <h1>Register Page</h1>
      {!isAuthenticated && (<Link className="btn btn-primary" onClick={handleRegister} to="/">Регистрация</Link>)}
    </div>
  );
};

export default Register;