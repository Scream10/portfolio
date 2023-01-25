import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/navbar";
import Header from "@/components/header";
import Project from "@/components/project";
import Footer from "@/components/footer";

const Home = () => {
  const Projects = () => {
    return (
      <>
        {[1, 2, 3].map((_, index) => (
          <Project key={index} />
        ))}
      </>
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
        <div
          style={{
            height: "100vh",
            width: "100%",
            backgroundColor: "black",
            marginTop: 50,
          }}
        />
        <Footer />
      </main>
    </>
  );
};

export default Home;
