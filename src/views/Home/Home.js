import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Cards from "../../components/Cards/Cards";
import Newsletter from "../../components/Newsletter/Newsletter";
import Featured from "../../components/Featured/Featured";
import Footer from "../../components/Footer/Footer";

const Home = () => (
    <>
        <Navbar />
        <Header />
        <Cards  />
        <Newsletter />
        <Featured />
        <Footer />
    </>
);

export default Home;



