import Counter from '@/components/funfact/counter-item/counter-item';

interface AboutProps {
  itemClass?: string;
}

const counterData = [
  {
    id: 1,
    countNum: 25,
    countSuffix: '+',
    countTitle: 'New Partners <br /> Every Year',
  },
  {
    id: 2,
    countNum: 97,
    countSuffix: '+',
    countTitle: 'Years Of Field <br /> Experience',
  },
  {
    id: 3,
    countNum: 18,
    countSuffix: '+',
    countTitle: 'Talented Staffs <br /> Worldwide',
  },
];

const AboutFunFactOne = ({ itemClass }: AboutProps) => {
  return (
    <div className={itemClass || 'about-counter-container'}>
      <div className="row gx-0">
        {counterData.map((item) => (
          <div key={item.id} className="col-md-4 col-sm-6 counter-col">
            <div className="it-about-counter-box">
              <h5 className="it-about-counter-number">
                <Counter
                  start={0}
                  end={item.countNum}
                  duration={2.5}
                  counterSuffix={item.countSuffix}
                />
              </h5>
              <div className="it-about-counter-desc">
                <span className="it-about-counter-bullet" />
                <span
                  className="it-about-counter-text"
                  dangerouslySetInnerHTML={{ __html: item.countTitle }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default AboutFunFactOne;
