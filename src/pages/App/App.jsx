import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import NewOrderPage from '../NewOrderPage/NewOrderPage';
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';
import NavBar from '../../components/NavBar/NavBar/NavBar';
import HomePage from '../HomePage/HomePage';
import { getUser } from '../../utilities/users-service';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<HomePage user={user} setUser={{setUser}} />} />
        <Route path="/orders/new" element={<NewOrderPage user={user}/>} />
        <Route path="/orders" element={<OrderHistoryPage user={user} />} />
        {user ? (
          <>

          </>
        ) : (
          <>
            <Route path="/auth" element={<AuthPage setUser={setUser} />} />
          </>
        )}
      </Routes>
    </main>
  );
}