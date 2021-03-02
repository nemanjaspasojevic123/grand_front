import React from 'react';
import newspic from "../../assets/images/old-newspaper-350376_1920.jpg";

export const MostReadNews = () => {
    return (
        <section className="mostReadNews">
            <div className="mostReadNewsItems">
            <div className="mostReadNewsItemsImage">
            <img src={newspic} alt="mostReadNewspic img" className="mostReadNewsItem" />
            </div>
            <div className="mostReadNewsTitle">
            <h5 className="mostReadNewsItemTitle" >Najčitanije vesti</h5>
            </div>
            </div>
            <div className="mostReadNewsItems">
            <div className="mostReadNewsItemsImage">
            <img src={newspic} alt="mostReadNewspic img" className="mostReadNewsItem" />
            </div>
            <div className="mostReadNewsTitle">
            <h5 className="mostReadNewsItemTitle" >Najčitanije vesti</h5>
            </div>
            </div>
            <div className="mostReadNewsItems">
            <div className="mostReadNewsItemsImage">
            <img src={newspic} alt="mostReadNewspic img" className="mostReadNewsItem" />
            </div>
            <div className="mostReadNewsTitle">
            <h5 className="mostReadNewsItemTitle" >Najčitanije vesti</h5>
            </div>
            </div>
            <div className="mostReadNewsItems">
            <div className="mostReadNewsItemsImage">
            <img src={newspic} alt="mostReadNewspic img" className="mostReadNewsItem" />
            </div>
            <div className="mostReadNewsTitle">
            <h5 className="mostReadNewsItemTitle" >Najčitanije vesti</h5>
            </div>
            </div>
            <div className="mostReadNewsItems">
            <div className="mostReadNewsItemsImage">
            <img src={newspic} alt="mostReadNewspic img" className="mostReadNewsItem" />
            </div>
            <div className="mostReadNewsTitle">
            <h5 className="mostReadNewsItemTitle" >Najčitanije vesti</h5>
            </div>
            </div>
        </section>
    )
}