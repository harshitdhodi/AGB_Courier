import Link from 'next/link';
import Image from 'next/image';
import { IServiceDT } from '@/types/service-d-t';
import { RightArrowUpTwo } from '@/components/svg';

const FALLBACK_IMG = 'https://ik.imagekit.io/mikbqwyy0/71e49fec-9428-4383-bbb2-2e2339f4536e.png';

interface ServiceItemProps {
  service: IServiceDT;
}

const ServiceItemTwo = ({ service }: ServiceItemProps) => {
  return (
    <div className="svc-card">

      {/* ── 30% Image ─────────────────────────────── */}
      <div className="svc-card__img">
        <Image
          src={service.image || FALLBACK_IMG}
          alt={service.title}
          fill
          sizes="(max-width: 767px) 100vw, 30vw"
          className="svc-card__img-inner"
        />
        {/* Category badge overlaid on image */}
        {service.category && (
          <span className="svc-card__badge">{service.category}</span>
        )}
      </div>

      {/* ── 10% Divider ───────────────────────────── */}
      <div className="svc-card__divider" aria-hidden="true">
        <span className="svc-card__divider-line" />
        <span className="svc-card__divider-dot" />
        <span className="svc-card__divider-line" />
      </div>

      {/* ── 60% Content ───────────────────────────── */}
      <div className="svc-card__body">
        {/* Icon */}
        {service.icon && (
          <div className="svc-card__icon">{service.icon}</div>
        )}

        {/* Title */}
        <h3 className="svc-card__title">
          <Link href={`/service-details/${service.id}`} className="svc-card__title-link">
            {service.title}
          </Link>
        </h3>

        {/* Description */}
        {service.description && (
          <p className="svc-card__desc">{service.description}</p>
        )}

        {/* Read More */}
        <Link
          href={`/service-details/${service.id}`}
          className="svc-card__cta"
          aria-label={`Read more about ${service.title}`}
        >
          <span>Read More</span>
          <span className="svc-card__cta-icon" aria-hidden="true">
            <RightArrowUpTwo />
          </span>
        </Link>
      </div>

    </div>
  );
};

export default ServiceItemTwo;
