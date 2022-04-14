import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./SliderDepartment";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";

export default function SliderDepartment(imgs) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
        {imgs.props.map((img) => (
          <SwiperSlide key={img}>
            <img
              src={img}
              style={{
                width: "100%",
                height: " 100%",
                maxHeight: "700px",
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
