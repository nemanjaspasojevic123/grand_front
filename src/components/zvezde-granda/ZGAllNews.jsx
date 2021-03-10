import React from "react";
import news from "../../data/news";
import { ZGOneNews } from "./ZGOneNews";

export const ZGAllNews = () => {
  return (
    <section className="zvezdeGrandaNews">
        {news.map(el => {return <ZGOneNews key={el.news_id} oneNews={el}/>})}
    </section>
  );
};
