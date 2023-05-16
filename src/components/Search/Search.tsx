import React from "react";
import styles from "./Search.module.scss";

const Search: React.FC = () => {
  return <input className={styles.search} placeholder="Search" />;
};

export { Search };
