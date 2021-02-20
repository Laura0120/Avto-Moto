import React, { useEffect, useState } from 'react';
// import moment from 'moment';
// import 'moment/locale/ru';

import ModalAddReveiw from './modal-add-review';

import {
  REVIEWS,
  RATING,
  MIN_RATING_FOR_RECOMMENDATION,
  MS_IN_ONE_DAY,
  MS_IN_ONE_MINUTE,
  MS_IN_ONE_HOUR,
} from './../const';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const savedReviews = localStorage.getItem(`savedReviews`);
    const reviewHistory = savedReviews ? JSON.parse(savedReviews) : REVIEWS;
    setReviews(reviewHistory);
  }, []);

  useEffect(() => {
    localStorage.setItem(`savedReviews`, JSON.stringify(reviews));
  }, [reviews]);

  const addReview = (review) => {
    setReviews([...reviews, review]);
  };

  // const getDateForReview = (date) => {
  //   moment.locale('ru');
  //   const dateObj = moment(date);

  //   const reviewDate =
  //     moment().utc().diff(dateObj, `days`) >= 2
  //       ? dateObj.format(`YYYY/MM/DD hh:mm`)
  //       : dateObj.fromNow();
  //   return reviewDate;
  // };

  const getDateReview = (date) => {
    const elapsedTime = new Date() - new Date(date);
    var options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    };

    if (elapsedTime < MS_IN_ONE_DAY) {
      switch (true) {
        case elapsedTime < MS_IN_ONE_MINUTE:
          return `несколько секунд назад`;
        case elapsedTime >= MS_IN_ONE_MINUTE && elapsedTime < MS_IN_ONE_HOUR:
          return `${Math.floor(elapsedTime / MS_IN_ONE_MINUTE)} минут назад`;
        case elapsedTime >= MS_IN_ONE_HOUR:
          return `${Math.floor(elapsedTime / MS_IN_ONE_HOUR)} час назад`;
        default:
          return ``;
      }
    } else {
      return new Date(date).toLocaleString('ru', options);
    }
  };

  const getRecommendation = (rating) => {
    switch (true) {
      case rating === 0:
        return '';
      case rating < MIN_RATING_FOR_RECOMMENDATION:
        return `Не советует`;
      case rating >= MIN_RATING_FOR_RECOMMENDATION:
        return `Советует`;
      default:
        return ``;
    }
  };

  const onAddReviewClick = (evt) => {
    evt.preventDefault();
    setIsModalOpen(true);
  };

  return (
    <React.Fragment>
      <section className="about-product__reviews reviews">
        <a
          href="#"
          className="reviews__button button"
          onClick={onAddReviewClick}
        >
          оставить отзыв
        </a>
        {reviews.map(
          (
            { author, dignity, limitations, reviewText, rating, time },
            index
          ) => (
            <div className="reviews__item review" key={index}>
              <blockquote className="review__quote">
                <cite className="review__author">{author}</cite>
                <dl className="review__dignity">
                  <dt>Достоинства</dt>
                  <dd>{dignity}</dd>
                </dl>
                <dl className="review__limitations">
                  <dt>Недостатки</dt>
                  <dd>{limitations}</dd>
                </dl>
                <dl>
                  <dt>Комментарий</dt>
                  <dd className="review__text">{reviewText}</dd>
                </dl>
              </blockquote>
              <div className="review__wrapper">
                <div
                  className="review__rating"
                >
                  <h3 className='visually-hidden'>рейтинг {rating}</h3>
                  {RATING.map((star) => (
                    <span
                      className={`review__rating-star ${
                        rating >= star
                          ? `review__rating-star--active`
                          : `review__rating-star--inactive`
                      }`}
                      key={star}
                    ></span>
                  ))}
                </div>
                <span className="review__recommendation">
                  {getRecommendation(rating)}
                </span>
              </div>
              <div className="review__wrapper">
                <span className="review__time">{getDateReview(time)}</span>
                <a href="#" className="review__response">
                  Ответить
                </a>
              </div>
            </div>
          )
        )}
      </section>
      {isModalOpen && (
        <ModalAddReveiw setIsModalOpen={setIsModalOpen} addReview={addReview} />
      )}
    </React.Fragment>
  );
};

export default Reviews;
