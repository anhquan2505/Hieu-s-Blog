import Link from "next/link";
import styles from "./homepage.module.css";
import Featured from "@/components/featured/Featured";
import CategoryList from "@/components/categoryList/CategoryList";
import CardList from "@/components/cardList/CardList";
import Menu from "@/components/Menu/Menu";
// import { useContext } from "react";
// import { DatabaseContext } from "@/context/DatabaseContext";

export default function Home( ) {
  // const database = useContext(DatabaseContext)
  return (
    <div className={styles.container}>
      <Featured />
      <CategoryList />
      <div className={styles.content}>
        <CardList/>
        <Menu/>
      </div>
      {/* <div>{JSON.stringify(database)}</div> */}
    </div>
  );
}
