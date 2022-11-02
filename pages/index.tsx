import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dush</title>
        <meta name="description" content="Dush" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Swiper
          pagination={true}
          modules={[Autoplay, Pagination]}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          className={styles.mySwiper}
        >
          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.swiperImg}>
              <img src="logo.png" alt="" />
            </div>
            <h2>Wallet</h2>
          </SwiperSlide>

          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.swiperImg}>
              <img src="logo.png" alt="" />
            </div>
            <h2>Transfer</h2>
          </SwiperSlide>

          <SwiperSlide className={styles.swiperSlide}>
            <div className={styles.swiperImg}>
              <img src="logo.png" alt="" />
            </div>
            <h2>Payment</h2>
          </SwiperSlide>
        </Swiper>
        <a href="/signUp">
          <button>Create free account</button>
        </a>
        <p>Already have an account?</p>
        <a href="/signin">Sign In</a>
      </main>
    </div>
  );
};

export default Home;
