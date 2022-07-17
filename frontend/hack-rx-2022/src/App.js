import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import ContactCaregiversPage from "./pages/ContactCaregivers";
import DashboardFeature from "./pages/Dashboard";
import AddProfilePage from "./pages/AddProfile";
import DummyHardcodedProfile from "./pages/DummyHardcodedProfile";
import AllVaccinesInfoList from './pages/VaccinesListInfo'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<DashboardFeature />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/sign_up" element={<SignUpPage />} />
          <Route
            path="/contact_caregivers"
            element={<ContactCaregiversPage />}
          />
          <Route path="/add_profile_page" element={<AddProfilePage />} />
          <Route path="/dummy_profile" element={<DummyHardcodedProfile />} />
          <Route path="/vaccines_info_list" element={<AllVaccinesInfoList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
