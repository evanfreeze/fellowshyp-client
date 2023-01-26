import Head from "next/head";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Fellowshyp</title>
        <meta
          name="description"
          content="The Fellowshyp learning community for programming"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Welcome to The Fellowshyp</h1>
      </main>
    </>
  );
}
