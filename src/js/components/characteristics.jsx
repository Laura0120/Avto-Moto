import React from 'react';

const Characteristics = () => {
  return (
    <div>
      <h2 className="visually-hidden">Характеристики</h2>
      <table className="about-product__characteristics characteristics">
        <tbody>
          <tr className="characteristics__item">
            <th className="characteristics__parameter">Трансмиссия</th>
            <th className="characteristics__vatue">Роботизированная</th>
          </tr>
          <tr className="characteristics__item">
            <th className="characteristics__parameter">
              Мощность двигателя, л.с.
            </th>
            <th className="characteristics__vatue">249</th>
          </tr>
          <tr className="characteristics__item">
            <th className="characteristics__parameter">Тип двигателя</th>
            <th className="characteristics__vatue">Бензиновый</th>
          </tr>
          <tr className="characteristics__item">
            <th className="characteristics__parameter">Привод</th>
            <th className="characteristics__vatue">Полный</th>
          </tr>
          <tr className="characteristics__item">
            <th className="characteristics__parameter">Объем двигателя, л</th>
            <th className="characteristics__vatue">2.4</th>
          </tr>
          <tr className="characteristics__item">
            <th className="characteristics__parameter">
              Макс. крутящий момент
            </th>
            <th className="characteristics__vatue">370/4500</th>
          </tr>
          <tr className="characteristics__item">
            <th className="characteristics__parameter">Количество цилиндров</th>
            <th className="characteristics__vatue">4</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Characteristics;
