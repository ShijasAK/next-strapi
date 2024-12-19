import React from "react";
import { useRouter } from "next/router";
import styles from "./Nav.module.css";

const Nav = ({ data }) => {
  const router = useRouter();

  if (!data) return null;

  const handleClick = (api_ID) => {
    router.push(`/${api_ID}`);
  };

  return (
    <ul className={styles.menu_ul}>
      {data.navItem.map((item, index) => (
        <li
          key={index}
          className={styles.mob_hide}
          style={{ cursor: "pointer" }}
          onClick={() => handleClick(item.api_ID)}
        >
          <a className={styles.nav_link}>{item.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default Nav;
