import React from "react";
import popularNews from "../../data/popularNews"
import { ZGOnePopularNews } from "./ZGOnePopularNews";

export const ZGPopularNews = () => {
  return (
    <>
      <div className="zvezdeGranda-popularNewsMainTitle">
        <h5 className="zvezdeGranda-popularNewsMainTitleText">Zvezde Granda</h5>
      </div>
      <section className="zvezdeGranda-popularNews">
        <div className="zvezdeGranda-popularNewsItems">
          {popularNews.map(el => {return <ZGOnePopularNews key={el.news_id} oneNews={el}/>})}
        </div>
      </section>
    </>
  );
};
