"use client"
import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
// import { useEffect } from "react";
import { useParams } from 'next/navigation'
import { useContext } from "react";
import { DatabaseContext } from "@/context/DatabaseContext";

// import Comments from "@/components/comments/Comments";



const SinglePage =  () => {
  let { slug } = useParams()
  slug = parseInt(slug)
  
  // const  = router.params
  console.log(slug);
  const database = useContext(DatabaseContext)
  console.log(database);
  if (database.length == 0 && slug>= database.length && slug<0){
    return (<div>Loading</div>)
  }
  
  const {title,desc} = database[slug]
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{title}</h1>
          <div className={styles.user}>
              <div className={styles.userImageContainer}>
                <Image src="/logo.png" alt="Hello" fill className={styles.avatar} />
              </div>
            
            <div className={styles.userTextContainer}>
              <span className={styles.username}>Hiếu</span>
              <span className={styles.date}>15.10.2023</span>
            </div>
          </div>
        </div>
        
          <div className={styles.imageContainer}>
            <Image src="/food.png" alt="" fill className={styles.image} />
          </div>
        
      </div>
      <div className={styles.content}>
        <div className={styles.post} >
          {desc.map(section=>(
            <div className={styles.description} key={section}>{section}</div>
          ))}
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
