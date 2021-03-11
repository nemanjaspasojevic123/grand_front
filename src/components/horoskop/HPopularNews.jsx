import React from "react";
import popularNews from "../../data/popularNews"
import { HOnePopularNews } from "./HOnePopularNews";

export const HPopularNews = () => {
  return (
      <section className="horoskop-popularNews">
      <div className="horoskop-popularNewsMainTitle">
        <h5 className="horoskop-popularNewsMainTitleText">Horoskop</h5>
      </div>
        <div className="horoskop-popularNewsItems">
          {popularNews.map(el => {return <HOnePopularNews key={el.news_id} oneNews={el}/>})}
        </div>
      </section>
  );
};