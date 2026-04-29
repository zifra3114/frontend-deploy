import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './pages/login';
import Register from './pages/register';
import Dashboard from './pages/dashboard';
import PrivateRoute from './components/priveteRoute';
export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/dashboard' element={
            <PrivateRoute><Dashboard /></PrivateRoute>
          } />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}