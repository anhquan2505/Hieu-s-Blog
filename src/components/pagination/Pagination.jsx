"use client";

import React, { useContext } from "react";
import styles from "./pagination.module.css";
import { PaginationContext } from "@/context/PaginationContext";
import { DatabaseContext } from "@/context/DatabaseContext";
const Pagination = ({}) => {
  const {pagination, setPagination} = useContext(PaginationContext)
  const database = useContext(DatabaseContext)

  return (
    <div className={styles.container}>
      <button disabled={pagination<=0} className={styles.button} onClick={()=>setPagination(prev=>prev-1)}>
        Previous
      </button>
      <button disabled={pagination*4>=database.length-1} className={styles.button} onClick={()=>setPagination(prev=>prev+1)}> 
        Next
      </button>
    </div>
  );
};

export default Pagination;
