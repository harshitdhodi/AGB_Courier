'use client';

import Image from 'next/image';
import Link from 'next/link';
import { IServiceDT } from '@/types/service-d-t';
import serviceImg1 from '@/assets/img/service/service-1-1.jpg';

interface ServiceItemProps {
  service: IServiceDT;
}

const ServiceGridItem = ({ service }: ServiceItemProps) => {
  return (
    <div className="service-grid-item">
      <div className="service-grid-img">
        <Image
          src={service.image || serviceImg1}
          alt={service.title}
          width={350}
          height={200}
        />
        <span className="service-grid-badge">
          {service.category || 'Logistics'}
        </span>
      </div>

      <div className="service-grid-content">
        <div>
          <h4 className="service-grid-title">
            <Link href={`/service-details/${service.id}`}>
              {service.title}
            </Link>
          </h4>
          <p className="service-grid-desc">
            {(service.description || '').replace(/\s+/g, ' ').trim()}
          </p>
        </div>

        <div className="service-grid-footer">
          <Link href={`/service-details/${service.id}`} className="service-grid-link">
            <span>Read More</span>
          </Link>
          <div className="service-grid-arrow">
            <i className="fa-light fa-arrow-right-long"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceGridItem;
