import ContactFormThree from '../form/contact-form-three';
import { LocationTwo, MailTwo, PhoneFour } from '../svg';

const defaultContact = {
  phone: '(00) 875 784 5682',
  email: 'togetoinfo@gmail.com',
  address: '66 broklyn golden street. New York',
  mapEmbedUrl: 'https://www.google.com/maps/@-5.4432737,-73.6358025,8.83z?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D',
};

interface ContactAreaProps {
  contact?: any;
}

const ContactArea = ({ contact }: ContactAreaProps) => {
  const currentContact = contact || defaultContact;

  return (
    <div className="it-contact-area it-contact-innar-style it-contact-style-2 pt-120 pb-120">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-4 col-lg-5 order-1 order-lg-0">
            <div className="it-contact-inner-list">
              <span className="it-section-subtitle">Our Locations Contact</span>
              <h4 className="it-section-title pb-10">Get in touch</h4>
              <p className="mb-55">
                Togeto specializes in international shipping, offering fast,
                secure, and cost-effective solutions to connect
              </p>
              <ul>
                <li>
                  <i>
                    <PhoneFour />
                  </i>
                  <div>
                    <span>Have any question?</span>
                    <a className="border-line-black" href={`tel:${currentContact.phone}`}>
                      {currentContact.phone}
                    </a>
                  </div>
                </li>
                <li>
                  <i>
                    <MailTwo />
                  </i>
                  <div>
                    <span>Write email</span>
                    <a
                      className="border-line-black"
                      href={`mailto:${currentContact.email}`}
                    >
                      {currentContact.email}
                    </a>
                  </div>
                </li>
                <li>
                  <i>
                    <LocationTwo />
                  </i>
                  <div>
                    <span>Visit anytime</span>
                    <a
                      className="border-line-black"
                      target="_blank"
                      href={currentContact.mapEmbedUrl || 'https://www.google.com/maps'}
                      rel="noreferrer"
                    >
                      {currentContact.address}
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-8 col-lg-7 order-0 order-lg-1 mb-50 mb-lg-0">
            <div className="it-contact-wrap-box">
              <span className="it-section-subtitle">contact with us</span>
              <h4 className="it-section-title pb-35">
                Let’s talk about your <br />
                Business.
              </h4>
              <ContactFormThree />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactArea;
