import { Route, Routes } from 'react-router';
import './App.css';
import MainLayout from './layouts/MainLayout';
import { routes } from './utils/routes';

function App() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Route>
      <Route path='*' element={<div>404</div>} />
    </Routes>
  );
}

export default App;
