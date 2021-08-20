import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import { AiOutlineShoppingCart } from "react-icons/ai"


import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";

import "./home.scss";

import SwiperCore, { Pagination, Navigation } from "swiper/core";
import { ProductsData } from "../Products/ProductsData";
import { Link } from "react-router-dom";


SwiperCore.use([Pagination, Navigation]);

export default function App() {


    return (
        <div className="pricesort">
            <Swiper
                slidesPerView={1}
                spaceBetween={1}
                navigation={true}
                pagination={{
                    clickable: true
                }}
                breakpoints={{
                    "640": {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    "768": {
                        slidesPerView: 3,
                        spaceBetween: 40
                    },
                    "1024": {
                        slidesPerView: 4,
                        spaceBetween: 50
                    },
                    "1444": {
                        slidesPerView: 5,
                        spaceBetween: 50
                    }
                }}
                className="mySwiper"
            >

                {ProductsData.filter(product => product.price < 1500).map((product) => {
                    return (
                        <SwiperSlide>
                            <div className="card">
                                <img src={product.img} alt={product.name} />
                                <div className="data">
                                    <div>

                                        <Link className="link" to={`/product/${product.id}`}>{product.name} </Link>
                                        <div> {product.price} Rs</div>
                                    </div>
                                    <i><AiOutlineShoppingCart /></i>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </div>
    );
}
