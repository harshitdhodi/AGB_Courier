'use client';

import Link from 'next/link';
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';

interface IFaqItem {
  id: string | number;
  question: string;
  answer: string;
}

const faqData: IFaqItem[] = [
  {
    id: 'faq-1',
    question: 'How do I track my shipment in real time?',
    answer: 'You can easily track your cargo using our live tracking tool on the homepage. Just enter your unique Tracking ID to see the current location and delivery status.',
  },
  {
    id: 'faq-2',
    question: 'What types of logistics services do you offer?',
    answer: 'We provide comprehensive logistics solutions including air freight, ocean shipping, land transport, warehousing, custom clearance, and door-to-door cargo delivery services.',
  },
  {
    id: 'faq-3',
    question: 'How are shipping rates calculated?',
    answer: 'Rates are determined based on shipment weight, dimensions, origin, destination, and the mode of transport selected. Use our online request tool or contact support for a tailored quote.',
  },
  {
    id: 'faq-4',
    question: 'Are my shipments insured during transit?',
    answer: 'Yes, we offer comprehensive cargo insurance coverage options to protect your valuable goods against damage, loss, or theft throughout their transit journey.',
  },
  {
    id: 'faq-5',
    question: 'What is your procedure for customs clearance?',
    answer: 'Our dedicated customs brokerage team handles all document verification, tariff classifications, duties payments, and regulatory compliance to ensure smooth clearance at checkpoints.',
  },
];

interface HomeFaqProps {
  faqs?: any[];
}

const HomeFaq = ({ faqs }: HomeFaqProps) => {
  const data = faqs && faqs.length > 0 ? faqs : faqData;
  const defaultUuid = data[0]?.id ? String(data[0].id) : 'faq-1';

  return (
    <div id="faq-section" className="it-home-faq">
      <div className="container">
        <div className="row align-items-start">
          <div 
            className="col-xl-5 col-lg-6 mb-50 mb-lg-0 wow animate__fadeInLeft"
            data-wow-duration=".9s"
            data-wow-delay=".3s"
          >
            <div className="it-section-title-box">
              <span className="it-section-subtitle it-split-text it-split-in-right">
                Frequently Asked Questions
              </span>
              <h4 className="it-section-title it-split-text it-split-in-right">
                Got Questions? We Have Answers.
              </h4>
            </div>
            <p className="faq-intro-text">
              We understand that logistics and transport can raise many questions. Here are some of the most common inquiries our clients have. If you need further assistance, our support team is always ready to help.
            </p>
            <div className="faq-cta-btn">
              <Link href="/contact" className="it-btn-orange">
                <span>Ask a Custom Question</span>
              </Link>
            </div>
          </div>

          <div 
            className="col-xl-7 col-lg-6 wow animate__fadeInRight"
            data-wow-duration=".9s"
            data-wow-delay=".5s"
          >
            <div className="it-home-faq-accordion">
              <Accordion
                className="accordion"
                preExpanded={[defaultUuid]}
                allowZeroExpanded
              >
                {data.map((item) => (
                  <AccordionItem
                    key={item.id}
                    className="accordion-items"
                    uuid={String(item.id)}
                  >
                    <AccordionItemHeading className="accordion-header">
                      <AccordionItemButton className="accordion-buttons">
                        {item.question}
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <div className="accordion-body">
                        <p>{item.answer}</p>
                      </div>
                    </AccordionItemPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeFaq;
