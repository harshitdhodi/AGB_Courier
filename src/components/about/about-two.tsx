import Image from 'next/image';
import Link from 'next/link';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import AboutFunFactOne from './about-funfact/about-funfact-one';

const defaultAbout = {
  subtitle: 'About our Company',
  title: 'Creating Long-Term Value For Stakeholder.',
  btnText: 'More About Us',
  btnUrl: '/about',
  imageUrl: 'https://ik.imagekit.io/mikbqwyy0/26d2e064-f599-43e4-8b48-6cf33c913a88.png',
};

const defaultTabs = [
  {
    id: 1,
    tabName: 'Mission',
    content: `At Togeto, our mission is to revolutionize logistics by providing seamless, reliable, and cost-effective solutions tailored to meet our clients' unique needs. We aim to foster global connectivity through innovative technology, sustainable practices, and a commitment to excellence, ensuring that goods are delivered efficiently.\n\nAt Togeto, our mission is to redefine the logistics industry by delivering efficiency, reliability, and innovation. We are dedicated to empowering businesses of all sizes by offering end-to-end logistics solutions that streamline.`,
  },
  {
    id: 2,
    tabName: 'Vision',
    content: `Our vision is to be the global benchmark for logistics and freight forwarding excellence. We strive to lead the industry by setting new standards in customer service, operational efficiency, and environmental sustainability, paving the way for a more integrated and connected world.`,
  },
  {
    id: 3,
    tabName: 'History',
    content: `Founded with a vision to simplify shipping and logistics, Togeto has grown from a local courier agent to a prominent worldwide freight forwarding and cargo logistics partner. Over the years, we have built a robust network and a stellar reputation for delivering cargo safely, on time, every time.`,
  },
];

interface AboutTwoProps {
  about?: any;
  tabs?: any[];
  counters?: any[];
}

const AboutTwo = ({ about, tabs, counters }: AboutTwoProps) => {
  const currentAbout = about || defaultAbout;
  const currentTabs = tabs && tabs.length > 0 ? tabs : defaultTabs;

  return (
    <div id="about" className="it-about-2-area pt-130 pb-130">
      <div className="container">
        <div className="it-about-top-wrap pb-65">
          <div className="row align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="it-section-title-box">
                <span className="it-section-subtitle it-split-text it-split-in-right">
                  {currentAbout.subtitle}
                </span>
                <h4 className="it-section-title it-split-text it-split-in-right">
                  {currentAbout.title}
                </h4>
              </div>
            </div>
            <div className="col-xl-7 col-lg-6">
              <div className="it-about-2-top-right d-flex align-items-center justify-content-start justify-content-md-end">
                <div
                  className="it-about-btn it-fade-anim"
                  data-fade-from="top"
                  data-ease="bounce"
                  data-delay=".5"
                >
                  <Link className="it-btn-orange" href={currentAbout.btnUrl || '/about'}>
                    <span>{currentAbout.btnText || 'More About Us'}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center align-items-xxl-start">
          <div
            className="col-xl-5 order-1 order-xl-0 wow animate__fadeInLeft"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="it-about-2-thumb">
              <Image
                className="image-height-auto"
                src={currentAbout.imageUrl || 'https://ik.imagekit.io/mikbqwyy0/26d2e064-f599-43e4-8b48-6cf33c913a88.png'}
                alt="about-img"
                width={531}
                height={494}
              />
            </div>
          </div>
          <div
            className="col-xl-7 order-0 order-xl-1 wow animate__fadeInRight"
            data-wow-duration=".9s"
            data-wow-delay=".7s"
          >
            <div className="it-about-2-right">
              <Tabs>
                <div className="it-about-2-tab-btn mb-40">
                  <TabList className="nav nav-tabs" id="myTab" role="tablist">
                    {currentTabs.map((item) => (
                      <Tab key={item.id} className="nav-item">
                        <button className="nav-link" type="button">
                          {item.tabName}
                        </button>
                      </Tab>
                    ))}
                  </TabList>
                </div>

                <div className="it-about-2-tab-content-wrap mb-90">
                  <div className="tab-content" id="myTabContent">
                    {currentTabs.map((item) => (
                      <TabPanel key={item.id}>
                        <div className="it-about-2-tab-content">
                          {item.content && item.content.split('\n').map((para: string, idx: number) => (
                            <p key={idx}>{para}</p>
                          ))}
                        </div>
                      </TabPanel>
                    ))}
                  </div>
                </div>
              </Tabs>

              <AboutFunFactOne counters={counters} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutTwo;
