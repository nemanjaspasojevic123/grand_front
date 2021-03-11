import React from "react";
import popularNews from "../../data/popularNews"
import { NNKOnePopularNews } from "./NNKOnePopularNews";

export const NNKPopularNews = () => {
  return (
      <section className="nikadNijeKasno-popularNews">
      <div className="nikadNijeKasno-popularNewsMainTitle">
        <h5 className="nikadNijeKasno-popularNewsMainTitleText">Nikad nije kasno</h5>
      </div>
        <div className="nikadNijeKasno-popularNewsItems">
          {popularNews.map(el => {return <NNKOnePopularNews key={el.news_id} oneNews={el}/>})}
        </div>
      </section>
  );
};
