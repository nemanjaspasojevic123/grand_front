import React from "react";
import popularNews from "../../data/popularNews"
import { ROnePopularNews } from "./ROnePopularNews";

export const RPopularNews = () => {
  return (
      <section className="recepti-popularNews">
      <div className="recepti-popularNewsMainTitle">
        <h5 className="recepti-popularNewsMainTitleText">Recepti</h5>
      </div>
        <div className="recepti-popularNewsItems">
          {popularNews.map(el => {return <ROnePopularNews key={el.news_id} oneNews={el}/>})}
        </div>
      </section>
  );
};