'use client';

import Image from 'next/image';
import Link from 'next/link';
import mainImg from '@/assets/img/about/about-1-1.jpg';

const AboutMissionVision = () => {
  return (
    <div className="it-mission-vision-section">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column: Image with progress overlays */}
          <div
            className="col-lg-6 mb-50 mb-lg-0 wow animate__fadeInLeft"
            data-wow-duration=".9s"
            data-wow-delay=".3s"
          >
            <div className="mission-vision-img-wrap">
              <Image
                src='https://ik.imagekit.io/mikbqwyy0/f091929f-2782-458e-8731-bbb29c3135e8.png?updatedAt=1784132086631'
                alt="About Team Meeting"
                width={600}
                height={550}
                className="w-100 object-fit-cover"
                style={{ height: '750px' }}
              />
                </div>
          </div>

          {/* Right Column: Mission/Vision Content details */}
          <div
            className="col-lg-6 ps-lg-5 wow animate__fadeInRight"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
            style={{ position: 'relative' }}
          >
            {/* Tag / Badge */}
            <div className="section-tag">
              <i className="fas fa-boxes"></i>
              <span>Get to know us</span>
            </div>

            {/* Heading */}
            <h3 className="section-title">
              Driving Innovation and Excellence for Sustainable Corporate Success{' '}
              <span>Worldwide.</span>
            </h3>

            {/* Card deck: Mission & Vision */}
            <div className="row g-4 mb-40">
              <div className="col-md-6">
                <div className="mission-vision-card">
                  <h4 className="card-title">Our Mission</h4>
                  <p className="card-text">
                    Our mission is to empower businesses through innovative, best-in-class logistics and transport solutions and exceptional customer service.
                  </p>
                  <ul className="card-list">
                    <li>
                      <span className="me-2" style={{ color: 'var(--it-theme-1)', fontSize: '18px', fontWeight: 'bold' }}>»</span>
                      Innovation & Excellence
                    </li>
                    <li>
                      <span className="me-2" style={{ color: 'var(--it-theme-1)', fontSize: '18px', fontWeight: 'bold' }}>»</span>
                      Exceptional Customer
                    </li>
                    <li>
                      <span className="me-2" style={{ color: 'var(--it-theme-1)', fontSize: '18px', fontWeight: 'bold' }}>»</span>
                      Business Growth
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-6">
                <div className="mission-vision-card">
                  <h4 className="card-title">Our Vision</h4>
                  <p className="card-text">
                    Our vision is to become a global leader in providing transformative supply chain management and business solutions.
                  </p>
                  <ul className="card-list">
                    <li>
                      <span className="me-2" style={{ color: 'var(--it-theme-1)', fontSize: '18px', fontWeight: 'bold' }}>»</span>
                      Global Leadership
                    </li>
                    <li>
                      <span className="me-2" style={{ color: 'var(--it-theme-1)', fontSize: '18px', fontWeight: 'bold' }}>»</span>
                      Transformative Impact
                    </li>
                    <li>
                      <span className="me-2" style={{ color: 'var(--it-theme-1)', fontSize: '18px', fontWeight: 'bold' }}>»</span>
                      Sustainable Success
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Button */}
            <Link href="/about" className="it-btn-orange">
              <span>Learn More About Us</span>
            </Link>

            {/* Circular Progress Loader Badge */}
            <div className="circular-badge-container">
              <svg width="72" height="72" viewBox="0 0 36 36" className="circular-chart">
                <path
                  className="circle-bg"
                  stroke="#e2ebec"
                  strokeWidth="3.5"
                  fill="none"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  stroke="var(--it-theme-1)"
                  strokeWidth="3.5"
                  strokeDasharray="25, 100"
                  strokeLinecap="round"
                  fill="none"
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text
                  x="18"
                  y="20.35"
                  className="circle-percentage"
                  textAnchor="middle"
                  fill="var(--it-common-black)"
                  style={{ fontSize: '7.5px', fontWeight: 'bold', fontFamily: 'var(--it-ff-heading)' }}
                >
                  25%
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMissionVision;
