import React from "react";
import { GetImageFromApi,} from "./api";
import Image from "./image";
import './show_images.css';

const ShowImages = () => {
    const data = GetImageFromApi();
    return <>
        <div className="card-list">
            {
                data.map((pic, key) => (
                    <div className="card" key={pic.id}>
                        <Image src={pic.urls.thumb} />
                        <div className="card-response">
                            <p>{pic.alt_description}</p>
                            <span><ion-icon name="heart" className="likes"> </ion-icon>{pic.likes}</span>
                        </div>

                    </div>
                ))
            }
   
        </div>
    </>;
};

export default ShowImages;
