import React from 'react';
import showsImg1 from "../../assets/images/16ce584f6348fbf83c1142edf53ca4db.jpg";
import showsImg2 from "../../assets/images/d8f57a13c77b4b6bd8e178d724fee748.jpg";
import showsImg3 from "../../assets/images/80a5df72a537661c12e59ab3947f7f8e.jpg";

export const Shows = () => {
    return (
        <section className="shows">
            <div className="showsItems">
            <div className="showsItemsImage">
            <img src={showsImg1} alt="showsImg1" className="showsItem" />
            </div>
            <h5 className="showsItemTitle" >HALO HALO</h5>
            </div>
            <div className="showsItems">
            <div className="showsItemsImage">
            <img src={showsImg2} alt="showsImg2" className="showsItem" />
            </div>
            <h5 className="showsItemTitle" >GRAND MAGAZIN</h5>
            </div>
            <div className="showsItems">
            <div className="showsItemsImage">
            <img src={showsImg3} alt="showsImg3" className="showsItem" />
            </div>
            <h5 className="showsItemTitle" >ZVEZDE GRANDA SPECIJAL</h5>
            </div>
        </section>
    )
}