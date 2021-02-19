import React, { useState } from 'react';

import { IMGES_ACTIVE_NEW_MODEL, IMGES_PREVIEW_NEW_MODEL } from '../const';

const Slider = () => {
  const [indexImgActive, setIndexImg] = useState(0);
  const [imgWebp, imgJpg] = IMGES_ACTIVE_NEW_MODEL[indexImgActive];

  return (
    <section className="page-content__slider slider">
      <h2 className="visually-hidden">Сладер с фото автомабиля</h2>
      <div className="slider__image-active-wrapper">
        <picture>
          <source
            type="image/webp"
            media="(min-width: 1024px)"
            srcSet={imgWebp}
          />
          <img
            src={imgJpg}
            loading="lazy"
            alt="Машина, фото спереди"
            width="600"
            height="375"
          />
        </picture>
      </div>
      <div className="slider__wrapper">
        <button
          type="button"
          className="slider__button"
          disabled={indexImgActive === 0}
          onClick={() => setIndexImg(indexImgActive - 1)}
        ></button>
        <div className="slider__preview">
          {IMGES_PREVIEW_NEW_MODEL.map((img, index) => (
            <img
              src={img}
              alt="фото машины"
              width="128"
              height="80"
              key={index}
            />
          ))}
        </div>

        <button
          type="button"
          className="slider__button"
          disabled={indexImgActive === 2}
          onClick={() => setIndexImg(indexImgActive + 1)}
        ></button>
      </div>
    </section>
  );
};

export default Slider;
