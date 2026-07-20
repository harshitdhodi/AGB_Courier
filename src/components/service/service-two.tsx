import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from '@/plugins';
import Link from 'next/link';
import { serviceDataTwo } from '@/data/service-data';
import ServiceItemTwo from './service-item/service-item-two';

gsap.registerPlugin(ScrollTrigger);

interface ServiceTwoProps {
  services?: any[];
}

const ServiceTwo = ({ services }: ServiceTwoProps) => {
  const data = services && services.length > 0 ? services : serviceDataTwo;

  useGSAP(() => {
    const cards = gsap.utils.toArray<HTMLElement>('.service-animation-item');
    cards.forEach((card) => {
      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            end: 'bottom 15%',
            toggleActions: 'play reverse play reverse',
          },
        }
      );
    });
  }, [data]);

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        #service .it-section-title-box {
          text-align: left !important;
        }
        #service .it-section-title {
          text-align: left !important;
        }
        #service .it-section-subtitle {
          text-align: left !important;
          display: inline-block !important;
          width: fit-content !important;
        }
      ` }} />
      <div id="service" className="it-service-2-area pt-130 pb-130 gray-bg">
        <div className="container">
          <div className="row align-items-end mb-65">
            <div className="col-md-8">
              <div className="it-section-title-box mb-0 text-start" style={{ textAlign: 'left' }}>
                <span
                  className="it-section-subtitle it-split-text it-split-in-right mb-10"
                  style={{ display: 'inline-block', width: 'fit-content', textAlign: 'left' }}
                >
                  Our Services
                </span>
                <h4
                  className="it-section-title it-split-text it-split-in-right mb-0"
                  style={{ textAlign: 'left' }}
                >
                  Dependable Logistics for Seamless <br />
                  Global Transportation.
                </h4>
              </div>
            </div>
            <div className="col-md-4 text-md-end text-start mt-30 mt-md-0">
              <div
                className="it-service-btn it-fade-anim"
                data-fade-from="top"
                data-ease="bounce"
                data-delay=".5"
              >
                <Link className="it-btn-orange" href="/service">
                  <span>More Services</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row service-cards-container">
            {data
              .map((service) => (
                <div
                  key={service.id}
                  className="service-animation-item col-12 mb-30"
                  style={{ opacity: 0 }}
                >
                  <ServiceItemTwo service={service} />
                </div>
              ))
              .slice(0, 4)}
          </div>
        </div>
      </div>
    </>
  );
};
export default ServiceTwo;
