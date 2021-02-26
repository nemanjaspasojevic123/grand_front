import React from 'react';
import chicago from "../../assets/images/chicago-1791002_1280.jpg";
import newyork from "../../assets/images/city-1150026_1280.jpg";
import london from "../../assets/images/london-2393098_1280.jpg";
import belgrade from "../../assets/images/most-na-adi-4569762_1280.jpg";

export const News = () => {
    return (
        <div className="zvezde-granda-news">
            <div className="zvezde-granda-newsItems">
            <img src={chicago} alt="chicago img" className="zvezde-granda-newsItem" />
            <h5 className="zvezde-granda-newsItemTitle" >Lorem ipsum</h5>
            </div>
            <div className="zvezde-granda-newsItems">
            <img src={newyork} alt="newyork img" className="zvezde-granda-newsItem" />
            <h5 className="zvezde-granda-newsItemTitle" >Lorem ipsum</h5>
            </div>
            <div className="zvezde-granda-newsItems">
            <img src={london} alt="london img" className="zvezde-granda-newsItem" />
            <h5 className="zvezde-granda-newsItemTitle" >Lorem ipsum</h5>
            </div>
            <div className="zvezde-granda-newsItems">
            <img src={belgrade} alt="belgrade img" className="zvezde-granda-newsItem" />
            <h5 className="zvezde-granda-newsItemTitle" >Lorem ipsum</h5>
            </div>
        </div>
    )
}