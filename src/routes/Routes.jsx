import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProjectPage from "../pages/ProjectPage";
import BackgroundVideo from "../components/BackgroundVideo";

// Lazy-loaded components for better performance
// const Login = lazy(() => import("../pages/forms/Login"));

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={
                    <>
                        <div className="flex min-h-screen flex-col">
                            <BackgroundVideo />
                            <Navbar />
                            <div className="flex grow">
                                <Home />
                            </div>
                            <Footer />
                        </div>
                    </>
                } />
                <Route path="/project" element={
                    <>
                        <div className="flex min-h-screen flex-col">
                            <BackgroundVideo />
                            <Navbar />
                            <div className="flex grow">
                                <ProjectPage />
                            </div>
                            <Footer />
                        </div>
                    </>
                } />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
