import { Route, Routes, useNavigate } from 'react-router';
import './App.css';
import MainLayout from './layouts/MainLayout';
import { routes } from './utils/routes';
import SignIn from './pages/signIn/SignIn';
import { useEffect, useState } from 'react';

function App() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(true);
  const [auth, setAuth] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          navigate('/signin');
          return;
        }

        setAuth({ token });
      } catch (err) {
        console.log('err', err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      {auth ? (
        <Route path='/' element={<MainLayout />}>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
            />
          ))}
        </Route>
      ) : (
        <Route path='/signin' element={<SignIn />} />
      )}

      <Route path='*' element={<div>404</div>} />
    </Routes>
  );
}

export default App;
