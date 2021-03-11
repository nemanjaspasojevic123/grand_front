import React from "react";
import popularNews from "../../data/popularNews"
import { EOnePopularNews } from "./EOnePopularNews";

export const EPopularNews = () => {
  return (
      <section className="emisije-popularNews">
      <div className="emisije-popularNewsMainTitle">
        <h5 className="emisije-popularNewsMainTitleText">Emisije</h5>
      </div>
        <div className="emisije-popularNewsItems">
          {popularNews.map(el => {return <EOnePopularNews key={el.news_id} oneNews={el}/>})}
        </div>
      </section>
  );
};