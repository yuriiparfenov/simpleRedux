import React from "react";
import SmallShopingCard from "../../entities/SmallShopingCard/SmallShopingCard";
import Header from "../../shared/Header/Header";
import ProductCard from "../../entities/ProductCard/ProductCard";
import productList from "../../assets/products/products";
import mainPagestyles from "./mainpage.module.css";

function MainPage() {
    const heading = `наша продукция`;
    return (
        <div className={mainPagestyles["container-main"]}>
            <header className={mainPagestyles["header"]}>
                <Header heading={heading}/>
                    <SmallShopingCard/>   
                            
            </header>
            <main className={mainPagestyles["main"]}>
                <ul className={mainPagestyles["main-list"]}>
                    {
                        productList.map((product) => {
                        return (
                                <ProductCard key={product.id} product={product}/>
                        ) 
                        })
                    }
                    
                </ul>
            </main>
        </div>
    )
}

export default MainPage;