import React, { useState } from 'react';

import { IMGES_ACTIVE_NEW_MODEL, IMGES_PREVIEW_NEW_MODEL } from '../const';

const Slider = () => {
  const [indexImgActive, setIndexImg] = useState(0);
  const [imgWebp, imgJpg] = IMGES_ACTIVE_NEW_MODEL[0][indexImgActive];

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
        {/* <picture>
                  <source
                    type="image/webp"
                    media="(min-width: 1150px)"
                    srcset="
                      img/photo-hare-desktop@1x.webp 1x,
                      img/photo-hare-desktop@2x.webp 2x
                    "
                  />
                  <source
                    type="image/webp"
                    media="(min-width: 768px)"
                    srcset="
                      img/photo-hare-tablet@1x.webp 1x,
                      img/photo-hare-tablet@2x.webp 2x
                    "
                  />
                  <source
                    type="image/webp"
                    srcset="
                      img/photo-hare-mobile@1x.webp 1x,
                      img/photo-hare-mobile@2x.webp 2x
                    "
                  /> */}
                  {/* <source
                    media="(min-width: 1150px)"
                    srcset="
                      img/photo-hare-desktop@1x.jpg 1x,
                      img/photo-hare-desktop@2x.jpg 2x
                    "
                  />
                  <source
                    media="(min-width: 768px)"
                    srcset="
                      img/photo-hare-tablet@1x.jpg 1x,
                      img/photo-hare-tablet@2x.jpg 2x
                    "
                  />
                  <img
                    src="img/photo-hare-mobile@1x.jpg"
                    srcset="img/photo-hare-mobile@2x.jpg"
                    width="260"
                    height="195"
                    alt="Вязаный зайчик в голубо-бежевой расцветке"
                  />
                </picture> */}
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
