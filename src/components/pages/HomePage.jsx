import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/authSlice';
import { Link } from 'react-router-dom';

const HomePage = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);


    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <div>
            <h1>Home Page</h1>
            {isAuthenticated ? (
                <div>
                    <h2>Добро пожаловать!</h2>
                    {isAuthenticated && (<Link className="btn btn-primary" onClick={handleLogout} to="/">Выйти</Link>)}
                </div>
            ) : (
                <div>
                    <h2>Пожалуйста авторизируйтесь</h2>
                </div>
            )}
        </div>
    );
};

export default HomePage;