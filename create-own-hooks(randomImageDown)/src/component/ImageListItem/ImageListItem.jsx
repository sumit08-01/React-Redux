import React from "react";
import "./ImageListItem.css";
import { saveAs } from "file-saver";

export const ImageListItem = ({ image }) => {
  async function downloadImage() {
    const imageResponse = await fetch(image.download_url); // this will give the url of the image
    const imageBlob = await imageResponse.blob(); // this will create a blob of a image for download
    saveAs(imageBlob, image.author + "_" + image.id);
  }
  return (
    <div className="card">
      <a href={image.url}>
        <img src={image.download_url} className="img" />
      </a>
      <div className="card_banner">
        <img src={image.download_url} className="card_thumb" />
        <div className="card_text">
          <h3 className="card_title">{image.author}</h3>
          <div className="card_subtitle">
            Original size : {image.height}×{image.width}
          </div>
          <button onClick={downloadImage}>Download</button>
        </div>
      </div>
    </div>
  );
};
