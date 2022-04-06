import React, { useEffect, useState } from "react";
import axios from "axios";

const GetImageFromSearchApi = () => {

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

export { GetImageFromSearchApi };