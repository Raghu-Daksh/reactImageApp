import headerImage from "./header_img.webp";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./header.css";
import { GetImageFromSearchApi } from "./api";
import Image from "./image";
const Header = () => {
  const [query, setQuery] = useState("");
  const [state, setState] = useState([]);



  const getImages = (e) => {
    e.preventDefault();
    console.log(searchData);
    setState(query);
    setQuery("");
  };
  const searchData = GetImageFromSearchApi(state);



  return (
    <>
      <header>
        <h2 className="logo">Flasko Images</h2>
        <div className="img-sec">
          <img src={headerImage} className="heade-img" />

          <div className="header-content">
            <h1 id="quote">Stunning free images & royalty free stock</h1>
            <p id="quote2">
              Over 2.5 million+ high quality stock images, videos and music
              shared by our talented community.
            </p>
            <form onSubmit={getImages}>
              <input
                input="text"
                placeholder="search images"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
              />
              <button className="btn" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </header>
      <div className="card-list">
        {searchData.map((pic, key) => (
          <div className="card" key={key}>
            <Image src={pic.urls.thumb} />
            <div className="card-response">
              <p>{pic.alt_description}</p>
              <span><ion-icon name="heart" className="likes"> </ion-icon>{pic.likes}</span>
            </div>
          </div>
        ))  

  }
      
      </div>
    </>
  );
};

export default Header;
