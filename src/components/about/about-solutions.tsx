'use client';

import Link from 'next/link';

const AboutSolutions = () => {
  return (
    <div className="it-solutions-sticky-section">
      <div className="container">
        <div className="row align-items-stretch">
          {/* Left Column: Sticky Section header */}
          <div className="col-lg-5 col-md-12 sticky-solutions-column">
            <div className="sticky-solutions-left">
              <span className="solutions-tag">Our Solutions</span>
              <h3 className="solutions-title">
                Solutions to Transform Your <span>Business.</span>
              </h3>
              <Link href="/service" className="it-btn-orange">
                <span>
                  More Services <i className="fal fa-arrow-right ml-10"></i>
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column: Smoothly Scrolling service/solutions cards */}
          <div className="col-lg-7 col-md-12">
            <div className="solutions-scroll-list">
              {/* Card 1 */}
              <div className="solutions-scroll-card">
                <div className="row">
                  <div className="col-md-5 mb-20 mb-md-0">
                    <div className="solutions-card-left">
                      <div className="icon-wrapper">
                        <i className="fal fa-analytics"></i>
                      </div>
                      <h4 className="card-title">Business Strategy Development</h4>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="solutions-card-right">
                      <p className="card-desc">
                        Through a combination of data-driven insights and innovative approaches, we work closely with you to develop customized solutions.
                      </p>
                      <ul className="card-features-list">
                        <li>
                          <i className="fal fa-chevron-double-right"></i> Expansion Strategies
                        </li>
                        <li>
                          <i className="fal fa-chevron-double-right"></i> Operational Efficiency
                        </li>
                        <li>
                          <i className="fal fa-chevron-double-right"></i> Competitive Edge
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="solutions-scroll-card">
                <div className="row">
                  <div className="col-md-5 mb-20 mb-md-0">
                    <div className="solutions-card-left">
                      <div className="icon-wrapper">
                        <i className="fal fa-headset"></i>
                      </div>
                      <h4 className="card-title">Customer Experience Solutions</h4>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="solutions-card-right">
                      <p className="card-desc">
                        Developing personalized customer journeys to increase satisfaction and loyalty of our expansion to keep competitive.
                      </p>
                      <ul className="card-features-list">
                        <li>
                          <i className="fal fa-chevron-double-right"></i> Personalized Customer
                        </li>
                        <li>
                          <i className="fal fa-chevron-double-right"></i> Seamless Service
                        </li>
                        <li>
                          <i className="fal fa-chevron-double-right"></i> Proactive Support
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="solutions-scroll-card">
                <div className="row">
                  <div className="col-md-5 mb-20 mb-md-0">
                    <div className="solutions-card-left">
                      <div className="icon-wrapper">
                        <i className="fal fa-truck"></i>
                      </div>
                      <h4 className="card-title">Logistics & Fleet Management</h4>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="solutions-card-right">
                      <p className="card-desc">
                        Audit and coordinate transit routes, storage hubs, and fleet deployments to reduce lead times and shipping costs globally.
                      </p>
                      <ul className="card-features-list">
                        <li>
                          <i className="fal fa-chevron-double-right"></i> Real-time tracking
                        </li>
                        <li>
                          <i className="fal fa-chevron-double-right"></i> Automated scheduling
                        </li>
                        <li>
                          <i className="fal fa-chevron-double-right"></i> Inventory auditing
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSolutions;
