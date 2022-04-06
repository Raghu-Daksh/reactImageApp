import React, { useEffect, useState } from "react";
import axios from "axios";

const GetImageFromApi = () => {

    const [images, setImages] = useState([]);

    useEffect(()=>{
        axios.get(
            `https://api.unsplash.com/photos?client_id=0xdGXexTS6MQ-hF0QuXOw5ALYmPE7UZC69vX1vqnNCE`
        )
            .then((data) => {
                setImages(data.data);
            });
    }, []);

        return images;
};

const GetImageFromSearchApi = (query) => {

    const [searchimages, setSearchImages] = useState([]);

    useEffect(()=>{
        axios.get(
            "https://api.unsplash.com/search/photos?query="+query+"&client_id=0xdGXexTS6MQ-hF0QuXOw5ALYmPE7UZC69vX1vqnNCE"
        )
            .then((data) => {
                setSearchImages(data.data.results);
            });
    }, [query]);

        return searchimages;
};

export { GetImageFromApi, GetImageFromSearchApi };
