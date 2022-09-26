import "../styles/App.css";
import Answer from "./Answer/Answer";
import Layout from "./Layout/Layout";
import Quize from "./Quize/Quize";
import Login from "./Login/Login";
import Home from "./Pages/Home";
import SignUp from "./SignUp/SignUp";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoFound from "./Pages/NoFound";
import { AuthProvider } from "../context/Authcontext";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/quize" element={<Quize />} />
            <Route exact path="/answer" element={<Answer />} />
            <Route exact path="*" element={<NoFound />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
