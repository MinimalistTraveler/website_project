import React from "react";
import styles from "../CSS/portfolio.styl";
import data from "./data.json";
import {
  faGithubSquare,
  faInternetExplorer
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Portfolio = () => {
  const renderApps = () => {
    return data.map(item => (
      <div className={styles["portfolio__item"]}>
        <img src={item.image} />
        <h2 style={{ color: "#FFF" }}>{item.name}</h2>
        {item.coming_soon ? (
          <div>
            <h2 style={{ color: "#FFF", padding: 20 }}>In Development </h2>
          </div>
        ) : (
          <div className={styles["portfolio__link"]}>
            <a href={item.github_link}>
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
            <a href={item.internet_link}>
              <FontAwesomeIcon icon={faInternetExplorer} />
            </a>
          </div>
        )}
      </div>
    ));
  };
  return (
    <div className={styles["portfolio"]}>
      <div className={styles["portfolio__header"]}>
        <h1>Works</h1>
        <span />
      </div>
      <div className={styles["portfolio__list"]}>{renderApps()}</div>
    </div>
  );
};

export default Portfolio;
