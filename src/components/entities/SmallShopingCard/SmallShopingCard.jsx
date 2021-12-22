import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./smallshopingcard.module.css";


function SmallShopingCard() {
    const number = useSelector((state) => state.products.number);
    const totalAmount = useSelector((state) => state.products.totalAmount);
    const icon = `assets/images/shopping-card-icon.svg`;

    return (
        <div className={styles["shoping-card"]}>
                
                <div className={styles["quantity-amount-goods"]}>
                    <span className={styles["number-goods"]}>Выбрано товаров ({number})</span>
                    <span className={styles["total-amount-goods"]}>На сумму {totalAmount} &#8381;</span>
                </div>
                
                <Link to="/basket" >
                    <div className={styles["shoping-card__icon"]}>
                        <img src={icon} alt="Корзина товаров" className={styles["shoping-card__img"]}/>
                    </div>
                </Link>
                
        </div>  
    )
}

export default SmallShopingCard;