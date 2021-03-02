import React from 'react';
import showbizzImg1 from "../../assets/images/de22b6bc325b4cc3593b7cf7252bf0c156c2b28e.jpg";
import showbizzImg2 from "../../assets/images/c3b7d134fc9268bee50baab49ec1f2c07b2e2a65.jpg";
import showbizzImg3 from "../../assets/images/9ee9aae3a19b81f777a5447e81cda96b266999f7.jpg";
import showbizzImg4 from "../../assets/images/5e457019b10d0855da8ec84e2c61d71d49a10484.jpg";

export const News = () => {
    return (
        <section className="showbizz-news">
            <div className="showbizz-newsItems">
            <div className="showbizz-newsItemsImage">
            <img src={showbizzImg1} alt="showbizz img1" className="showbizz-newsItem" />
            </div>
            <h5 className="showbizz-newsItemTitle" >Nove vesti</h5>
            </div>
            <div className="showbizz-newsItems">
            <div className="showbizz-newsItemsImage">
            <img src={showbizzImg2} alt="showbizz img2" className="showbizz-newsItem" />
            </div>
            <h5 className="showbizz-newsItemTitle" >Nove vesti</h5>
            </div>
            <div className="showbizz-newsItems">
            <div className="showbizz-newsItemsImage">
            <img src={showbizzImg3} alt="showbizz img3" className="showbizz-newsItem" />
            </div>
            <h5 className="showbizz-newsItemTitle" >Nove vesti</h5>
            </div>
            <div className="showbizz-newsItems">
            <div className="showbizz-newsItemsImage">
            <img src={showbizzImg4} alt="showbizz img4" className="showbizz-newsItem" />
            </div>
            <h5 className="showbizz-newsItemTitle" >Nove vesti</h5>
            </div>
        </section>
    )
}