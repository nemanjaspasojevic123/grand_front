import React from "react";
import popularNews from "../../data/popularNews"
import { GOnePopularNews } from "./GOnePopularNews";

export const GPopularNews = () => {
  return (
      <section className="grandoskop-popularNews">
      <div className="grandoskop-popularNewsMainTitle">
        <h5 className="grandoskop-popularNewsMainTitleText">Grandoskop</h5>
      </div>
        <div className="grandoskop-popularNewsItems">
          {popularNews.map(el => {return <GOnePopularNews key={el.news_id} oneNews={el}/>})}
        </div>
      </section>
  );
};