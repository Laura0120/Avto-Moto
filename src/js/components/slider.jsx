import React, { useState } from 'react';

import {
  IMAGES_DESKTOP,
  IMAGES_TABLET,
  IMAGES_MOBILE,
  IMAGES_PREVIEW_NEW_MODEL,
} from '../const';

const Slider = () => {
  const [indexImgActive, setIndexImg] = useState(0);
  const [desktopWebp, desktopJpg] = IMAGES_DESKTOP[indexImgActive];
  const [tabletWebp, tabletJpg] = IMAGES_TABLET[indexImgActive];
  const [mobileWebr, mobileJpg] = IMAGES_MOBILE;

  const onScrollForward = () => {
    if (indexImgActive < 2) {
      setIndexImg(indexImgActive + 1);
    }
  };
  const onScrollBack = () => {
    if (indexImgActive > 0) {
      setIndexImg(indexImgActive - 1);
    }
  };
  return (
    <section className="page-content__slider slider">
      <h2 className="visually-hidden">Сладер с фото автомабиля</h2>
      <div className="slider__image-active-wrapper">
        <picture>
          <source
            type="image/webp"
            media="(min-width: 1223px)"
            srcSet={desktopWebp}
          />
          <source
            type="image/webp"
            media="(min-width: 768px)"
            srcSet={tabletWebp}
          />
          <source type="image/webp" srcSet={mobileWebr} />
          <source media="(min-width: 1223px)" srcSet={desktopJpg} />
          <source media="(min-width: 768px)" srcSet={tabletJpg} />
          <img
            src={mobileJpg}
            loading="lazy"
            alt="Машина, фото спереди"
            width="289"
            height="180"
          />
        </picture>
      </div>
      <div className="slider__wrapper">
        <button
          type="button"
          className={`slider__button ${
            indexImgActive === 0 ? `slider__button--disabled` : ``
          }`}
          aria-label="листать назад"
          onClick={onScrollBack}
        ></button>
        <div className="slider__preview">
          {IMAGES_PREVIEW_NEW_MODEL.map((img, index) => (
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
          className={`slider__button ${
            indexImgActive === 2 ? `slider__button--disabled` : ``
          }`}
          aria-label="листать вперёд"
          onClick={onScrollForward}
        ></button>
      </div>
    </section>
  );
};

export default Slider;
