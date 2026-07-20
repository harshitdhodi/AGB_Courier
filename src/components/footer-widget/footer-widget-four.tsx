'use client';

import { useState, useEffect } from 'react';
import { Location, Mail, PhoneTwo } from '../svg';

const defaultContact = {
  phone: '912-345-987',
  email: 'togetoinfo@gmail.com',
  address: '11555 Heron Bay Blvd, Suite 200, Coral Springs, Florida, 33076, United States',
  mapEmbedUrl: 'https://www.google.com/maps',
};

const FooterWidgetFour = () => {
  const [contact, setContact] = useState<any>(null);

  useEffect(() => {
    const apiBaseUrl = typeof window !== 'undefined' ? '' : (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001');
    fetch(`${apiBaseUrl}/api/contact-settings`)
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (data) setContact(data);
      })
      .catch(console.error);
  }, []);

  const currentContact = contact || defaultContact;

  return (
    <div className="it-footer-widget it-footer-col-4 d-flex justify-content-xl-end">
      <div>
        <h4 className="it-footer-widget-title">Contact Info</h4>
        <div className="it-footer-widget-tel-box mb-25">
          <span>
            <Location />
          </span>
          <a
            className="border-line-white"
            target="_blank"
            href={currentContact.mapEmbedUrl || "https://www.google.com/maps"}
            rel="noreferrer"
          >
            {currentContact.address}
          </a>
        </div>
        <div className="it-footer-widget-tel-box mb-25">
          <span>
            <Mail />
          </span>
          <a className="border-line-white" href={`mailto:${currentContact.email}`}>
            {currentContact.email}
          </a>
        </div>
        <div className="it-footer-widget-tel-box">
          <span>
            <PhoneTwo />
          </span>
          <a className="border-line-white" href={`tel:${currentContact.phone}`}>
            {currentContact.phone}
          </a>
        </div>
      </div>
    </div>
  );
};
export default FooterWidgetFour;
