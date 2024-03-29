export const MS_IN_ONE_MINUTE = 1000 * 60;
export const MS_IN_ONE_HOUR = MS_IN_ONE_MINUTE * 60;
export const MS_IN_ONE_DAY = MS_IN_ONE_HOUR * 24;
export const NOT_DESKTOP_WIDTH = 1222;
export const MAIN_URL = `${process.env.PUBLIC_URL}`;
export const IMAGES_DESKTOP = [
  ['/img/car-1-desctop.webp', '/img/car-1-desctop.jpg'],
  ['/img/car-2-desctop.webp', '/img/car-2-desctop.jpg'],
  ['/img/car-3-desctop.webp', '/img/car-3-desctop.jpg'],
];
export const IMAGES_TABLET = [
  ['/img/car-1-tablet.webp', '/img/car-1-tablet.jpg'],
  ['/img/car-2-tablet.webp', '/img/car-2-tablet.jpg'],
  ['/img/car-3-tablet.webp', '/img/car-3-tablet.jpg'],
];
export const IMAGES_MOBILE = [
  '/img/car-1-mobile.webp',
  '/img/car-1-mobile.jpg',
];

export const IMAGES_PREVIEW_NEW_MODEL = [
  '/img/car-1-preview.jpg',
  '/img/car-2-preview.jpg',
  '/img/car-3-preview.jpg',
];

export const TABS_NAME = {
  CHARACTERISTICS: `Характеристики`,
  REVIEWS: `Отзывы`,
  CONTACTS: `Контакты`,
};

export const NAV_HEADER = [`Автомобили`, `Контакты`, `Услуги`, `Вакансии`];
export const NAV_FOOTER = [
  `Корпоративным клиентам`,
  `Клиентам`,
  `Аренда авто`,
  `Каршеринг`,
  `Как продать авто`,
  `Traid-in`,
  `Test draiv`,
];

export const RATING = [1, 2, 3, 4, 5];
export const MIN_RATING_FOR_RECOMMENDATION = 3;

export const REVIEWS = [
  {
    author: 'Борис Иванов',
    dignity: 'мощность, внешний вид',
    limitations: 'Слабые тормозные колодки (пришлось заменить)',
    reviewText:
      'Взяли по трейд-ин, на выгодных условиях у дилера. Стильная внешка и крут по базовым характеристикам. Не думал, что пересяду на китайский автопром, но сейчас гоняю и понимаю, что полностью доволен.',
    rating: 3,
    time: new Date(),
  },
  {
    author: 'Марсель Исмагилов',
    dignity: 'Cтиль, комфорт, управляемость',
    limitations: ' Дорогой ремонт и обслуживание',
    reviewText:
      'Дизайн отличный, управление просто шикарно, ощущения за рулём такой машины особые. Но ремонт очень дорогой. Пару месяцев назад пришлось менять двигатель. По стоимости вышло как новый автомобиль. Так что, если покупать эту машину, надо быть готовым к большим расходам на обслуживание.',
    rating: 3,
    time: new Date(),
  },
];

export const REVIEW_TEMPLATE = {
  author: ``,
  dignity: ``,
  limitations: ``,
  rating: 0,
  reviewText: ``,
};
