import React from "react";
import styles from "./Button.module.scss";

export type ButtonProps = {
  isDark?: boolean;
  isActive?: boolean;
};

const Button: React.FC<ButtonProps> = ({ isDark }) => {
  return (
    <button className={isDark ? styles.containerDark : styles.container}>
      Widget Button
    </button>
  );
};

export default Button;
