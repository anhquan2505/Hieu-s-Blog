import Menu from "@/components/Menu/Menu";
import styles from "./singlePage.module.css";
import Image from "next/image";
import Comments from "@/components/comments/Comments";



const SinglePage =  () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Title</h1>
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
        <div className={styles.post}>
          <div className={styles.description}/>
          <div className={styles.comment}>
            {/* <Comments/> */}
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
