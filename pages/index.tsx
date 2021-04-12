import Head from "next/head";
import styles from "../styles/Home.module.css";
import DynamicText from "../components/DynamicText";
import { useRef } from "react";
import { Input } from "@chakra-ui/react"

const Home = () => {
  const input = useRef(null)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    input.current.focus();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coding Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <DynamicText />
        <Input onChange={onChange} ref={input} />
      </main>
    </div>
  );
};

export default Home;
