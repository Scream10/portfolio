import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Navbar from "@/components/navbar";

export default function Home() {
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
      </main>
    </>
  );
}
