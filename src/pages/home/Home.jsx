import React from "react";
import Layout from "../../components/layout/Layout";
import {
  HeroSection,
  Category,
  HomePageProductCard,
  Track,
  Testimonial,
} from "../../components";

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <Category />
      <HomePageProductCard />
      <Track />
      <Testimonial />
    </Layout>
  );
};

export default HomePage;
