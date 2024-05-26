import { BrowserRouter, Routes, Route ,Navigate} from 'react-router-dom';
import { UserPage } from './pages/UserPage';
import UserFormPage from './pages/UserFormPage';
import {Navigation} from './components/Navigation';


export const App = () => {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
        
        <Route path="/" element={ <Navigate to="/user" />}/>
        <Route path="/user" element={<UserPage />} />
        <Route path="/create-user" element={<UserFormPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;