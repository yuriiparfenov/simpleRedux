import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Header from '../../shared/Header/Header';
import { deleteFromBasket } from '../../app/reducers/productSlice';
import style from './basket.module.css';
import { Link } from 'react-router-dom';

const Basket = () => {
  const basketProducts = useSelector((state) => state.products.basketProducts);
  const totalAmount = useSelector((state) => state.products.totalAmount);
  const dispatch = useDispatch();

  const heading = `корзина с выбранными товарами`;
  return (
    <div className={style['container-basket']}>
      <Header heading={heading} />
      <Link to="/main" className={style['back-to-main']}>
        <h3>Главная страница</h3>
      </Link>
      <div className={style['basket-list']}>
        {basketProducts.map((product, index) => {
          return (
            <section
              className={style['basket-item']}
              key={product.id + ` ` + index}
            >
              <img
                src={product.img}
                alt="фото блюда"
                className={style['basket-item__img']}
              />

              <h2 className={style['basket-item__heading']}>{product.name}</h2>

              <div className={style['basket-item__basket']}>
                <div className={style['basket-item__price-gramm']}>
                  <span className={style['basket-price']}>
                    {product.price} ₽
                  </span>
                </div>

                <div
                  key={product.uuid}
                  onClick={() => dispatch(deleteFromBasket(product.uuid))}
                  className={style['basket-item__icon-delete']}
                ></div>
              </div>
            </section>
          );
        })}
      </div>

      <div className={style['basket-total']}>
        <div className={style['basket-total__text']}>
          <span className={style['total-text']}>заказ на сумму:</span>
          <span className={style['total-sum']}>{totalAmount} ₽</span>
        </div>
        <button className={style['total-order']}>Оформить заказ</button>
      </div>
    </div>
  );
};

export default Basket;
