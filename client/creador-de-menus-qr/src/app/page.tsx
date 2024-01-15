import styles from "./page.module.scss";


import NavBar from "@/components/navbar/NavBar";
import Intro from "@/components/intro/Intro";
import BentoGrid from "@/components/bento-grid/BentoGrid";

export default function Home() {
  return (
    <main className={styles.main}>
      <NavBar />
      <Intro />
      <BentoGrid />
    </main>
  );
}
