import type { NextPage } from "next";
import HomePage from "../widgets/home";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="/img/icon_title.svg" />
        <title>.::JAG-Jhosep Guadalupe::.</title>
        <meta name="title" content="Jhosep Guadalupe Culqui - JAGC" />
        <meta
          name="description"
          content="Mi nombre es Jhosep, soy desarrollador web especializado en el frontend. Tengo 2 años de experiencia en proyectos de todo tipo como financieros, ecommerce y administrativos."
        />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://jhosepguadalupe.netlify.app/"
        />
        <meta property="og:title" content="Jhosep Guadalupe Culqui - JAGC" />
        <meta
          property="og:description"
          content="Mi nombre es Jhosep, soy desarrollador web especializado en el frontend. Tengo 2 años de experiencia en proyectos de todo tipo como financieros, ecommerce y administrativos."
        />
        <meta
          property="og:image"
          content="https://jhosepguadalupe.netlify.app/img/icon_title.svg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://jhosepguadalupe.netlify.app/"
        />
        <meta
          property="twitter:title"
          content="Jhosep Guadalupe Culqui - JAGC"
        />
        <meta
          property="twitter:description"
          content="Mi nombre es Jhosep, soy desarrollador web especializado en el frontend. Tengo 2 años de experiencia en proyectos de todo tipo como financieros, ecommerce y administrativos."
        />
        <meta
          property="twitter:image"
          content="https://jhosepguadalupe.netlify.app/img/icon_title.svg"
        />
      </Head>
      <HomePage />
    </>
  );
};

export default Home;