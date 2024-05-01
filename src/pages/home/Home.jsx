import React from "react";
import Layout from "../../components/layout/Layout";
import { HeroSection, Category } from "../../components";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <Category />
    </Layout>
  );
};

export default HomePage;
