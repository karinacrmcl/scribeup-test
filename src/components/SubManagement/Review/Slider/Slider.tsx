import React, { createRef, useRef, useState } from "react";
import MainBlock from "../../../../layouts/MainBlock/MainBlock";
import UISvgSelector from "../../../UI/UISvgSelector";
import { IconSelector } from "./IconSelector";
import s from "./Slider.module.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "../../../../styles/lib/swiper.scss";
import Button from "../../../UI/Button/Button";

SwiperCore.use([Navigation]);

type SubInfo = {
  id: number;
  icon: string;
  total: number;
  monthly: number;
  lastCharge: string;
};

type Props = {
  items: SubInfo[];
};

type CardProps = {
  item: SubInfo;
};

function SliderCard({ item: { icon, total, monthly, lastCharge } }: CardProps) {
  return (
    <div className={s.slider_card}>
      <div className={s.slider_card_content}>
        <button className={s.slider_expand}>
          <UISvgSelector id="expand" />
        </button>
        <div className={s.slider_card_logo}>
          <IconSelector id={icon} />
        </div>
        <div className={s.slider_card_value}>
          <h4>${monthly}</h4>
          <span>/month</span>
        </div>
        <div className={s.slider_card_info}>
          <h5 className={s.slider_card_total}>{`$${total} spent total`}</h5>
          <p
            className={s.slider_card_lastcharge}
          >{`Your last charge was on ${lastCharge}`}</p>
        </div>
      </div>
    </div>
  );
}

export default function Slider({ items }: Props) {
  const prevBtn = useRef<HTMLButtonElement | null>(null);
  const nextBtn = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef(null);

  const [reviewed, setReviewed] = useState(0);
  const handleReview = () => {
    return;
  };

  return (
    <MainBlock>
      <div className={s.slider_container}>
        <h3 className={s.slider_title}>{reviewed}/6 Subscriptions Reviewed</h3>

        <div className={s.slider_slider}>
          <button
            className={s.slider_btn}
            ref={prevBtn}
            // @ts-ignore
            onClick={() => swiperRef.current.swiper.slidePrev()}
          >
            <UISvgSelector id="prev-arrow" />
          </button>
          <div className={s.slider_swiper}>
            <Swiper
              // @ts-ignore
              ref={swiperRef}
              slidesPerView={1}
              spaceBetween={20}
              navigation={{
                prevEl: prevBtn.current,
                nextEl: nextBtn.current,
              }}
            >
              {items.map((item) => {
                return (
                  <SwiperSlide key={item.id}>
                    <SliderCard item={item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <button
            className={s.slider_btn}
            // @ts-ignore
            onClick={() => swiperRef.current.swiper.slideNext()}
          >
            <UISvgSelector id="next-arrow" />
          </button>
        </div>

        <div className={s.slider_buttons}>
          <Button onClick={handleReview} styles={{ background: "#F86262" }}>
            <h3 className={s.slider_button_main}>I Want to Cancel This</h3>
            <p className={s.slider_button_small}>to save money</p>
          </Button>
          <Button onClick={handleReview} styles={{ background: "#5DB075" }}>
            <h3 className={s.slider_button_main}>I Want to Add This</h3>
            <p className={s.slider_button_small}>to earn 5% Rewards</p>
          </Button>
        </div>

        <div className={s.slider_notsub}>This is Not a Subscription</div>
      </div>
    </MainBlock>
  );
}
