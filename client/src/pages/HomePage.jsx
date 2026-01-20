import React from "react";
import Hero_Home from "../components/Hero_Home";
import Carousal_Home from "../components/Carousal_Home";
import NewArrivals_Home from "../components/NewArrivals_Home";
import Marketing_Home from "../components/Marketing_Home";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

const HomePage = () => {
    return (
        <div>
            <Hero_Home />
            <Carousal_Home />
            <NewArrivals_Home />
            <Marketing_Home />
            <Faq />
            <Footer />
        </div>
    );
};

export default HomePage;
