import Link from 'next/link';
import Image from 'next/image';
import { IServiceDT } from '@/types/service-d-t';
import { RightArrowUpTwo } from '@/components/svg';
import serviceImg1 from '@/assets/img/service/service-1-1.jpg';

interface ServiceItemProps {
  service: IServiceDT;
}

const ServiceItemTwo = ({ service }: ServiceItemProps) => {
  return (
    <>
      <style>{`
        .service-card-item {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .service-card-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.08) !important;
        }
        .service-card-title-link:hover {
          color: #e55b13 !important;
        }
        .read-more-btn:hover .arrow-circle {
          background-color: #e55b13 !important;
        }
        .service-card-img-wrapper {
          width: 240px;
          height: 140px;
        }
        @media (max-width: 767px) {
          .service-card-img-wrapper {
            width: 100%;
            height: 200px;
          }
        }
      `}</style>
      <div className="service-card-item bg-white p-4 p-md-5 rounded-4 shadow-sm border-0 d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-4">
        {/* Left Column - Meta */}
        <div className="d-flex flex-column flex-shrink-0" style={{ width: '180px' }}>
          <span className="text-muted small mb-1">By <strong className="text-dark">Togeto Team</strong></span>
          <span className="text-muted small mb-4">Active Service</span>
          <div>
            <span className="badge text-white px-3 py-2 rounded-pill fw-semibold" style={{ backgroundColor: '#e55b13', fontSize: '13px', letterSpacing: '0.5px' }}>
              {service.category || 'Logistics'}
            </span>
          </div>
        </div>

        {/* Middle Column - Title & Read More */}
        <div className="flex-grow-1 px-md-4">
          <h3 className="mb-4 fw-bold">
            <Link
              href={`/service-details/${service.id}`}
              className="service-card-title-link text-dark text-decoration-none"
              style={{ fontSize: '26px', lineHeight: '1.3', transition: 'color 0.2s ease' }}
            >
              {service.title}
            </Link>
          </h3>
          <Link
            href={`/service-details/${service.id}`}
            className="read-more-btn d-inline-flex align-items-center text-dark text-decoration-none fw-semibold"
          >
            <span style={{ fontSize: '15px' }}>Read More</span>
            <span
              className="arrow-circle ms-2 d-inline-flex align-items-center justify-content-center bg-dark text-white rounded-circle"
              style={{ width: '28px', height: '28px', padding: '6px', transition: 'background-color 0.2s ease' }}
            >
              <RightArrowUpTwo />
            </span>
          </Link>
        </div>

        {/* Right Column - Image */}
        <div className="service-card-img-wrapper flex-shrink-0 position-relative">
          <Image
            src={service.image || serviceImg1}
            alt={service.title}
            className="rounded-4 w-100 h-100 object-fit-cover"
            width={240}
            height={140}
          />
        </div>
      </div>
    </>
  );
};
export default ServiceItemTwo;
