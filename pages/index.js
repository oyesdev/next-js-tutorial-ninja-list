import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Footer from "../comps/Footer";
import Navbar from "../comps/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus odit
          repudiandae exercitationem amet eaque, voluptatibus rem consequuntur
          sequi eligendi? Adipisci, maxime hic aperiam doloribus temporibus
          eveniet laboriosam? Deleniti, optio facere!
        </p>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus odit
          repudiandae exercitationem amet eaque, voluptatibus rem consequuntur
          sequi eligendi? Adipisci, maxime hic aperiam doloribus temporibus
          eveniet laboriosam? Deleniti, optio facere!
        </p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninjas Listing</a>
        </Link>
      </div>
    </>
  );
}
