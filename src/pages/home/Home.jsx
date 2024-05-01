import React from "react";
import Layout from "../../components/layout/Layout";
import {
  HeroSection,
  Category,
  HomePageProductCard,
  Track,
} from "../../components";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <Category />
      <HomePageProductCard />
      <Track />
    </Layout>
  );
};

export default HomePage;
