
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import NotFound from './components/pages/NotFound';
import HomePage from './components/pages/HomePAge';
import NavPanel from './components/pages/NavPanel';
import 'bootstrap/dist/css/bootstrap.min.css';
//import withAuth from './components/HOC/withAuth';

const App = () => {
  //const AuthHomePage = withAuth(HomePage); // Используем HOC здесь

  return (
    <div>
      <NavPanel/>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
           <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} /> 
        </Routes>
      </Router>
    </div>
  );
};

export default App;