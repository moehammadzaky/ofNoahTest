import Head from "next/head";
import styles from "../styles/Home.module.css";
import DynamicText from "../components/DynamicText";
import {  useRef} from "react";
import { Input } from "@chakra-ui/react"

const Home = () => {
  const inputRef = useRef(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     inputRef.current.changeValue(e.target.value)
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coding Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <DynamicText ref={inputRef} />
        <Input onChange={onChange}/>
      </main>
    </div>
  );
};

export default Home;
