import 'materialize-css';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar.js';
import { AuthContext } from './context/AuthContext.js';
import { useAuth } from './hooks/auth.hook.js';
import { Loader } from './components/Loader.js';
import useRoutes from './routes.js';

function App() {
  const {token, login, logout, userId, loading} = useAuth();
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

if (!loading){
  return <Loader />
}

  return (
    <AuthContext.Provider value={{
      token, login, logout, userId, isAuthenticated
    }}>
    <BrowserRouter>
    {isAuthenticated && <Navbar />}
    <div className="container">
      {routes}
    </div>
    </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
