import React from 'react';
import showspic from "../../assets/images/night-4371499_1920.jpg";

export const Shows = () => {
    return (
        <section className="shows">
            <div className="showsItems">
            <div className="showsItemsImage">
            <img src={showspic} alt="showspic img" className="showsItem" />
            </div>
            <h5 className="showsItemTitle" >Emisija</h5>
            </div>
            <div className="showsItems">
            <div className="showsItemsImage">
            <img src={showspic} alt="showspic img" className="showsItem" />
            </div>
            <h5 className="showsItemTitle" >Emisija</h5>
            </div>
            <div className="showsItems">
            <div className="showsItemsImage">
            <img src={showspic} alt="showspic img" className="showsItem" />
            </div>
            <h5 className="showsItemTitle" >Emisija</h5>
            </div>
        </section>
    )
}