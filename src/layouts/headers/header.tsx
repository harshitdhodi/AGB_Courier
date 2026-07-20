'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { useHeaderScroll } from '@/hooks/use-header-scroll';
import { selectIsOnePage } from '@/redux/selectors/header-selector';
import { toggleOffCanvas, togglePopUp } from '@/redux/slices/header-slice';
import HeaderMenusOnePage from './header-menus-onepage';
import HeaderMenus from './header-menus';
import TopBarArea from '@/components/top-bar/top-bar-area';
import { HEADER_STICKY_CLASS } from '@/utils/constants';
import OffCanvas from '@/components/offcanvas/offcanvas';
import { MenuBar, Search } from '@/components/svg';
import SearchPopup from '@/components/search-popup/search-popup';

interface HeaderProps {
  headerClass?: string;
  headerLogo?: StaticImageData | string;
  hasTopBar?: boolean;
  hasPopUp?: boolean;
}

const Header = ({
  headerClass = 'it-header-area it-header-ptb it-header-style-2',
  headerLogo = 'https://ik.imagekit.io/mikbqwyy0/WhatsApp%20Image%202026-07-14%20at%207.14.57%20PM.jpeg',
  hasTopBar = true,
  hasPopUp = true,
}: HeaderProps) => {
  const dispatch = useAppDispatch();
  const { isVisible } = useHeaderScroll(); // Custom hook for showing sticky header
  const isOnePage = useAppSelector(selectIsOnePage); // Selector for getting the state of the header
  const [siteSettings, setSiteSettings] = useState<any>(null);

  useEffect(() => {
    const apiBaseUrl = typeof window !== 'undefined' ? '' : (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001');
    fetch(`${apiBaseUrl}/api/settings/site`)
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (data) setSiteSettings(data);
      })
      .catch(console.error);
  }, []);

  const logoSrc = siteSettings?.logoUrl || headerLogo;

  // Handler for opening Off Canvas
  const handleOffCanvasOpen = () => {
    dispatch(toggleOffCanvas(true));
  };

  // Handler for opening PopUp
  const handlePopupOpen = () => {
    dispatch(togglePopUp(true));
  };

  return (
    <>
      {/* Conditionally Show Search Pop-Up */}
      {hasPopUp && <SearchPopup />}
      {/* Search Pop-Up */}

      {/* Off-canvas */}
      <OffCanvas />
      {/* Off-canvas */}

      <header>
        {/* Conditionally Show TopBar Area */}
        {hasTopBar && <TopBarArea />}
        {/* TopBar Area  */}

        <div
          id="header-sticky"
          className={`${headerClass} ${isVisible ? HEADER_STICKY_CLASS : ''}`}
        >
          <div className="container">
            <div className="p-relative">
              <div className="row align-items-center">
                <div className="col-xxl-2 col-xl-2 col-6">
                  <div className="it-header-logo p-2">
                    <Link href="/">
                      <Image
                        className="image-height-auto"
                        src={logoSrc}
                        alt="Togeto"
                        width={90}
                        height={40}
                        unoptimized={true}
                      />
                    </Link>
                  </div>
                </div>
                <div className="col-xxl-7 col-xl-7 d-none d-xl-block">
                  <div className="it-header-menu it-header-dropdown">
                    <nav className="it-menu-content">
                      {isOnePage ? <HeaderMenusOnePage /> : <HeaderMenus />}
                    </nav>
                  </div>
                </div>
                <div className="col-xxl-3 col-xl-3 col-6">
                  <div className="it-header-right-action d-flex justify-content-end align-items-center">
                    {hasPopUp && (
                      <button
                        className="it-header-search search-open-btn d-none d-lg-block"
                        onClick={handlePopupOpen}
                      >
                        <Search />
                      </button>
                    )}
                    <Link
                      href="/contact"
                      className="it-btn-orange d-none d-md-block"
                    >
                      <span>Get Started Now</span>
                    </Link>
                    <div className="it-header-bar d-xl-none">
                      <button
                        className="it-menu-bar"
                        onClick={handleOffCanvasOpen}
                      >
                        <span>
                          <MenuBar />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
