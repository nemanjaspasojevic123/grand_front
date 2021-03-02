import React from 'react';
import popularNewsImg1 from "../../assets/images/639331e65dd407f789da10853f1ea3514f380fb3.jpg";
import popularNewsImg2 from "../../assets/images/4d5c993bf37765a0ab1edeeee8b7e6fbf20a6b1f.jpg";
import popularNewsImg3 from "../../assets/images/m_abd2e4014d4be6d0e5b239b773bf0f2a37e95855.jpg";
import popularNewsImg4 from "../../assets/images/fb322de76e4e0857b5db00c602013611bb0b13b7.jpg";
import popularNewsImg5 from "../../assets/images/d7e73d71699f443a35d3fa3a8b25cd3cc8fcba87.jpg";
import popularNewsImg6 from "../../assets/images/39620cb375f2dc62f7cd8df181b09a59d0264d67.jpg";

export const PopularNews = () => {
    return (
        <section className="showbizz-popularNews">
            <div className="showbizz-popularNewsItems">
            <div className="showbizz-popularNewsItemsImage">
            <img src={popularNewsImg1} alt="popularNewsImg1" className="showbizz-popularNewsItem" />
            </div>
            <h5 className="showbizz-popularNewsItemTitle" >Populrane vesti</h5>
            </div>
            <div className="showbizz-popularNewsItems">
            <div className="showbizz-popularNewsItemsImage">
            <img src={popularNewsImg2} alt="popularNewsImg2" className="showbizz-popularNewsItem" />
            </div>
            <h5 className="showbizz-popularNewsItemTitle" >Populrane vesti</h5>
            </div>
            <div className="showbizz-popularNewsItems">
            <div className="showbizz-popularNewsItemsImage">
            <img src={popularNewsImg3} alt="popularNewsImg3" className="showbizz-popularNewsItem" />
            </div>
            <h5 className="showbizz-popularNewsItemTitle" >Populrane vesti</h5>
            </div>
            <div className="showbizz-popularNewsItems">
            <div className="showbizz-popularNewsItemsImage">
            <img src={popularNewsImg4} alt="popularNewsImg4" className="showbizz-popularNewsItem" />
            </div>
            <h5 className="showbizz-popularNewsItemTitle" >Populrane vesti</h5>
            </div>
            <div className="showbizz-popularNewsItems">
            <div className="showbizz-popularNewsItemsImage">
            <img src={popularNewsImg5} alt="popularNewsImg5" className="showbizz-popularNewsItem" />
            </div>
            <h5 className="showbizz-popularNewsItemTitle" >Populrane vesti</h5>
            </div>
            <div className="showbizz-popularNewsItems">
            <div className="showbizz-popularNewsItemsImage">
            <img src={popularNewsImg6} alt="popularNewsImg6" className="showbizz-popularNewsItem" />
            </div>
            <h5 className="showbizz-popularNewsItemTitle" >Populrane vesti</h5>
            </div>
        </section>
    )
}