import Image from 'next/image';
import Link from 'next/link';
import Copyright from '@/components/copyright/copyright';
import FooterWidgetOne from '@/components/footer-widget/footer-widget-one';
import FooterWidgetTwo from '@/components/footer-widget/footer-widget-two';
import Newsletter from '@/components/newsletter/newsletter';
import FooterWidgetFour from '@/components/footer-widget/footer-widget-four';

import shapeImg from '@/assets/img/shape/footer-1-1.png';
import { Dribble, Facebook, Instagram, X } from '@/components/svg';

const Logo = 'https://ik.imagekit.io/mikbqwyy0/WhatsApp%20Image%202026-07-14%20at%207.14.57%20PM.jpeg';

const socialData = [
  { id: 1, url: '#', platform: <Facebook /> },
  { id: 2, url: '#', platform: <X /> },
  { id: 3, url: '#', platform: <Dribble /> },
  { id: 4, url: '#', platform: <Instagram /> },
];

const FooterTwo = () => {
  return (
    <footer>
      <div className="it-footer-wrap black-bg z-index-1">
        <Image
          className="it-footer-shape-2 image-height-auto"
          src={shapeImg}
          alt="shape-img"
          width={1920}
          height={378}
        />

        {/* Newsletter Area */}
        <Newsletter />
        {/* Newsletter Area */}

        <div className="it-footer-area pt-140 mb-65">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow animate__fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay=".3s"
              >
                <div className="it-footer-widget it-footer-col-1">
                  <div className="it-footer-widget-logo mb-30">
                    <Link href="/" className="it-footer-logo-link">
                      <Image
                        src={Logo}
                        alt="logo"
                        width={160}
                        height={50}
                        className="it-footer-logo-img"
                      />
                    </Link>
                  </div>
                  <div className="it-footer-widget-text">
                    <p>
                      Feel free to reach out if you want to <br />
                      collaborate with us, or simply chat.
                    </p>
                  </div>
                  <div className="it-footer-widget-social">
                    {socialData.map((social) => (
                      <Link key={social.id} href={social.url}>
                        <span>{social.platform}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow animate__fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay=".5s"
              >
                <FooterWidgetOne />
              </div>
              <div
                className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow animate__fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay=".7s"
              >
                <FooterWidgetTwo />
              </div>
              <div
                className="col-xl-3 col-lg-3 col-md-6 col-sm-6 mb-50 wow animate__fadeInUp"
                data-wow-duration=".9s"
                data-wow-delay=".9s"
              >
                <FooterWidgetFour />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright area */}
        <Copyright />
        {/* Copyright area */}
      </div>
    </footer>
  );
};
export default FooterTwo;
