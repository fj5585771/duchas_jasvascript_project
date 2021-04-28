import "./SinglePhotoView.css";

import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import PhotoMap from "./PhotoMap";

const SinglePhotoView = () => {

    let { id } = useParams();

    const [photo, setPhoto] = useState("")

    const fetchPhoto = () => {
        console.log("getting photo...")
        const url = `https://www.duchas.ie/api/v0.5/cbeg/${id}?apiKey=Rua2njQgwdoZ9vnRb7JTV7dfHQ4c5a`
    
        fetch(url)
          .then(res => res.json())
          .then(data => setPhoto(data))
      };

    useEffect(() => {
        fetchPhoto()
      }, [])

    let photoYear = null;
    if (photo.date) {
        photoYear = <>({photo.date.year})</>
    }

    return (
        <>
            <h3>{photo.archivedDescription} {photoYear}</h3>
            <img src={`https://doras.gaois.ie/cbeg/${photo.referenceNumber}.jpg?format=jpg&width=620&quality=85`}/>
            <p><b>Photographer:</b> {photo.photographer && photo.photographer.names[0].fullName}</p>
            <Link to="/"><button class="button">Back to Main View</button></Link>
            <br></br>
            <br></br>
            <br></br>
            <PhotoMap photo = {photo}/>
        </>
    )
}

export default SinglePhotoView