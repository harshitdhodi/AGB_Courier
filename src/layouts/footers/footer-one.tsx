import Image from 'next/image';
import Link from 'next/link';
import FooterWidgetOne from '@/components/footer-widget/footer-widget-one';
import FooterWidgetTwo from '@/components/footer-widget/footer-widget-two';
import FooterWidgetThree from '@/components/footer-widget/footer-widget-three';
import Copyright from '@/components/copyright/copyright';
import { Rocket } from '@/components/svg';

const Logo = 'https://ik.imagekit.io/mikbqwyy0/WhatsApp%20Image%202026-07-14%20at%207.14.57%20PM.jpeg';

const FooterOne = () => {
  return (
    <footer>
      <div className="it-footer-wrap black-bg z-index-1 pt-150">
        <div className="it-footer-area mb-65">
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
                  <div className="it-footer-widget-input-box">
                    <span>Subscribe Now</span>
                    <form className="input-wrap p-relative" action="#">
                      <input type="email" placeholder="Email address" />
                      <button>
                        <Rocket />
                      </button>
                    </form>
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
                <FooterWidgetThree />
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Area */}
        <Copyright />
        {/* Copyright Area */}
      </div>
    </footer>
  );
};
export default FooterOne;
