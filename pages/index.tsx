import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { getDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { InferGetServerSidePropsType } from "next";

export default function Home({
  document,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(document);

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

export async function getServerSideProps() {
  const docRef = doc(db, "tests", "BBJ6zFBKDc9YK5WePo0u");
  const docSnap = await getDoc(docRef);
  let document = null;

  if (docSnap.exists()) {
    document = docSnap.data();
  }

  return {
    props: {
      document,
    },
  };
}
