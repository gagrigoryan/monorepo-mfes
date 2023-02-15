import React from "react";
import styles from "./Button.module.scss";

type ButtonProps = {
  isDark?: boolean;
};

const Button: React.FC<ButtonProps> = ({ isDark }) => {
  return (
    <button className={isDark ? styles.containerDark : styles.container}>
      Widget Button
    </button>
  );
};

export default Button;
