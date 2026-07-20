import Image from 'next/image';
import Link from 'next/link';

const defaultWhyChoose = {
  subtitle: 'Why choose us Togeto',
  title: 'Why Choose Us for Your Logistics Needs?',
  description: 'Logistics ensures the efficient movement of goods, managing, transportation, storage, and delivery. It plays a vital role in',
  imageUrl: 'https://ik.imagekit.io/mikbqwyy0/71e49fec-9428-4383-bbb2-2e2339f4536e.png?updatedAt=1784131711001',
};

const defaultFeatures = [
  {
    id: 1,
    title: 'Corporate Moves',
    description: 'Flexible & Efficient Transport Locally & Internationally.',
  },
  {
    id: 2,
    title: 'Maximum Cargo Flexibility',
    description: 'Flexible & Efficient Transport Locally & Internationally.',
  },
  {
    id: 3,
    title: 'Custom Logistics',
    description: 'Flexible & Efficient Transport Locally & Internationally.',
  },
  {
    id: 4,
    title: 'Flexible Freight',
    description: 'Flexible & Efficient Transport Locally & Internationally.',
  },
];

interface ChooseTwoProps {
  whyChoose?: any;
  features?: any[];
}

const ChooseTwo = ({ whyChoose, features }: ChooseTwoProps) => {
  const currentWhyChoose = whyChoose || defaultWhyChoose;
  const data = features && features.length > 0 ? features : defaultFeatures;

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
                <span className="it-section-subtitle">
                  {currentWhyChoose.subtitle}
                </span>
                <h4
                  className="it-section-title text-dark fw-bold mb-25"
                  style={{
                    fontSize: '44px',
                    lineHeight: '1.2',
                    fontWeight: 800,
                  }}
                >
                  {currentWhyChoose.title}
                </h4>
                <p className="text-muted mb-40" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                  {currentWhyChoose.description}
                </p>
              </div>

              {/* 2x2 Grid */}
              <div className="row mb-40">
                {data.map((item) => (
                  <div key={item.id} className="col-md-6 mb-30">
                    <h5 className="fw-bold text-dark mb-10" style={{ fontSize: '18px', fontWeight: 700 }}>
                      {item.title}
                    </h5>
                    <p className="text-muted mb-0" style={{ fontSize: '14px', lineHeight: '1.5' }}>
                      {item.description}
                    </p>
                  </div>
                ))}
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
              {/* Solid Theme-Friendly Background Offset Panel */}
              <div
                className="position-absolute"
                style={{
                  backgroundColor: 'var(--it-theme-1)',
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
                  src={currentWhyChoose.imageUrl || 'https://ik.imagekit.io/mikbqwyy0/71e49fec-9428-4383-bbb2-2e2339f4536e.png?updatedAt=1784131711001'}
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
