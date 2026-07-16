import { serviceDataOne } from '@/data/service-data';
import ServiceGridItem from './service-item/service-grid-item';

const ServiceArea = () => {
  return (
    <div className="it-service-2-area pt-130 pb-100">
      <div className="container">
        <div className="row">
          {serviceDataOne.map((service, i) => (
            <div
              key={service.id}
              className="col-xxl-3 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mb-30 wow animate__fadeInUp"
              data-wow-duration=".9s"
              data-wow-delay={`${0.3 + 0.15 * i}s`}
            >
              <ServiceGridItem service={service} />
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-12">
            <div
              className="it-service-btn text-center mt-40 it-fade-anim"
              data-fade-from="top"
              data-ease="bounce"
              data-delay=".5"
            >
              <a className="it-btn-orange" href="#">
                <span>More Services</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceArea;
