'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import { Autoplay, Pagination } from 'swiper/modules';
import { testimonialDataThree } from '@/data/testimonial-data';
import rightImg from '@/assets/img/choose/choose-5.jpg';

const AboutTestimonial = () => {
  const sliderOptions: SwiperOptions = {
    speed: 1000,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.testimonial-slider-dots',
      clickable: true,
    },
  };

  return (
    <div className="it-client-testimonial-section">
      <div className="container">
        <div className="row align-items-stretch">
          {/* Left Column: Testimonial Reviews Slider */}
          <div
            className="col-lg-6 mb-40 mb-lg-0 wow animate__fadeInLeft"
            data-wow-duration=".9s"
            data-wow-delay=".3s"
          >
            <div className="testimonial-slider-left-card">
              <div>
                {/* Large double quote mark */}
                <div className="team-slider-quote-icon">“</div>

                <div className="swiper-container it-testimonial-active fix">
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    {...sliderOptions}
                    className="swiper-wrapper"
                  >
                    {testimonialDataThree.map((item) => (
                      <SwiperSlide key={item.id} className="swiper-slide">
                        <p className="team-slider-text">
                          "{item.description.replace(/\s+/g, ' ').trim()}"
                        </p>
                        <div className="team-slider-divider"></div>
                        <div className="team-slider-profile">
                          <div className="team-profile-info">
                            {item.avatar && (
                              <Image
                                src={item.avatar}
                                alt={item.author}
                                width={60}
                                height={60}
                                className="rounded-circle"
                              />
                            )}
                            <div className="team-profile-meta">
                              <h4 className="profile-name">{item.author}</h4>
                              <span className="profile-desig">{item.designation}</span>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>

              <div className="d-flex justify-content-end mt-20">
                {/* Swiper dots page indicators */}
                <div className="testimonial-slider-dots"></div>
              </div>
            </div>
          </div>

          {/* Right Column: Static Team/Consulting Image with Rating Badges */}
          <div
            className="col-lg-6 wow animate__fadeInRight"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="testimonial-slider-right-img">
              <Image
                src={rightImg}
                alt="Hear from Our Customer"
                width={600}
                height={520}
                className="w-100 h-100 object-fit-cover"
              />

              {/* Title overlay */}
              <h3 className="right-overlay-title">
                Hear from Our <br />
                <span>Customer.</span>
              </h3>

              {/* Floating Stat Card */}
              <div className="team-floating-stat-card">
                <div className="stat-num">4.9</div>
                <div className="stat-stars">★★★★★</div>
                <div className="stat-desc">
                  (80+ Clients Reviews)
                  <br />
                  & Feedbacks
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTestimonial;
