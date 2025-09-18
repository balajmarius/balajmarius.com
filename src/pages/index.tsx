import Head from "next/head";

import copy from "@/copy/en-EN.json";

import { About } from "@/sections/About";

const Home = () => {
  return (
    <>
      <Head>
        <title>{copy.metadata.title}</title>
      </Head>

      <About />
    </>
  );
};

export default Home;
