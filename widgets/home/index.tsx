import React from "react";
import { Layout } from "../../components/Layout";
import { SectionAbout } from "../../components/SectionAbout";
import { SectionEducation } from "../../components/SectionEducation";
import { SectionInitial } from "../../components/SectionInitial";
import { SectionProjects } from "../../components/SectionProjects";
import { SectionSkills } from "../../components/SectionSkills";

const HomePage = () => {
  return (
    <Layout>
      <SectionInitial />
      <SectionAbout />
      <SectionSkills />
      <SectionProjects />
      <SectionEducation />
    </Layout>
  );
};

export default HomePage;
