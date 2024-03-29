import React from "react";

import "./styles/ImagesDisplay.css";

export default function ImagesDisplay(props) {
  if (props.data) {
    return (
      <section className="ImagesDisplay">
        {props.data.map(function (image, index) {
          return (
            <div className="image" key={index}>
              <a href={image.src.original} target="_blank" rel="noreferrer">
                <img
                  src={image.src.landscape}
                  alt={image.alt}
                  className="img-fluid"
                />
              </a>
            </div>
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}
