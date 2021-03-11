import React from "react";
import popularNews from "../../data/popularNews"
import { PZOnePopularNews } from "./PZOnePopularNews";

export const PZPopularNews = () => {
  return (
      <section className="prakticnaZena-popularNews">
      <div className="prakticnaZena-popularNewsMainTitle">
        <h5 className="prakticnaZena-popularNewsMainTitleText">Praktična žena</h5>
      </div>
        <div className="prakticnaZena-popularNewsItems">
          {popularNews.map(el => {return <PZOnePopularNews key={el.news_id} oneNews={el}/>})}
        </div>
      </section>
  );
};
