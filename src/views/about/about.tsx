'use client';

import { useGSAP } from '@gsap/react';
import {
  fadeAnimation,
  splitAnimation,
  textAnimation,
} from '@/utils/title-animation';
import { useGsapAnimations } from '@/hooks/use-gsap-animation';
import Wrapper from '@/layouts/wrapper';
import { LOADING_ANIMATION_TIMEOUT } from '@/utils/constants';
import Header from '@/layouts/headers/header';
import FooterTwo from '@/layouts/footers/footer-two';
import Breadcrumb from '@/components/bradcrumb/breadcrumb';
import AboutThree from '@/components/about/about-three';
import AboutMissionVision from '@/components/about/about-mission-vision';
import AboutTeamSlider from '@/components/team/about-team-slider';
import AboutSolutions from '@/components/about/about-solutions';

const AboutMain = ({ data }: { data?: any }) => {
  // Enable Gsap ANimations
  useGsapAnimations();

  // GSAP animations
  useGSAP(() => {
    const timer = setTimeout(() => {
      fadeAnimation();
      splitAnimation();
      textAnimation();
    }, LOADING_ANIMATION_TIMEOUT);
    return () => clearTimeout(timer);
  });

  return (
    <Wrapper>
      <Header />

      <main>
        <Breadcrumb title="About Us" subtitle="About" />
        <AboutThree hideButton about={data?.about} counters={data?.counters} />
        <AboutMissionVision tabs={data?.tabs} />
        <AboutSolutions solutions={data?.solutions} />
        <AboutTeamSlider team={data?.team} />
      </main>

      <FooterTwo />
    </Wrapper>
  );
};
export default AboutMain;
