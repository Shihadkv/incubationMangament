import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminApplication from './Pages/AdminApplication';
import AdminLoginPage from './Pages/AdminLoginPage';
import AdminRecordings from './Pages/AdminRecordings';
import AdminSlotBooking from './Pages/AdminSlotBooking';
import LoginPage from "./Pages/LoginPage";
import Processing from './Pages/Processing';
import RegisterPage from './Pages/RegisterPage';
import UserHomePage from './Pages/UserHomePage';
import Application from './Store/ApplicationContext'
import Adminslot from './Pages/Adminslot';
import UserStatus from './Pages/UserStatus'


function App() {
  return (
    <div >
      <Application>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path='/UserStatus' element={<UserStatus />} />
            <Route path="/signup" element={<RegisterPage />} />
            <Route path="/home" element={<UserHomePage />} />
            <Route path="/processing" element={<Processing />} />
            <Route path="/admin" element={<AdminLoginPage />} />
            <Route path="/admin/applicationList" element={<AdminApplication />} />
            <Route path="/admin/recordtrack" element={<AdminRecordings />} />
<<<<<<< HEAD
            <Route path="admin/bookingslots" element={<Adminslot/>}/>
=======
            <Route path="/admin/bookingslots" element={<AdminSlotBooking />} />


>>>>>>> d365b393d711fdae6e245a78e6f74569dc6b78d9

          </Routes>
        </BrowserRouter>
      </Application>

    </div>
  );
}

export default App;
