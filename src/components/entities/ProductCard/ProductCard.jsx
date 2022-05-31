import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import {
  addNumberToBasket,
  addToBasket,
  addTotalAmount,
} from '../../app/reducers/productSlice';
import style from './productcard.module.css';

const ProductCard = (props) => {
  const { name, description, img, price, portion } = props.product;
  const dispatch = useDispatch();

  function applyDispatch() {
    dispatch(addToBasket(props.product));
    dispatch(addNumberToBasket());
    dispatch(addTotalAmount());
  }

  return (
    <li className={style['list-item']}>
      <img src={img} alt="фото блюда" className={style['list-item__img']} />

      <h2 className={style['list-item__heading']}>{name}</h2>

      <p className={style['list-item__paragraph']}>{description}</p>
      <div className={style['list-item__basket']}>
        <div className={style['list-item__price-gramm']}>
          <span className={style['basket-price']}>{price} ₽</span>
          <span className={style['basket-gramm']}>/ {portion}</span>
        </div>

        <div
          className={style['list-item__basket-icon']}
          onClick={() => applyDispatch()}
        ></div>
      </div>
    </li>
  );
};

ProductCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
  price: PropTypes.string,
  portion: PropTypes.string,
};

export default ProductCard;
