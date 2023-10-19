"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";

const Comments = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      <div className={styles.comments}>
        <div className={styles.comment}>
          <div className={styles.user}>
            
              <Image
                src="/logo.png"
                alt=""
                width={50}
                height={50}
                className={styles.image}
              />
        
            <div className={styles.userInfo}>
              <span className={styles.username}>Hieu</span>
              <span className={styles.date}>15/10/2023</span>
            </div>
          </div>
          <p className={styles.desc}>Hello</p>
        </div>

      </div>
    </div>
  );
};

export default Comments;
