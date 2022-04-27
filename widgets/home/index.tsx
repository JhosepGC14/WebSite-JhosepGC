import React from "react";
import Layout from "../../components/Layout";
import SectionAbout from "../../components/SectionAbout";
import SectionInitial from "../../components/SectionInitial";

const HomePage = () => {
  return (
    <Layout>
      <SectionInitial />
      <SectionAbout />
    </Layout>
  );
};

export default HomePage;
