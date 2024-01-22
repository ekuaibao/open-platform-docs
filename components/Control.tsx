import React, { FC } from "react";
import styles from "./Control.module.css";

type Method = "GET" | "POST" | "PUT" | "DELETE";
interface IProps {
  method: Method;
  url: string;
  description?: string;
}

const Control: FC<IProps> = ({ method, url, description }) => {
  const formatUrl = url.replace(/\{(.*?)\}/g, "<span>$1</span>");
  return (
    <div className={`${styles.control} ${styles[method]}`}>
      <span className={styles.method}>{method}</span>
      <strong dangerouslySetInnerHTML={{__html: formatUrl}} />
      {description && <small>{description}</small>}
    </div>
  );
};

export default Control;
