import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";
import ContactCaregiversPage from "./pages/ContactCaregivers";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ContactCaregiversPage />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/signUpPage" element={<SignUpPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
