import React, { memo } from "react";
import styles from "./Header.module.scss";

const Header: React.FC = () => {
  return <header className={styles.container}>Dashboard header</header>;
};

export default memo(Header);
