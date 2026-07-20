'use client';

import { useState } from 'react';
import Image from 'next/image';

const networkMarkers = [
  {
    id: 1,
    country: 'United States',
    city: 'New York Hub',
    top: '32%',
    left: '26%',
    routes: '24 Active Routes',
    desc: 'Main North American air & ocean transit center.',
  },
  {
    id: 2,
    country: 'Brazil',
    city: 'São Paulo Hub',
    top: '70%',
    left: '38%',
    routes: '12 Active Routes',
    desc: 'Primary South American customs & dispatch hub.',
  },
  {
    id: 3,
    country: 'United Kingdom',
    city: 'London Hub',
    top: '24%',
    left: '47%',
    routes: '18 Active Routes',
    desc: 'Western Europe sorting & oceanic dispatch.',
  },
  {
    id: 4,
    country: 'Germany',
    city: 'Frankfurt Hub',
    top: '23%',
    left: '52%',
    routes: '20 Active Routes',
    desc: 'Central Europe rail & air cargo gateway.',
  },
  {
    id: 5,
    country: 'South Africa',
    city: 'Cape Town Hub',
    top: '74%',
    left: '57%',
    routes: '8 Active Routes',
    desc: 'African southern trade-route terminal.',
  },
  {
    id: 6,
    country: 'India',
    city: 'Mumbai Hub',
    top: '48%',
    left: '69%',
    routes: '30 Active Routes',
    desc: 'South Asian marine & domestic transport hub.',
  },
  {
    id: 7,
    country: 'Japan',
    city: 'Tokyo Hub',
    top: '35%',
    left: '85%',
    routes: '16 Active Routes',
    desc: 'East Asian shipping & logistics terminal.',
  },
  {
    id: 8,
    country: 'Australia',
    city: 'Sydney Hub',
    top: '76%',
    left: '90%',
    routes: '14 Active Routes',
    desc: 'Pacific shipping & air cargo gateway.',
  },
];

const indiaMarkers = [
  {
    id: 1,
    country: 'North India',
    city: 'New Delhi Hub',
    top: '25%',
    left: '42%',
    routes: '15 Active Routes',
    desc: 'Capital region primary air cargo & express dispatch hub.',
  },
  {
    id: 2,
    country: 'West India',
    city: 'Mumbai Hub',
    top: '58%',
    left: '26%',
    routes: '25 Active Routes',
    desc: 'Main marine freight terminal and international shipping center.',
  },
  {
    id: 3,
    country: 'South India',
    city: 'Bengaluru Hub',
    top: '78%',
    left: '38%',
    routes: '18 Active Routes',
    desc: 'Tech-logistics hub for Southern domestic routing.',
  },
  {
    id: 4,
    country: 'South India',
    city: 'Chennai Hub',
    top: '80%',
    left: '48%',
    routes: '14 Active Routes',
    desc: 'Major sea-port routing terminal for East-Asian cargo.',
  },
  {
    id: 5,
    country: 'East India',
    city: 'Kolkata Hub',
    top: '48%',
    left: '77%',
    routes: '12 Active Routes',
    desc: 'Eastern gateway routing terminal for domestic cargo.',
  },
  {
    id: 6,
    country: 'Central India',
    city: 'Hyderabad Hub',
    top: '66%',
    left: '43%',
    routes: '16 Active Routes',
    desc: 'Central routing center linking North and South networks.',
  },
  {
    id: 7,
    country: 'West India',
    city: 'Ahmedabad Hub',
    top: '47%',
    left: '22%',
    routes: '10 Active Routes',
    desc: 'Industrial distribution and dispatch hub for Western states.',
  },
  {
    id: 8,
    country: 'West India',
    city: 'Pune Hub',
    top: '61%',
    left: '29%',
    routes: '8 Active Routes',
    desc: 'Manufacturing and commercial cargo collection terminal.',
  },
];

function mapCoordsToPosition(lat: number, lng: number) {
  // Simple mapping function for bounding box of the world map
  // Lat range: roughly 80 to -60. Lng range: roughly -170 to 180
  const top = 90 - ((lat + 60) / 140) * 80;
  const left = ((lng + 170) / 350) * 90 + 5;
  return { top: `${Math.max(10, Math.min(90, top))}%`, left: `${Math.max(5, Math.min(95, left))}%` };
}

interface NetworkMapProps {
  networks?: any[];
}

const NetworkMap = ({ networks }: NetworkMapProps) => {
  const [activeTab, setActiveTab] = useState<'world' | 'india'>('world');

  const worldData = networks && networks.length > 0 ? networks.map((net, idx) => {
    const pos = mapCoordsToPosition(net.latitude, net.longitude);
    return {
      id: net.id,
      country: net.address.split(',').pop()?.trim() || 'Global',
      city: net.name,
      top: pos.top,
      left: pos.left,
      routes: 'Active Route',
      desc: net.address,
    };
  }) : networkMarkers;

  return (
    <div className="it-network-map-section pt-130 pb-130">
      <div className="container">
        {/* Section title */}
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 text-center mb-60">
            <div className="it-section-title-box">
              <span className="it-section-subtitle mb-10" style={{ display: 'inline-block', width: 'fit-content' }}>
                Global & Domestic Networks
              </span>
              <h4 className="it-section-title">
                Connected Operations & Networks Across <br />
                Multiple <span>Countries.</span>
              </h4>
            </div>
          </div>
        </div>

        {/* Tab Buttons selector */}
        <div className="row justify-content-center mb-50">
          <div className="col-auto">
            <div className="network-tab-buttons d-inline-flex bg-white p-2 rounded-pill shadow-sm border">
              <button
                type="button"
                className={`it-btn-tab px-4 py-2 rounded-pill border-0 fw-bold transition-all ${
                  activeTab === 'world' ? 'active' : ''
                }`}
                onClick={() => setActiveTab('world')}
              >
                Global Network
              </button>
              <button
                type="button"
                className={`it-btn-tab px-4 py-2 rounded-pill border-0 fw-bold transition-all ${
                  activeTab === 'india' ? 'active' : ''
                }`}
                onClick={() => setActiveTab('india')}
              >
                India Network
              </button>
            </div>
          </div>
        </div>

        {/* Map area */}
        <div className="row">
          <div className="col-12">
            {activeTab === 'world' ? (
              <div className="network-map-container">
                {/* Vector World Map Background Image */}
                <Image
                  src="/assets/img/shape/world-map.svg"
                  alt="World Map Grid"
                  width={1100}
                  height={600}
                  className="w-100 h-auto"
                  style={{ opacity: 0.15, filter: 'invert(1) brightness(1.2)' }}
                  priority
                />

                {/* Pulsing markers with details tooltips */}
                {worldData.map((marker) => (
                  <div
                      key={marker.id}
                      className="network-marker"
                      style={{ top: marker.top, left: marker.left }}
                  >
                    <div className="pulse-dot"></div>
                    <div className="marker-tooltip">
                      <h5>{marker.city}</h5>
                      <p className="text-muted mb-5" style={{ fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                        {marker.country}
                      </p>
                      <p className="mb-8">{marker.desc}</p>
                      <span>{marker.routes}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="india-map-container">
                {/* Vector India Map Background Image */}
                <Image
                  src="/assets/img/shape/india-map.svg"
                  alt="India Map Grid"
                  width={1100}
                  height={600}
                  className="w-100 h-auto"
                  style={{ opacity: 0.15, filter: 'invert(1) brightness(1.2)' }}
                  priority
                />

                {/* Pulsing India markers with details tooltips */}
                {indiaMarkers.map((marker) => (
                  <div
                    key={marker.id}
                    className="network-marker"
                    style={{ top: marker.top, left: marker.left }}
                  >
                    <div className="pulse-dot"></div>
                    <div className="marker-tooltip">
                      <h5>{marker.city}</h5>
                      <p className="text-muted mb-5" style={{ fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                        {marker.country}
                      </p>
                      <p className="mb-8">{marker.desc}</p>
                      <span>{marker.routes}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetworkMap;
