import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import FetchAllTrain from './component/train/FetchAllTrain';
import FetchTrain from './component/train/FetchTrain';
import FetchAllBooking from './component/booking/FetchAllBooking';
import FetchBooking from './component/booking/FetchBooking';
import ReserveTicket from './component/booking/ReserveTicket';
import CheckPNRStatus from './component/pnr/CheckPNRStatus';
import HomePage from './component/home/HomePage';
import SearchTrain from './component/train/SearchTrain';
import UpdatePnr from './component/pnr/UpdatePnr';
import FetchAllFare from './component/fare/FetchAllFare';
import FetchFare from './component/fare/FetchFare';
import AddFare from './component/fare/AddFare';
import EditFare from './component/fare/EditFare';
import CreateTrain from './component/train/CreateTrain';
import EditTrain from './component/train/EditTrain';
import FetchAllUsers from './component/user/FetchAllUsers';
import FetchUser from './component/user/FetchUser';
import CreateUser from './component/user/CreateUser';
import EditUser from './component/user/EditUser';
import UserLogin from './component/user/UserLogin';
import FetchAllTrain1 from './component/train/FetchAllTrain1';
import FetchTrain1 from './component/train/FetchTrain1';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/user/all" element={<FetchAllUsers />} />
          <Route path="/user/all/:id" element={<FetchUser />} />
          <Route path="/user/save" element={<CreateUser />} />
          <Route path="/user/edit/:id" element={<EditUser />} />
          <Route path="/user/login" element={<UserLogin />} />
          <Route path="/train/all" element={<FetchAllTrain />} />
          <Route path="/train1/all" element={<FetchAllTrain1 />} />
          <Route path="/train/all/:id" element={<FetchTrain />} />
          <Route path="/train1/all/:id" element={<FetchTrain1 />} />
          <Route path="/train/edit/:id" element={<EditTrain />} />
          <Route path="/train/search/:id" element={<FetchTrain />} />
          <Route path="/train/add" element={<CreateTrain />} />
          <Route path="/booking/all" element={<FetchAllBooking />} />
          <Route path="/booking/all/:id" element={<FetchBooking />} />
          <Route path="/booking/add/:id" element={<ReserveTicket />} />
          <Route path="/pnr/status/:id" element={<CheckPNRStatus />} />
          <Route path="/train/search" element={<SearchTrain />} />
          <Route path="/pnr/update" element={<UpdatePnr />} />
          <Route path="/fare/all" element={<FetchAllFare />} />
          <Route path="/fare/all/:id" element={<FetchFare />} />
          <Route path="/fare/add" element={<AddFare />} />
          <Route path="/fare/edit/:id" element={<EditFare />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
