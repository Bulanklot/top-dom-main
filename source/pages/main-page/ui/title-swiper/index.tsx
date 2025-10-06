'use client';
import styles from "./styles/styles.module.scss"
import {Swiper , SwiperSlide} from "swiper/react";
import "swiper/css";
import {BunnerSlideUI} from "@/source/pages/main-page/ui/swiper-slide-ui";
import {Autoplay} from "swiper/modules";

export const SwiperUI =  () => {
 return (
     <Swiper
         modules={[Autoplay]}
     loop={true}
     spaceBetween={7}
         autoplay={{
             delay: 6000,
             disableOnInteraction: false,
             pauseOnMouseEnter: true,
         }}
     className={styles.container}>
        <SwiperSlide> <BunnerSlideUI/></SwiperSlide>
         <SwiperSlide> <BunnerSlideUI/></SwiperSlide>
         <SwiperSlide> <BunnerSlideUI/></SwiperSlide>
         <SwiperSlide> <BunnerSlideUI/></SwiperSlide>
         <SwiperSlide> <BunnerSlideUI/></SwiperSlide>
         <SwiperSlide> <BunnerSlideUI/></SwiperSlide>
     </Swiper>
 )
}