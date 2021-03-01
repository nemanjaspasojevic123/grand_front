import React from 'react';
import chicago from "../../assets/images/chicago-1791002_1280.jpg";
import newyork from "../../assets/images/city-1150026_1280.jpg";
import london from "../../assets/images/london-2393098_1280.jpg";
import belgrade from "../../assets/images/most-na-adi-4569762_1280.jpg";

export const News = () => {
    return (
        <section className="showbizz-news">
            <div className="showbizz-newsItems">
            <div className="showbizz-newsItemsImage">
            <img src={chicago} alt="chicago img" className="showbizz-newsItem" />
            </div>
            <h5 className="showbizz-newsItemTitle" >Nove vesti</h5>
            </div>
            <div className="showbizz-newsItems">
            <div className="showbizz-newsItemsImage">
            <img src={newyork} alt="newyork img" className="showbizz-newsItem" />
            </div>
            <h5 className="showbizz-newsItemTitle" >Nove vesti</h5>
            </div>
            <div className="showbizz-newsItems">
            <div className="showbizz-newsItemsImage">
            <img src={london} alt="london img" className="showbizz-newsItem" />
            </div>
            <h5 className="showbizz-newsItemTitle" >Nove vesti</h5>
            </div>
            <div className="showbizz-newsItems">
            <div className="showbizz-newsItemsImage">
            <img src={belgrade} alt="belgrade img" className="showbizz-newsItem" />
            </div>
            <h5 className="showbizz-newsItemTitle" >Nove vesti</h5>
            </div>
        </section>
    )
}