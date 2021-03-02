import React from 'react';
import mostReadNewsImg1 from "../../assets/images/96cce83e84ba03660b99f47e68cc9a9dee88e0d5.jpg";
import mostReadNewsImg2 from "../../assets/images/71d271556d0074e42f9ad0f523efa1e1bd1bfc1d.jpg";
import mostReadNewsImg3 from "../../assets/images/9e0c70e1ac2cd29d08aec6f52d3a1dcb287ada5f.jpg";
import mostReadNewsImg4 from "../../assets/images/92b390fa36213d62ede8a66cdebb5f2bfc64815a.jpg";
import mostReadNewsImg5 from "../../assets/images/1ed247dcccdc41ce99e5196b1130a7be8ac89a9b.jpg";

export const MostReadNews = () => {
    return (
        <section className="mostReadNews">
            <div className="mostReadNewsItems">
            <div className="mostReadNewsItemsImage">
            <img src={mostReadNewsImg1} alt="mostReadNewsImg1" className="mostReadNewsItem" />
            </div>
            <div className="mostReadNewsTitle">
            <h5 className="mostReadNewsItemTitle" >Najčitanije vesti</h5>
            </div>
            </div>
            <div className="mostReadNewsItems">
            <div className="mostReadNewsItemsImage">
            <img src={mostReadNewsImg2} alt="mostReadNewsImg2" className="mostReadNewsItem" />
            </div>
            <div className="mostReadNewsTitle">
            <h5 className="mostReadNewsItemTitle" >Najčitanije vesti</h5>
            </div>
            </div>
            <div className="mostReadNewsItems">
            <div className="mostReadNewsItemsImage">
            <img src={mostReadNewsImg3} alt="mostReadNewsImg3" className="mostReadNewsItem" />
            </div>
            <div className="mostReadNewsTitle">
            <h5 className="mostReadNewsItemTitle" >Najčitanije vesti</h5>
            </div>
            </div>
            <div className="mostReadNewsItems">
            <div className="mostReadNewsItemsImage">
            <img src={mostReadNewsImg4} alt="mostReadNewsImg4" className="mostReadNewsItem" />
            </div>
            <div className="mostReadNewsTitle">
            <h5 className="mostReadNewsItemTitle" >Najčitanije vesti</h5>
            </div>
            </div>
            <div className="mostReadNewsItems">
            <div className="mostReadNewsItemsImage">
            <img src={mostReadNewsImg5} alt="mostReadNewsImg5" className="mostReadNewsItem" />
            </div>
            <div className="mostReadNewsTitle">
            <h5 className="mostReadNewsItemTitle" >Najčitanije vesti</h5>
            </div>
            </div>
        </section>
    )
}