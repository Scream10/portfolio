import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import Project from "@/components/project";

const Home = () => {
  const Projects = () => {
    return (
      <div>
        {Array.from(Array(10).keys()).map((_, index) => (
          <div key={index}>
            <Project />
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Nicolas Diot</title>
        <meta name="description" content="Nicolas Diot portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <Header />
        <div className={styles.container}>
          <Projects />
        </div>
      </main>
    </>
  );
};

export default Home;
