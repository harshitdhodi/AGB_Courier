'use client';

import Link from 'next/link';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import { NextArrowTwo, PrevArrowTwo } from '@/components/svg';

const sliderData = [
  {
    id: 1,
    bgImg: 'https://ik.imagekit.io/mikbqwyy0/be4a2ed9-2ea3-4372-8198-547841539f08.png',
    title: 'Efficient Logistics for Global Shipping',
    subtitle: `Delivering Cargo Beyond country's`,
    description: `Efficient logistics enhances global shipping by reducing <br>
                    delays and optimizing supply chain management.`,
    btnUrl: '/contact',
    btnText: 'Get Started Now',
  }
];

const HeroSliderOne = ({ slides }: { slides?: any[] }) => {
  const data = slides && slides.length > 0 ? slides : sliderData;
  const sliderOptions: SwiperOptions = {
    slidesPerView: 1,
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 3000,
    },
    navigation: {
      prevEl: '.arrow-prev',
      nextEl: '.arrow-next',
    },
  };

  return (
    <div className="it-slider-area">
      <div className="it-slider-wrap">
        <div className="swiper-container it-slider-active p-relative">
          <Swiper
            modules={[Autoplay, Navigation, EffectFade]}
            {...sliderOptions}
            className="swiper-wrapper"
          >
            {data.map((item) => (
              <SwiperSlide key={item.id} className="swiper-slide">
                <div className="it-slider-overlay z-index-1 fix p-relative">
                  <div
                    className="it-slider-bg"
                    style={{ backgroundImage: `url(${item.bgImg})` }}
                  ></div>
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-7 col-lg-8">
                        <div className="it-slider-content z-index-1">
                          <span className="it-slider-subtitle">
                            {item.subtitle}
                          </span>
                          <h1
                            className="it-slider-title p-relative"
                            dangerouslySetInnerHTML={{ __html: item.title }}
                          ></h1>
                          <div className="it-slider-text d-flex pb-20">
                            <p
                              dangerouslySetInnerHTML={{
                                __html: item.description,
                              }}
                            ></p>
                          </div>
                          <div className="it-slider-btn">
                            <Link
                              className="it-btn-orange hover-2"
                              href={item.btnUrl}
                            >
                              <span>{item.btnText}</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="it-slider-arrow-box d-none d-lg-block">
            <div>
              <button className="arrow-next mb-25">
                <NextArrowTwo />
              </button>
              <button className="arrow-prev active">
                <PrevArrowTwo />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HeroSliderOne;
