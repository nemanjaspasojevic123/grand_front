import React from 'react';
import showpic from "../../assets/images/night-4371499_1920.jpg";

export const Shows = () => {
    return (
        <section className="show">
            <div className="showItems">
            <div className="showItemsImage">
            <img src={showpic} alt="showpic img" className="showItem" />
            </div>
            <h5 className="showItemTitle" >Emisija</h5>
            </div>
            <div className="showItems">
            <div className="showItemsImage">
            <img src={showpic} alt="showpic img" className="showItem" />
            </div>
            <h5 className="showItemTitle" >Emisija</h5>
            </div>
            <div className="showItems">
            <div className="showItemsImage">
            <img src={showpic} alt="showpic img" className="showItem" />
            </div>
            <h5 className="showItemTitle" >Emisija</h5>
            </div>
        </section>
    )
}