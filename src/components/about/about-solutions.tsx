'use client';

import Link from 'next/link';

interface SolutionItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  features: string;
}

interface AboutSolutionsProps {
  solutions?: SolutionItem[];
}

const AboutSolutions = ({ solutions = [] }: AboutSolutionsProps) => {
  // If no solutions are passed or array is empty, render fallback static content
  const displaySolutions = solutions.length > 0 ? solutions : [
    {
      id: 1,
      title: 'Business Strategy Development',
      description: 'Through a combination of data-driven insights and innovative approaches, we work closely with you to develop customized solutions.',
      icon: 'fal fa-analytics',
      features: 'Expansion Strategies, Operational Efficiency, Competitive Edge',
    },
    {
      id: 2,
      title: 'Customer Experience Solutions',
      description: 'Developing personalized customer journeys to increase satisfaction and loyalty of our expansion to keep competitive.',
      icon: 'fal fa-headset',
      features: 'Personalized Customer, Seamless Service, Proactive Support',
    },
    {
      id: 3,
      title: 'Logistics & Fleet Management',
      description: 'Audit and coordinate transit routes, storage hubs, and fleet deployments to reduce lead times and shipping costs globally.',
      icon: 'fal fa-truck',
      features: 'Real-time tracking, Automated scheduling, Inventory auditing',
    },
  ];

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
              {displaySolutions.map((item) => {
                const featureList = item.features 
                  ? item.features.split(',').map(f => f.trim()).filter(Boolean)
                  : [];

                return (
                  <div key={item.id} className="solutions-scroll-card">
                    <div className="row">
                      <div className="col-md-5 mb-20 mb-md-0">
                        <div className="solutions-card-left">
                          <div className="icon-wrapper">
                            <i className={item.icon}></i>
                          </div>
                          <h4 className="card-title">{item.title}</h4>
                        </div>
                      </div>
                      <div className="col-md-7">
                        <div className="solutions-card-right">
                          <p className="card-desc">{item.description}</p>
                          {featureList.length > 0 && (
                            <ul className="card-features-list">
                              {featureList.map((feature, idx) => (
                                <li key={idx}>
                                  <i className="fal fa-chevron-double-right"></i> {feature}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSolutions;
