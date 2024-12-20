import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./Login";
import Signup from "./Signup";
import SignupConfirmation from "./SignupConfirmation";
import ResetPassword from "./ResetPassword";
import ChangePassword from "./ChangePassword";
import ReportEwaste from "./ReportEwaste";
import Dashboard from "./Dashboard";
import Header from "./Header";
import LearnMore from "./LearnMore";
import ContactUs from "./ContactUs";
import Submissions from "./Submissions";
import EditEwaste from "./EditEwaste";

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/signup-confirmation" element={<SignupConfirmation />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                    <Route path="/change-password" element={<ChangePassword />} />
                    <Route path="/report-ewaste" element={<ReportEwaste />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/header" element={<Header />} />
                    <Route path="/learn-more" element={<LearnMore />} />
                    <Route path="/contact-us" element={<ContactUs />} />
                    <Route path="/all-submissions" element={<Submissions />} />
                    <Route path="/edit-ewaste" element={<EditEwaste />} />
                </Routes>
            </div>
        </Router>
    );
}
export default App;