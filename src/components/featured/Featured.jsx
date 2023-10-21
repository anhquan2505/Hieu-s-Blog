"use client"
import React, { useContext } from "react";
import styles from "./featured.module.css";
import Image from "next/image";
import { DatabaseContext } from "@/context/DatabaseContext";
import Link from "next/link";

const Featured = () => {
  const database = useContext(DatabaseContext)
  let postIndex = 0
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hi, It&apos;s Hieu!</b> Discover my stories and creative ideas.
      </h1>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>{database[0].title}</h1>

          {
            database[postIndex].desc.length > 0 && <p className={styles.postDesc}> {database[postIndex].desc[0].slice(0, 250)} {database[postIndex].desc[0].length > 250 ? "..." : null}</p>
          }

          <button className={styles.button}><Link href={`/posts/${postIndex}`} className={styles.link}>
            Read More
          </Link></button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
