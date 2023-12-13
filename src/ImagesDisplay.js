import React from "react";

import "./ImagesDisplay.css";

export default function ImagesDisplay(props) {
  if (props.data) {
    return (
      <section className="ImagesDisplay">
        <div className="row">
          {props.data.map(function (image, index) {
            return (
              <div className="col-3" key={index}>
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
        </div>
      </section>
    );
  } else {
    return null;
  }
}
