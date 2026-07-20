'use client';

import { useState, useEffect } from 'react';
import SocialBox from '../social/social-box';
import { Phone } from '../svg';

const defaultContact = {
  phone: '(91) 187 047 5767',
  email: 'togetoinfo@gmail.com',
  address: '238, Arimantab, Moska - USA.',
};

const TopBarArea = () => {
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
    <div className="it-header-top-area it-header-top-ptb black-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-8 col-lg-7 col-md-6 col-sm-6">
            <div className="it-header-top-list-box">
              <ul>
                <li className="d-none d-lg-inline-block">
                  <span>
                    <Phone />
                    <a href={`tel:${currentContact.phone}`}>{currentContact.phone}</a>
                  </span>
                </li>
                <li>
                  <span>
                    <i className="fa-light fa-envelope-open-text"></i>
                    <a href={`mailto:${currentContact.email}`}>
                      {currentContact.email}
                    </a>
                  </span>
                </li>
                <li className="d-none d-xxl-inline-block">
                  <span>
                    <i className="fa-light fa-location-dot"></i>
                    <a
                      target="_blank"
                      href={currentContact.mapEmbedUrl || "https://www.google.com/maps"}
                      rel="noreferrer"
                    >
                      {currentContact.address}
                    </a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-6 d-none d-sm-block">
            <div className="it-header-top-right d-flex align-items-center justify-content-end">
              <div className="it-header-top-contact d-none d-md-block mr-30">
                <a href="#">Help</a>
                <span>/</span>
                <a href="#">support</a>
                <span>/</span>
                <a href="#">contact</a>
              </div>
              <div className="it-header-top-social-box">
                <SocialBox />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopBarArea;
