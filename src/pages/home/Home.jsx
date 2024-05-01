import React from "react";
import Layout from "../../components/layout/Layout";
import { HeroSection, Category, HomePageProductCard } from "../../components";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <Category />
      <HomePageProductCard />
    </Layout>
  );
};

export default HomePage;
