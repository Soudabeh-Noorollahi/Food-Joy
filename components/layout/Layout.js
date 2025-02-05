import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.left}>
          <Link href="/">Food.Joy</Link>
        </div>
        <div className={styles.right}>
          {" "}
          <Link href="/menu">Menu</Link>{" "}
          <Link href="/categories">Categories</Link>
        </div>
      </header>

      <div className={styles.container}>{children}</div>

      <footer className={styles.footer}>
        Developed by{" "}
        <a
          href="https://www.linkedin.com/in/soudabeh-noorollahi/"
          target="_blank"
          rel="noreferrer"
        >
          Soudabeh
        </a>{" "}
        with 💗 &copy;
      </footer>
    </>
  );
}

export default Layout;
