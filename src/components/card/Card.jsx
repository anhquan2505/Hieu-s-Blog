import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ key, item }) => {
  return (
    <div className={styles.container} key={key}>
      
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>15/10/2023
          </span>
          <span className={styles.category}>Culture</span>
        </div>
        <Link href={`/`}>
          <h1></h1>
        </Link>
        <p className={styles.desc}>Lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse c
        illum dolore eu fugiat nulla pariatur. </p>
        <div className={styles.desc}/>
        <Link href={`/posts/page`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
