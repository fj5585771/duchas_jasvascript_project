
import { Link } from "react-router-dom"
import { useState } from "react"
// import "./PhotosItem.css";

const PhotoItem = ({photo}) => {

    const [valid, setValid] = useState(true);

    const checkImage = () => {
        setValid(false);
    }

    if (!photo || !valid) return null;


    let photoCaption = null;

    if (photo.date) {
        photoCaption = <figcaption>{photo.archivedDescription} ({photo && photo.date.isoDate}) <Link to={`/${photo.id}`}>More Info</Link></figcaption>
    } else {
        photoCaption = <figcaption>{photo.archivedDescription}<Link to={`/${photo.id}`}>More Info</Link></figcaption>
    }



    return (
        <>
            <figure className="imageWrap">
                <img onError={checkImage}src={`https://doras.gaois.ie/cbeg/${photo.referenceNumber}.jpg?format=jpg&width=620&quality=85`}/>
                <figcaption><>{photoCaption}</></figcaption>
            </figure>
        </>
    )
};

export default PhotoItem;