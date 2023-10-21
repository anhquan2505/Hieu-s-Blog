"use client"
import React, { useContext } from "react";
import styles from "./cardList.module.css";
import Pagination from "../pagination/Pagination";
import Image from "next/image";
import Card from "../card/Card";
import { DatabaseContext } from "@/context/DatabaseContext";
import { PaginationContext } from "@/context/PaginationContext";



const CardList = () => {

const database = useContext(DatabaseContext)
const {pagination, setPagination} = useContext(PaginationContext)
const offset = 4
  return (

    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts} >
        {database.map((card,index)=>{
          if (index >= (pagination*offset) && index < (offset*pagination+offset)){
            return(
              <Card index = {index} card = {card}></Card>
            )
          }
          return null
        }
          
          
        )}
         
      </div>
      <Pagination/>
    </div>
  );
};

export default CardList;
