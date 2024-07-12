import PropTypes from "prop-types";

const Contact = ({ className = "" }) => {
  return (
    <div
      className={`w-[1086px] flex flex-row items-start justify-center pt-0 px-5 pb-[83px] box-border max-w-full text-left text-13xl text-black font-inter mq750:pb-[35px] mq750:box-border mq1050:pb-[54px] mq1050:box-border ${className}`}
    >
      <div className="w-[876px] flex flex-col items-start justify-start gap-[20px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start gap-[49px] max-w-full mq1050:flex-wrap mq450:gap-[24px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[144px] min-w-[372px] max-w-full mq750:gap-[72px] mq750:min-w-full mq450:gap-[36px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[30px] max-w-full">
              <div className="relative tracking-[0.03em] font-extrabold inline-block max-w-full z-[1] mq1050:text-7xl mq450:text-lgi">
                contact information
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[43px] max-w-full text-gray-2000 mq750:gap-[21px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[13px] max-w-full">
                  <div className="flex flex-row items-start justify-start py-0 px-1 box-border max-w-full">
                    <b className="relative tracking-[0.03em] z-[1] mq1050:text-7xl mq450:text-lgi">
                      First and last name
                    </b>
                  </div>
                  <div className="self-stretch rounded-3xs bg-white flex flex-row items-start justify-start pt-[30px] px-9 pb-[31px] box-border max-w-full z-[1] text-black">
                    <div className="h-[100px] w-[572px] relative rounded-3xs bg-white hidden max-w-full" />
                    <div className="relative tracking-[0.03em] font-medium z-[2] mq1050:text-7xl mq450:text-lgi">
                      Your name
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-[3px] text-gray-900">
                  <b className="relative tracking-[0.03em] z-[2] mq1050:text-7xl mq450:text-lgi">
                    Company
                  </b>
                </div>
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-[3px] text-gray-1800">
              <b className="relative tracking-[0.03em] z-[2] mq1050:text-7xl mq450:text-lgi">
                Email address
              </b>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-[138px] min-w-[255px] mq1050:flex-1 mq450:gap-[69px]">
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-2.5 gap-[35px] mq450:gap-[17px]">
              <div className="flex flex-row items-start justify-start py-0 pr-0 pl-px">
                <div className="relative tracking-[0.03em] font-extrabold z-[1] mq1050:text-7xl mq450:text-lgi">
                  Billing Address
                </div>
              </div>
              <b className="relative tracking-[0.03em] text-gray-300 z-[1] mq1050:text-7xl mq450:text-lgi">
                Country
              </b>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-px text-gray-1600">
              <b className="relative tracking-[0.03em] z-[1] mq1050:text-7xl mq450:text-lgi">
                Address
              </b>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-px text-gray-1900">
              <b className="relative tracking-[0.03em] inline-block min-w-[68px] z-[1] mq1050:text-7xl mq450:text-lgi">
                City
              </b>
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-px text-gray-800">
              <b className="relative tracking-[0.03em] inline-block min-w-[89px] z-[1] mq1050:text-7xl mq450:text-lgi">
                State
              </b>
            </div>
          </div>
        </div>
        <div className="w-[817px] flex flex-row items-start justify-start py-0 px-[54px] box-border max-w-full text-gray-1400 mq1050:pl-[27px] mq1050:pr-[27px] mq1050:box-border">
          <div className="flex-1 flex flex-col items-start justify-start gap-[55px] max-w-full mq750:gap-[27px]">
            <b className="relative tracking-[0.03em] z-[1] mq1050:text-7xl mq450:text-lgi">
              Payment
            </b>
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-8 box-border max-w-full text-sm text-gray-1700">
              <div className="flex-1 flex flex-col items-start justify-start gap-[7px] max-w-full">
                <div className="relative tracking-[0.03em] font-semibold inline-block min-w-[107px] z-[1]">
                  caard payment
                </div>
                <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[19px] box-border max-w-full">
                  <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
                    <div className="flex flex-col items-start justify-start pt-[19px] px-0 pb-0">
                      <div className="flex flex-col items-start justify-start gap-[26px]">
                        <a className="[text-decoration:none] relative tracking-[0.03em] font-semibold text-[inherit] inline-block min-w-[48px] z-[1]">
                          paypal
                        </a>
                        <div className="relative tracking-[0.03em] font-semibold inline-block min-w-[66px] z-[1]">
                          paystack
                        </div>
                      </div>
                    </div>
                    <b className="relative text-13xl tracking-[0.03em] text-gray-200 z-[1] mq1050:text-7xl mq450:text-lgi">
                      zip code
                    </b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
};

export default Contact;
