import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <>
      <h4 className="portfolio__portfolio-header">Портфолио</h4>
      <ul className="portfolio__project-buttons">
        <li className="portfolio__project-button-item">
          <a
            href="https://github.com/GreySamson95/how-to-learn"
            target="_blank"
            rel="noreferrer"
          >
            <button className="portfolio__project-button" type="button">
              Статичный сайт
            </button>
          </a>
        </li>
        <li className="portfolio__project-button-item">
          <a
            href="https://github.com/GreySamson95/russian-travel"
            target="_blank"
            rel="noreferrer"
          >
            <button className="portfolio__project-button" type="button">
              Адаптивный сайт
            </button>
          </a>
        </li>
        <li className="portfolio__project-button-item">
          <a
            href="https://github.com/GreySamson95/react-mesto-api-full"
            target="_blank"
            rel="noreferrer"
          >
            <button className="portfolio__project-button" type="button">
              Одностраничное приложение
            </button>
          </a>
        </li>
      </ul>
    </>
  );
}

export default Portfolio;
