import React from "react";
import banner_left from "../../assets/images/sanja_levo.jpg";
import banner_right from "../../assets/images/voja_desno.jpg";
import newsTestImg1 from "../../assets/images/de22b6bc325b4cc3593b7cf7252bf0c156c2b28e.jpg";
import { NavBar } from "../navbar/NavBar";
import { NavTrack } from "../navbar/NavTrack";

export const NewsTest = () => {
  return (
    <div className="newsTest">
      <div className="newsTest-navigation">
        <NavBar />
        <NavTrack />
      </div>
      <div className="newsTest-content">
        <div className="newsTest-leftBanner">
          <img
            src={banner_left}
            alt="banner_left"
            className="recepti-leftBannerImage"
          ></img>
        </div>
        <div className="newsTest-contentCenter">
          <div className="newsTest-newsTitle">
            <h4 className="newsTest-newsItemTitle">
              Znamo ga kao markantnog, ali nekada je furao TOTALNO DRUGI STIL!
              Pogledajte kako je Mare izgledao ranije
            </h4>
          </div>
          <div className="newsTest-newsItemsImage">
            <img
              src={newsTestImg1}
              alt="newsTest img1"
              className="newsTest-newsItem"
            />
          </div>
          <p className="newsTest-newsText">
            Saša Milošević Mare, čuveni je kompozitor i producent, a poslednjih
            par godina gledamo ga u ulozi stalnog člana žirija popularnog
            takmičenja "Nikad nije kasno". Iz emisije u emisiju navikao nas je
            na svoj besprekoran stajling, ali malo ko se seća da je Mare nekada
            "furao" malo opušteniji stil. Na slici koja datira bar deceniju
            unazad, poznatog producenta možemo videti sa dugom kosom i, reklo bi
            se, neukrotivim loknama.
          </p>
          <p className="newsTest-newsText">
            Saša Milošević Mare, čuveni je kompozitor i producent, a poslednjih
            par godina gledamo ga u ulozi stalnog člana žirija popularnog
            takmičenja "Nikad nije kasno". Iz emisije u emisiju navikao nas je
            na svoj besprekoran stajling, ali malo ko se seća da je Mare nekada
            "furao" malo opušteniji stil. Na slici koja datira bar deceniju
            unazad, poznatog producenta možemo videti sa dugom kosom i, reklo bi
            se, neukrotivim loknama.
          </p>
          <p className="newsTest-newsText">
            Saša Milošević Mare, čuveni je kompozitor i producent, a poslednjih
            par godina gledamo ga u ulozi stalnog člana žirija popularnog
            takmičenja "Nikad nije kasno". Iz emisije u emisiju navikao nas je
            na svoj besprekoran stajling, ali malo ko se seća da je Mare nekada
            "furao" malo opušteniji stil. Na slici koja datira bar deceniju
            unazad, poznatog producenta možemo videti sa dugom kosom i, reklo bi
            se, neukrotivim loknama.
          </p>
        </div>
        <div className="newsTest-rightBanner">
          <img
            src={banner_right}
            alt="banner_right"
            className="recepti-rightBannerImage"
          ></img>
        </div>
      </div>
    </div>
  );
};
