import Image from 'next/image';
import Link from 'next/link';

import chooseImg1 from '@/assets/img/choose/choose-2-1.jpg';

const ChooseTwo = () => {
  return (
    <div
      id="choose"
      className="it-choose-area it-choose-style-2 p-relative pt-130 pb-130 bg-white"
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content Column */}
          <div className="col-lg-6 mb-50 mb-lg-0">
            <div className="it-choose-right">
              <div className="it-section-title-box pb-20">
                <span
                  className="badge text-orange bg-white px-3 py-2 rounded-2 mb-25 shadow-sm"
                  style={{
                    color: '#e55b13',
                    border: '1px solid #f0f0f0',
                    fontSize: '14px',
                    fontWeight: 600,
                  }}
                >
                  Why choose us Togeto
                </span>
                <h4
                  className="it-section-title text-dark fw-bold mb-25"
                  style={{
                    fontSize: '44px',
                    lineHeight: '1.2',
                    fontWeight: 800,
                  }}
                >
                  Why Choose Us for <br />
                  Your <span style={{ color: '#e55b13' }}>Logistics</span> Needs?
                </h4>
                <p className="text-muted mb-40" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                  Logistics ensures the efficient movement of goods, managing, transportation,
                  storage, and delivery. It plays a vital role in
                </p>
              </div>

              {/* 2x2 Grid */}
              <div className="row mb-40">
                {/* Item 1 */}
                <div className="col-md-6 mb-30">
                  <h5 className="fw-bold text-dark mb-10" style={{ fontSize: '18px', fontWeight: 700 }}>
                    Corporate Moves
                  </h5>
                  <p className="text-muted mb-0" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                    Flexible & Efficient Transport Locally & Internationally.
                  </p>
                </div>
                {/* Item 2 */}
                <div className="col-md-6 mb-30">
                  <h5 className="fw-bold text-dark mb-10" style={{ fontSize: '18px', fontWeight: 700 }}>
                    Maximum Cargo Flexibility
                  </h5>
                  <p className="text-muted mb-0" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                    Flexible & Efficient Transport Locally & Internationally.
                  </p>
                </div>
                {/* Item 3 */}
                <div className="col-md-6 mb-30">
                  <h5 className="fw-bold text-dark mb-10" style={{ fontSize: '18px', fontWeight: 700 }}>
                    Custom Logistics
                  </h5>
                  <p className="text-muted mb-0" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                    Flexible & Efficient Transport Locally & Internationally.
                  </p>
                </div>
                {/* Item 4 */}
                <div className="col-md-6 mb-30">
                  <h5 className="fw-bold text-dark mb-10" style={{ fontSize: '18px', fontWeight: 700 }}>
                    Flexible Freight
                  </h5>
                  <p className="text-muted mb-0" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                    Flexible & Efficient Transport Locally & Internationally.
                  </p>
                </div>
              </div>

              <Link className="it-btn-orange" href="/about">
                <span>Discover More</span>
              </Link>
            </div>
          </div>

          {/* Right Image Column with Orange Offset Panel */}
          <div className="col-lg-6">
            <div
              className="position-relative d-inline-block w-100"
              style={{ paddingLeft: '40px', paddingTop: '40px' }}
            >
              {/* Solid Orange Background Offset Panel */}
              <div
                className="position-absolute"
                style={{
                  backgroundColor: '#e55b13',
                  top: '0px',
                  left: '0px',
                  width: '85%',
                  height: '90%',
                  zIndex: 1,
                  borderRadius: '4px',
                }}
              />
              {/* Main Image */}
              <div className="position-relative" style={{ zIndex: 2 }}>
                <Image
                  className="w-100 h-auto object-fit-cover shadow-lg"
                  src={chooseImg1}
                  alt="choose-img"
                  width={550}
                  height={600}
                  style={{ borderRadius: '4px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseTwo;
