import AboutTwo from '@/components/about/about-two';
import BlogTwo from '@/components/blog/blog-two';
import HeroSliderOne from '@/components/hero/hero-slider/hero-slider-one';
import ServiceTwo from '@/components/service/service-two';
import ChooseTwo from '@/components/choose/choose-two';
import StepOne from '@/components/step/step-one';
import HomeFaq from '@/components/faq/home-faq';
import HomeCta from '@/components/cta/home-cta';

const MainContentTwo = () => {
  return (
    <main>
      <HeroSliderOne />
      <AboutTwo />
      <ServiceTwo />
      <ChooseTwo />
      {/* <StepOne /> */}
      <HomeFaq />
      <HomeCta />
      {/* <ContactOne /> */}
      <BlogTwo />
    </main>
  );
};
export default MainContentTwo;

