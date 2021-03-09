import React from "react";
import news from "../../data/news";

export const ZvezdeGrandaNews = () => {
  return (
    <section className="showbizz-news">
      <div className="showbizz-newsItems">
        <div className="showbizz-newsBrand">
          {news.map( oneNews => {return <p className="showbizz-newsBrandText nikadNijeKasno" key={oneNews.id}>{oneNews.news_brand}</p>})}
        </div>
        {/* <div className="showbizz-newsItemsImage">
        {news.map( oneNews => {return <img className="showbizz-newsItem" alt="showbizz img1" key={oneNews.id}>{oneNews.news_img}</img>})}
          <img
            src={showbizzImg1}
            alt="showbizz img1"
            className="showbizz-newsItem"
          />
        </div> */}
        <div className="showbizz-newsTitle">
          {news.map( oneNews => {return <span className="showbizz-newsItemTitle" key={oneNews.id}>{oneNews.news_title}</span>})}
        </div>
      </div>
    </section>
  );
};
