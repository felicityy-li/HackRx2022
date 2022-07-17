import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import ContactCaregiversPage from "./pages/ContactCaregivers";
import DashboardFeature from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<DashboardFeature />} />
          <Route path="/signin" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="contactCaregiversPage"
            element={<ContactCaregiversPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
