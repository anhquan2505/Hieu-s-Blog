"use client"
import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ key, item, card, index }) => {
  return (
    <div className={styles.container} key={key}>
      
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>15/10/2023</span>
        </div>
        <h3>{card.title}</h3>
        <Link href={`/`}>
          <h1></h1>
        </Link>
        {
          card.desc.length>0 && <p className={styles.desc}>{card.desc[0].slice(0,250)} {card.desc[0].length>250?"...": null}</p>
        }
        
        {/* <div className={styles.desc}/> */}
        <Link href={`/posts/${index}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
