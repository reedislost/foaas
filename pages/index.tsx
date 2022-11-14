import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  const frig = async () => {
    const response = await fetch("http://foaas.com/asshole/reed", {
      mode: "cors",
      headers: {
        Accept: "application/json",
      },
    });
    console.log(response);
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Frig Off</title>
        <meta name="description" content="frig off" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <button onClick={frig}>frig off</button>
      </div>
    </div>
  );
}
