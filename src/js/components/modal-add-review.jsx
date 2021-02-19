import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { RATING, REVIEW_TEMPLATE } from '../const';

const ModalAddReveiw = (props) => {
  const { setIsModalOpen, addReview } = props;

  const [currentReview, setCurrentReview] = useState(REVIEW_TEMPLATE);
  const [authorValid, setAuthorValid] = useState(true);
  const [reviewTextValid, setReviewTextValid] = useState(true);

  useEffect(() => {
    const savedCurrentReview = localStorage.getItem('savedCurrentReview');
    const review = savedCurrentReview
      ? JSON.parse(savedCurrentReview)
      : REVIEW_TEMPLATE;
    setCurrentReview(review);
  }, []);

  useEffect(() => {
    localStorage.setItem(`savedCurrentReview`, JSON.stringify(currentReview));
  }, [currentReview]);

  const onClose = () => {
    setIsModalOpen(false);
    document.removeEventListener('click', onOverlayClick);
    document.removeEventListener('keydown', onEcsDown);
  };

  const onOverlayClick = (evt) => {
    if (
      !evt.target.closest('.modal__form') &&
      !evt.target.closest('.reviews__button')
    ) {
      onClose();
    }
  };

  const onEcsDown = (evt) => {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      onClose();
    }
  };

  document.addEventListener('click', onOverlayClick);
  window.addEventListener('keydown', onEcsDown);

  return (
    <div className="modal">
      <form
        action="/"
        method="get"
        className="modal__form form-add-review"
        onSubmit={(evt) => {
          evt.preventDefault();
          if (!currentReview.author) {
            setAuthorValid(false);
            return;
          }
          if (!currentReview.reviewText) {
            setReviewTextValid(false);
            return;
          }
          addReview({
            ...currentReview,
            time: new Date(),
          });
          localStorage.setItem(
            `savedCurrentReview`,
            JSON.stringify(REVIEW_TEMPLATE)
          );
          onClose();
        }}
      >
        <h2 className="form-add-review__title">Оставить отзыв</h2>
        <button
          type="button"
          className="form-add-review__button-close"
          aria-label="закрыть форму"
          onClick={onClose}
        ></button>
        <div className="form-add-review__wrapper">
          <div
            className={`form-add-review__required-wrapper ${
              !authorValid
                ? `form-add-review__required-wrapper--error-message`
                : ``
            }`}
          >
            <input
              className={`form-add-review__input form-add-review__input--author ${
                !authorValid ? `form-add-review__required` : ``
              }`}
              id="author"
              type="text"
              name="author"
              placeholder="Имя"
              value={currentReview.author}
              onChange={(evt) => {
                setAuthorValid(true);
                setCurrentReview({
                  ...currentReview,
                  author: evt.target.value,
                });
              }}
              autoFocus
            />
            <label htmlFor="author" className="visually-hidden">
              Ваше имя
            </label>
          </div>
          <input
            className="form-add-review__input form-add-review__input--dignity"
            id="dignity"
            type="text"
            name="dignity"
            placeholder="Достоинства"
            value={currentReview.dignity}
            onChange={(evt) =>
              setCurrentReview({ ...currentReview, dignity: evt.target.value })
            }
          />
          <label htmlFor="dignity" className="visually-hidden">
            Достоинства
          </label>
          <input
            className="form-add-review__input form-add-review__input--limitations"
            id="limitations"
            type="text"
            name="limitations"
            placeholder="Недостатки"
            value={currentReview.limitations}
            onChange={(evt) =>
              setCurrentReview({
                ...currentReview,
                limitations: evt.target.value,
              })
            }
          />
          <label htmlFor="limitations" className="visually-hidden">
            Недостатки
          </label>
        </div>
        <div className="form-add-review__wrapper">
          <fieldset className="form-add-review__rating">
            <h3 className="form-add-review__rating-title">Оцените товар:</h3>
            {RATING.map((star) => (
              <React.Fragment key={star}>
                <input
                  className=" visually-hidden "
                  id={`star-${star}`}
                  type="radio"
                  name="rating"
                  value={star}
                  checked={currentReview.rating === star}
                  onChange={(evt) =>
                    setCurrentReview({
                      ...currentReview,
                      rating: Number(evt.target.value),
                    })
                  }
                />
                <label htmlFor={`star-${star}`} aria-label={`${star} зведа`}>
                  <svg
                    width="27"
                    height="25"
                    viewBox="0 0 27 25"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className={
                        star <= currentReview.rating
                          ? `form-add-review__star-active`
                          : ``
                      }
                      d="M13.5688 0L16.6151 9.52282H26.4734L18.4979 15.4082L21.5443 24.9311L13.5688 19.0456L5.59324 24.9311L8.63961 15.4082L0.664102 9.52282H10.5224L13.5688 0Z"
                      fill="#BDBEC2"
                      fillOpacity="0.7"
                    />
                  </svg>
                </label>
              </React.Fragment>
            ))}
          </fieldset>
          <div
            className={`form-add-review__required-wrapper ${
              !reviewTextValid
                ? `form-add-review__required-wrapper--error-message`
                : ``
            }`}
          >
            <textarea
              className={`form-add-review__review-text ${
                !reviewTextValid ? `form-add-review__required` : ``
              }`}
              id="review-text"
              name="review-text"
              placeholder="Комментарий"
              value={currentReview.reviewText}
              onChange={(evt) => {
                setReviewTextValid(true);
                setCurrentReview({
                  ...currentReview,
                  reviewText: evt.target.value,
                });
              }}
            ></textarea>
            <label htmlFor="review-text" className="visually-hidden">
              Комментарий
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="form-add-review__submit button button--active"
        >
          оставить отзыв
        </button>
      </form>
    </div>
  );
};

ModalAddReveiw.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
  addReview: PropTypes.func.isRequired,
};

export default ModalAddReveiw;
