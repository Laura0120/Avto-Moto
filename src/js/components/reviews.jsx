import React, { useEffect, useState } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

import ModalAddReveiw from './modal-add-review';

import { REVIEWS, RATING, MIN_RATING_FOR_RECOMMENDATION } from './../const';

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

  const getDateForReview = (date) => {
    moment.locale('ru');
    const dateObj = moment(date);

    const reviewDate =
      moment().utc().diff(dateObj, `days`) >= 2
        ? dateObj.format(`YYYY/MM/DD hh:mm`)
        : dateObj.fromNow();
    return reviewDate;
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
                  aria-label={`рейтинг ${rating}`}
                >
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
                  {rating < MIN_RATING_FOR_RECOMMENDATION
                    ? `Не советует`
                    : `Советует`}
                </span>
              </div>
              <div className="review__wrapper">
                <time className="review__time">{getDateForReview(time)}</time>
                <a href="#" className="review__response">
                  Ответить
                </a>
              </div>
            </div>
          )
        )}
      </section>
      {isModalOpen ? (
        <ModalAddReveiw setIsModalOpen={setIsModalOpen} addReview={addReview} />
      ) : (
        ''
      )}
    </React.Fragment>
  );
};

Reviews.propTypes = {};

export default Reviews;
