import { useState } from "react";
import style from "./Gallery.module.css";
function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const images = [
    {
      img: "./images/demo.jpg",
      description: "L'Oréal has set itself the mission of offering all women",
    },
    {
      img: "./images/demo.jpg",
      description: "L'Oréal has set itself the mission of offering all women",
    },
    {
      img: "./images/demo.jpg",
      description: "L'Oréal has set itself the mission of offering all women",
    },
    {
      img: "./images/demo.jpg",
      description: "L'Oréal has set itself the mission of offering all womenPolytechnic Teacher visit [4 sep 2024]",
    },
    {
      img:"./images/demo.jpg",
      description: "L'Oréal has set itself the mission of offering all women",
    },{
      img:"./images/demo.jpg",
      description: "L'Oréal has set itself the mission of offering all women",
    },{
      img:"./images/demo.jpg",
      description: "L'Oréal has set itself the mission of offering all women",
    },{
      img:"./images/demo.jpg",
      description: "L'Oréal has set itself the mission of offering all women",
    },]
  const handleImageClick = (item) => {
    setSelectedImage(item);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <div className="container">
      <div className={style["custom-border-class"]}>
        <h1 className={style['custom-class']}>Gallery</h1>

        <div className={style['custom-grid']}>
          {images.map((item, index) => (
            <div
              key={index}
              className={style['custom-item']}
              onClick={() => handleImageClick(item)}
            >
              <img
                src={item.img}
                alt={item.title}
                className={style['custom-image']}
              />
              <div className={style['overlay-container']}>
                <p className={style['text-block']}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            className={style['overlay']}
            onClick={handleCloseLightbox}
          >
            <div className={style['container1']}>
              <img
                src={selectedImage.img}
                alt={selectedImage.title}
                className={style['full-width-auto-height']}
              />
              <button
                onClick={handleCloseLightbox}
                className={style['close-button']}
              >
                &times;
              </button>
              <p className={style['centered-text']}>
                {selectedImage.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Gallery;
