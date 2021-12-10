import React, { FC } from "react";
import styles from "./Control.module.css";

type Method = "GET" | "POST" | "PUT" | "DELETE";
interface IProps {
  method: Method;
  url: string;
  description?: string;
}

const Control: FC<IProps> = ({ method, url, description }) => {
  return (
    <div className={`${styles.control} ${styles[method]}`}>
      <span className={styles.method}>{method}</span>
      <strong>{url}</strong>
      {description && <small>{description}</small>}
    </div>
  );
};

export default Control;
