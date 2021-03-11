import React from "react";
import popularNews from "../../data/popularNews"
import { PSOnePopularNews } from "./PSOnePopularNews";

export const PSPopularNews = () => {
  return (
      <section className="programskaSema-popularNews">
      <div className="programskaSema-popularNewsMainTitle">
        <h5 className="programskaSema-popularNewsMainTitleText">Programska šema</h5>
      </div>
        <div className="programskaSema-popularNewsItems">
          {popularNews.map(el => {return <PSOnePopularNews key={el.news_id} oneNews={el}/>})}
        </div>
      </section>
  );
};