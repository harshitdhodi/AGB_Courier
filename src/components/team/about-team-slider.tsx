'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SwiperOptions } from 'swiper/types';
import { Autoplay, Pagination } from 'swiper/modules';
import { teamData } from '@/data/team-data';

const teamQuotes = [
  "Leading the global transformation of logistics. Our goal is to streamline shipping, transport, and storage operations for every client, ensuring efficiency and cost-effectiveness daily.",
  "Ensuring all yard and fleet operations run smoothly and safety/regulatory standards are held to the absolute highest tier. We maintain order even in high-throughput schedules.",
  "Client success is my priority. We orchestrate coordination across oceans and borders to keep supply chains moving and ensure clear communications with all stakeholders.",
  "Security, organization, and speed. We handle every single cargo package with the utmost level of care, managing inventory tracking and shipping processes with zero error tolerances.",
  "Data-driven accuracy is the key to logistics. We audit, track, and optimize stock levels in real time to prevent warehousing bottlenecks and speed up local dispatch loading.",
  "Efficient routes, on-time arrivals. We make sure our transport trucks and planes depart and deliver without delay, navigating global schedules with expert precision."
];

interface TeamMember {
  id: number;
  name: string;
  designation: string;
  imageUrl: string;
  facebookUrl?: string;
  twitterUrl?: string;
  linkedinUrl?: string;
}

interface AboutTeamSliderProps {
  team?: TeamMember[];
}

const AboutTeamSlider = ({ team = [] }: AboutTeamSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const displayTeam = team.length > 0
    ? team.map(member => ({
        id: member.id,
        name: member.name,
        designation: member.designation,
        image: member.imageUrl,
        facebook: member.facebookUrl || '#',
        twitter: member.twitterUrl || '#',
        linkedin: member.linkedinUrl || '#',
        phone: '+1 (555) 019-2834',
        email: `${member.name.toLowerCase().replace(/\s+/g, '')}@agbcourier.com`
      }))
    : teamData.map((m, idx) => ({
        id: m.id,
        name: m.name,
        designation: m.designation,
        image: m.image,
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        phone: m.phone,
        email: m.email
      }));

  const sliderOptions: SwiperOptions = {
    speed: 1000,
    loop: displayTeam.length > 1,
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.team-slider-dots',
      clickable: true,
    },
  };

  const handleSlideChange = (swiper: { realIndex: number }) => {
    setActiveIndex(swiper.realIndex);
  };

  // Get active team member based on state index
  const activeMember = displayTeam[activeIndex] || displayTeam[0];

  return (
    <div className="it-team-slider-section">
      <div className="container">
        <div className="row align-items-stretch">
          {/* Left Column: Expert Profile details Slider Card */}
          <div
            className="col-lg-6 mb-40 mb-lg-0 wow animate__fadeInLeft"
            data-wow-duration=".9s"
            data-wow-delay=".3s"
          >
            <div className="team-slider-left-card">
              <div>
                {/* Section overlay title — shown on the left card */}
                <h3 className="team-section-title mb-10">
                  Meet Our <span>Team Experts.</span>
                </h3>

                {/* Upper side: Name & Designation */}
                <div className="team-profile-meta mb-15">
                  <h4 className="profile-name">
                    {activeMember?.name}
                  </h4>
                  <span className="profile-desig">
                    {activeMember?.designation}
                  </span>
                </div>

                <div className="team-slider-divider" style={{ margin: '15px 0 25px 0' }}></div>

                {/* Middle: Swiper Slider for descriptions */}
                <div className="swiper-container it-team-active fix">
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    {...sliderOptions}
                    onSlideChange={handleSlideChange}
                    className="swiper-wrapper"
                  >
                    {displayTeam.map((member, index) => (
                      <SwiperSlide key={member.id} className="swiper-slide">
                        <p className="team-slider-text">
                          {teamQuotes[index % teamQuotes.length]}
                        </p>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                {/* Card Footer: Contact details and Dot navigation */}
                <div>
                  <div className="team-slider-divider" style={{ margin: '25px 0 20px 0' }}></div>
                  <div className="team-slider-profile">
                    <div className="team-profile-meta">
                      <span className="small text-muted d-block">
                        <strong>Phone:</strong> {activeMember?.phone}
                      </span>
                      <span className="small text-muted d-block">
                        <strong>Email:</strong> {activeMember?.email}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Swiper dots page indicators */}
              <div className="team-slider-dots"></div>
            </div>
          </div>

          {/* Right Column: Display dynamic team member photo based on active slide */}
          <div
            className="col-lg-6 wow animate__fadeInRight"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="team-slider-right-img">
              {/* Dynamic Image with smooth transition */}
              {activeMember?.image && (
                <img
                  src={typeof activeMember.image === 'string' ? activeMember.image : activeMember.image.src}
                  alt={activeMember.name}
                  className="w-100 h-100 object-fit-cover"
                  style={{ maxHeight: '520px', borderRadius: '8px' }}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeamSlider;
