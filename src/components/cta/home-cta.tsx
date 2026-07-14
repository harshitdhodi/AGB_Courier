'use client';

import Link from 'next/link';
import Image from 'next/image';

import shape1 from '@/assets/img/shape/choose-1.png';
import shape2 from '@/assets/img/shape/testimonial-3-2.png';

const HomeCta = () => {
  return (
    <div className="it-home-cta text-center">
      {/* Decorative background shapes */}
      {shape1 && (
        <Image
          className="cta-shape cta-shape-1"
          src={shape1}
          alt="cta-shape-1"
          width={280}
          height={280}
        />
      )}
      {shape2 && (
        <Image
          className="cta-shape cta-shape-2"
          src={shape2}
          alt="cta-shape-2"
          width={150}
          height={150}
        />
      )}

      <div className="container">
        <div className="row justify-content-center">
          <div 
            className="col-xl-8 col-lg-10 wow animate__fadeInUp"
            data-wow-duration=".9s"
            data-wow-delay=".3s"
          >
            <h2 className="cta-title">
              Ready to Optimize Your Shipping & Logistics?
            </h2>
            <p className="cta-text">
              Join thousands of businesses who trust Togeto for secure, on-time freight transport, expert customs clearance, and end-to-end warehousing services. Let’s move your supply chain forward today.
            </p>
            <div className="cta-buttons">
              <Link href="/contact" className="it-btn-orange">
                <span>Get a Free Quote</span>
              </Link>
              <Link href="/about" className="it-btn-white hover-2">
                <span>Learn More About Us</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCta;
