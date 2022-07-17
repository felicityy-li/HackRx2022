import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/signUpPage" element={<SignUpPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
