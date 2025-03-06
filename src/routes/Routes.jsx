import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Lazy-loaded components for better performance
// const Login = lazy(() => import("../pages/forms/Login"));
const Projects = lazy(() => import("../pages/Projects"))
const AboutMe = lazy(() => import("../pages/About"))

const AppRoutes = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={
                        <>
                            <div className="flex min-h-screen flex-col">
                                <Navbar />
                                <div className="flex grow">
                                    <Home />
                                </div>
                                <Footer />
                            </div>
                        </>
                    } />
                    <Route path="/projects" element={
                        <>
                            <Navbar />
                            <Projects />
                            <Footer />
                        </>
                    } />
                    <Route path="/about" element={
                        <>
                            <Navbar />
                            <AboutMe />
                            <Footer />
                        </>
                    } />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default AppRoutes;
