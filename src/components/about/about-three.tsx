import Image from 'next/image';
import Link from 'next/link';
import AboutFunFactOne from './about-funfact/about-funfact-one';

import shapeImg from '@/assets/img/shape/about-3.png';

const defaultAbout = {
  subtitle: 'More About us',
  title: 'Creating Long-Term Value For Stakeholder.',
  description1: 'We are a global technology provider who assists businesses to accelerate their digital transformation journey while achieving efficiency, scalability, and lower cost of ownership.',
  description2: 'Whatever your ambition may be from embracing new digital capabilities to reimagining how your business operates, we can help you set a new standard of excellence',
  imageUrl1: 'https://ik.imagekit.io/mikbqwyy0/a3043f10-64ae-4b82-a007-b0a31ee0ebd9.png?updatedAt=1784132086668',
  imageUrl2: 'https://ik.imagekit.io/mikbqwyy0/71e49fec-9428-4383-bbb2-2e2339f4536e.png?updatedAt=1784131711001',
};

interface AboutThreeProps {
  hideButton?: boolean;
  about?: any;
  counters?: any[];
}

const AboutThree = ({ hideButton = false, about, counters }: AboutThreeProps) => {
  const currentAbout = about || defaultAbout;

  return (
    <div
      id="about"
      className="it-about-3-area white-bg z-index-1 p-relative pt-130 pb-130"
    >
      <Image
        className="it-about-3-shape-1 image-height-auto"
        src={shapeImg}
        alt="shape-img"
        width={803}
        height={786}
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-4 order-1 order-xl-0">
            <div
              className="it-about-3-thumb left-img shine-effect wow img-anim-left"
              data-wow-duration="1.5s"
              data-wow-delay="0.1"
            >
              <Image
                src={currentAbout.imageUrl1 || 'https://ik.imagekit.io/mikbqwyy0/a3043f10-64ae-4b82-a007-b0a31ee0ebd9.png?updatedAt=1784132086668'}
                alt="about-img"
                width={515}
                height={850}
                style={{ width: '100%', height: '620px', objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="col-xl-8 order-0 order-xl-1">
            <div className="row">
              <div className="col-lg-8">
                <div className="it-about-left">
                  <div className="it-section-title-box">
                    <span className="it-section-subtitle it-split-text it-split-in-right">
                      {currentAbout.subtitle || 'More About us'}
                    </span>
                    <h4 className="it-section-title pb-20 it-split-text it-split-in-right">
                      {currentAbout.title || 'Creating Long-Term Value For Stakeholder.'}
                    </h4>
                  </div>
                  <div
                    className="wow animate__fadeInUp"
                    data-wow-duration=".9s"
                    data-wow-delay=".5s"
                  >
                    <p className="mb-15">
                      {currentAbout.description1 || currentAbout.description || 'We are a global technology provider who assists businesses to accelerate their digital transformation journey while achieving efficiency, scalability, and lower cost of ownership.'}
                    </p>
                    <p className="mb-30">
                      {currentAbout.description2 || 'Whatever your ambition may be from embracing new digital capabilities to reimagining how your business operates, we can help you set a new standard of excellence'}
                    </p>
                  </div>
                  {!hideButton && (
                    <div
                      className="it-fade-anim"
                      data-fade-from="top"
                      data-ease="bounce"
                      data-delay=".5"
                    >
                      <Link className="it-btn-black" href="/about">
                        <span>More About Us</span>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
              <div
                className="col-lg-4 wow img-anim-right"
                data-wow-duration="1.5s"
                data-wow-delay="0.1"
              >
                <div className="it-about-3-thumb shine-effect">
                  <Image
                    src={currentAbout.imageUrl2 || currentAbout.imageUrl || 'https://ik.imagekit.io/mikbqwyy0/71e49fec-9428-4383-bbb2-2e2339f4536e.png?updatedAt=1784131711001'}
                    alt="about-img"
                    width={303}
                    height={440}
                    style={{ width: '100%', height: '320px', objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <AboutFunFactOne itemClass=" mt-10" counters={counters} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutThree;
