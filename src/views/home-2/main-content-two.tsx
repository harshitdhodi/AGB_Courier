import AboutTwo from '@/components/about/about-two';
import BlogTwo from '@/components/blog/blog-two';
import HeroSliderOne from '@/components/hero/hero-slider/hero-slider-one';
import ServiceTwo from '@/components/service/service-two';
import ChooseTwo from '@/components/choose/choose-two';
import HomeFaq from '@/components/faq/home-faq';
import HomeCta from '@/components/cta/home-cta';

const MainContentTwo = ({ data }: { data?: any }) => {
  return (
    <main>
      <HeroSliderOne slides={data?.slides} />
      <AboutTwo about={data?.about} tabs={data?.tabs} counters={data?.counters} />
      <ServiceTwo services={data?.services} />
      <ChooseTwo whyChoose={data?.whyChoose} features={data?.features} />
      {/* <StepOne /> */}
      <HomeFaq faqs={data?.faqs} />
      <HomeCta cta={data?.cta} />
      {/* <ContactOne /> */}
      <BlogTwo blogs={data?.blogs} />
    </main>
  );
};
export default MainContentTwo;

