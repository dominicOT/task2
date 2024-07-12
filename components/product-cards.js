import GroupComponent1 from "./group-component1";
import CardTypes from "./card-types";
import GroupComponent from "./group-component";
import PropTypes from "prop-types";

const ProductCards = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[51px] max-w-full text-left text-5xl text-black font-inter mq750:gap-[25px] ${className}`}
    >
      <div className="w-[1212px] grid flex-row items-start justify-start gap-[24px] max-w-full grid-cols-[repeat(6,_minmax(136px,_1fr))] z-[3] text-sm text-white mq450:grid-cols-[minmax(136px,_1fr)] mq1100:justify-center mq1100:grid-cols-[repeat(3,_minmax(136px,_237px))]">
        <div className="h-[243px] flex flex-col items-start justify-start gap-[21px]">
          <img
            className="self-stretch flex-1 relative rounded-mini max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/rectangle-6@2x.png"
          />
          <div className="flex flex-row items-start justify-start py-0 px-[63px]">
            <b className="relative tracking-[0.03em] inline-block min-w-[41px]">
              Radio
            </b>
          </div>
        </div>
        <GroupComponent1
          rectangle7="/rectangle-7@2x.png"
          television="Television"
        />
        <GroupComponent1
          rectangle7="/rectangle-8@2x.png"
          television="Microphones"
          propPadding="unset"
        />
        <GroupComponent1
          rectangle7="/rectangle-9@2x.png"
          television="Speaker"
          propPadding="0px 0px 38px"
        />
        <GroupComponent1
          rectangle7="/rectangle-10-1@2x.png"
          television="KEYBOARD"
          propPadding="0px 0px 38px"
        />
        <GroupComponent1
          rectangle7="/rectangle-11@2x.png"
          television="Cables"
          propPadding="unset"
        />
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border max-w-full">
        <div className="flex-1 flex flex-row items-end justify-between max-w-full gap-[20px] mq1275:flex-wrap">
          <div className="w-[386px] flex flex-col items-start justify-end pt-0 px-0 pb-2.5 box-border max-w-full">
            <div className="self-stretch rounded-3xs bg-gainsboro-100 flex flex-row items-start justify-start pt-[23px] px-[35px] pb-[22px] box-border gap-[53px] max-w-full z-[3] mq450:flex-wrap mq450:gap-[26px]">
              <div className="h-[86px] w-[386px] relative rounded-3xs bg-gainsboro-100 hidden max-w-full" />
              <div className="h-10 w-10 relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1]">
                <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-full h-full" />
                <img
                  className="absolute top-[4px] left-[4px] rounded-3xs w-9 h-9 object-cover z-[1]"
                  alt=""
                  src="/circuit-1@2x.png"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-[11px] px-0 pb-0">
                <h2 className="m-0 relative text-inherit tracking-[0.03em] font-semibold font-inherit z-[1] mq450:text-lgi">
                  Exclusive deals
                </h2>
              </div>
            </div>
          </div>
          <div className="w-[697px] rounded-3xs bg-gainsboro-100 flex flex-row items-start justify-start pt-[23px] px-[30px] pb-[15px] box-border gap-[69px] max-w-full z-[3] mq450:flex-wrap mq450:gap-[34px]">
            <div className="h-10 w-10 relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] hidden">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-full h-full" />
              <img
                className="absolute top-[4px] left-[4px] w-9 h-9 object-cover"
                alt=""
                src="/circuit-1@2x.png"
              />
            </div>
            <div className="h-[78px] w-[697px] relative rounded-3xs bg-gainsboro-100 hidden max-w-full" />
            <div className="h-10 w-10 relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1]">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-full h-full" />
              <img
                className="absolute top-[4px] left-[4px] rounded-3xs w-9 h-9 object-cover z-[1]"
                alt=""
                src="/circuit-1@2x.png"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
              <h2 className="m-0 relative text-inherit tracking-[0.03em] font-semibold font-inherit z-[1] mq450:text-lgi">
                popular pick
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1226px] flex flex-row items-start justify-start py-0 px-[3px] box-border max-w-full">
        <div className="flex-1 flex flex-col items-end justify-start gap-[44px] max-w-full mq750:gap-[22px]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[131px] max-w-full mq450:gap-[16px] mq750:gap-[33px] mq1100:flex-wrap mq1275:gap-[65px]">
            <div className="w-[392px] flex flex-col items-end justify-start gap-[38px] min-w-[392px] max-w-full mq450:gap-[19px] mq750:min-w-full mq1100:flex-1">
              <div className="self-stretch flex flex-row items-start justify-end py-0 pr-1 pl-0 box-border max-w-full">
                <div className="h-[411px] flex-1 relative max-w-full mq1100:flex-1">
                  <div className="absolute top-[2px] left-[0px] rounded-8xs bg-whitesmoke-100 w-full h-full flex flex-col items-end justify-start pt-[25px] px-1 pb-[31px] box-border gap-[18px] max-w-full z-[3]">
                    <div className="w-[388px] h-[409px] relative rounded-8xs bg-whitesmoke-100 hidden max-w-full" />
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[12px]">
                      <div className="w-[319px] flex flex-row items-start justify-center py-0 px-5 box-border">
                        <h2 className="m-0 relative text-inherit tracking-[0.03em] font-semibold font-inherit z-[4] mq450:text-lgi">
                          Buy in bulk
                        </h2>
                      </div>
                      <img
                        className="self-stretch flex-1 relative rounded-3xs max-w-full overflow-hidden max-h-full object-cover z-[4]"
                        loading="lazy"
                        alt=""
                        src="/rectangle-14@2x.png"
                      />
                    </div>
                    <div className="w-[364px] flex flex-row items-start justify-end py-0 px-[37px] box-border max-w-full">
                      <div className="flex-1 bg-whitesmoke-100 flex flex-row items-start justify-start pt-3.5 px-[109px] pb-4 z-[4] mq450:pl-5 mq450:pr-5 mq450:box-border">
                        <div className="h-[60px] w-[290px] relative bg-whitesmoke-100 hidden" />
                        <div className="w-[54px] relative font-semibold inline-block z-[5] mq450:text-lgi">
                          <span className="tracking-[0.03em]">Bu</span>
                          <span className="tracking-[0.06em]">y</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-[0px] left-[258px] w-[120px] h-[120px]">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-whitesmoke-100 w-full h-full z-[5]" />
                    <div className="absolute top-[34px] left-[30px] tracking-[0.03em] font-semibold z-[6] mq450:text-lgi">
                      <p className="m-0">Save</p>
                      <p className="m-0"> 40%</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-8xs bg-gainsboro-100 flex flex-col items-center justify-start pt-7 pb-[13px] pr-5 pl-[21px] box-border max-w-full z-[3]">
                <div className="w-[386px] h-[86px] relative rounded-8xs bg-gainsboro-100 hidden max-w-full" />
                <div className="h-7 flex flex-row items-start justify-start py-0 px-[7px] box-border">
                  <h2 className="m-0 relative text-inherit tracking-[0.03em] font-semibold font-inherit z-[4] mq450:text-lgi">
                    New arrival
                  </h2>
                </div>
                <div className="relative text-sm tracking-[0.03em] z-[5]">
                  Discover new product
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[22px] px-0 pb-0 box-border min-w-[453px] max-w-full text-sm mq750:min-w-full">
              <div className="self-stretch flex flex-col items-end justify-start gap-[99px] max-w-full mq450:gap-[25px] mq750:gap-[49px]">
                <div className="flex flex-row items-start justify-end py-0 px-2.5 box-border max-w-full">
                  <div className="w-[659px] flex flex-row flex-wrap items-start justify-start gap-[32px_17px] min-h-[552px] max-w-full">
                    <CardTypes ipad="Ipad" socketFanCards="$200. 00" />
                    <div className="w-[207px] rounded-mini bg-whitesmoke-100 flex flex-row items-start justify-between pt-[210px] pb-2 pr-[7px] pl-5 box-border gap-[20px] z-[3]">
                      <div className="h-[257px] w-[207px] relative rounded-mini bg-whitesmoke-100 hidden" />
                      <div className="flex flex-col items-start justify-start gap-[5px]">
                        <div className="relative tracking-[0.03em] font-semibold inline-block min-w-[91px] z-[4]">
                          Standing fan
                        </div>
                        <div className="relative tracking-[0.03em] font-semibold inline-block min-w-[54px] whitespace-nowrap z-[4]">
                          $10. 00
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                        <img
                          className="w-6 h-6 relative rounded-mini overflow-hidden shrink-0 z-[4]"
                          alt=""
                          src="/ipad-card.svg"
                        />
                      </div>
                    </div>
                    <div className="h-[257px] w-[207px] rounded-mini bg-whitesmoke-100 flex flex-col items-end justify-start pt-px px-0 pb-1.5 box-border gap-[10px] z-[3]">
                      <div className="self-stretch h-[257px] relative rounded-mini bg-whitesmoke-100 hidden" />
                      <img
                        className="self-stretch flex-1 relative rounded-mini max-w-full overflow-hidden max-h-full object-cover z-[1]"
                        loading="lazy"
                        alt=""
                        src="/rectangle-27@2x.png"
                      />
                      <div className="self-stretch flex flex-row items-start justify-end py-0 pr-2.5 pl-5">
                        <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                          <div className="flex flex-col items-start justify-start gap-[4px]">
                            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-px">
                              <div className="relative tracking-[0.03em] font-semibold inline-block min-w-[83px] z-[1]">
                                Wall socket
                              </div>
                            </div>
                            <div className="relative tracking-[0.03em] font-semibold inline-block min-w-[62px] whitespace-nowrap z-[1]">
                              $170. 00
                            </div>
                          </div>
                          <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                            <img
                              className="w-6 h-6 relative overflow-hidden shrink-0 z-[1]"
                              alt=""
                              src="/ipad-card.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[257px] w-[207px] rounded-mini bg-whitesmoke-100 flex flex-row items-end justify-start pt-0 px-0 pb-px box-border z-[3]">
                      <div className="self-stretch w-[207px] relative rounded-mini bg-whitesmoke-100 hidden" />
                      <div className="self-stretch flex-1 rounded-mini bg-whitesmoke-100 flex flex-col items-start justify-start pt-px px-0 pb-[9px] gap-[2px] z-[4]">
                        <img
                          className="self-stretch h-[201px] relative rounded-mini max-w-full overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                          src="/rectangle-28@2x.png"
                        />
                        <div className="relative tracking-[0.03em] font-semibold hidden min-w-[56px]">
                          Camera
                        </div>
                        <div className="relative tracking-[0.03em] font-semibold hidden min-w-[57px] whitespace-nowrap">
                          $40. 00
                        </div>
                        <img
                          className="w-6 h-6 relative overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/ipad-card.svg"
                        />
                        <div className="self-stretch h-[257px] relative rounded-mini bg-whitesmoke-100 hidden" />
                        <img
                          className="self-stretch flex-1 relative rounded-mini max-w-full overflow-hidden max-h-full object-cover z-[1]"
                          loading="lazy"
                          alt=""
                          src="/rectangle-28@2x.png"
                        />
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[15px] pl-[18px]">
                          <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                            <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                              <div className="relative tracking-[0.03em] font-semibold inline-block min-w-[56px] z-[1]">
                                Camera
                              </div>
                            </div>
                            <img
                              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px] z-[1]"
                              loading="lazy"
                              alt=""
                              src="/ipad-card.svg"
                            />
                          </div>
                        </div>
                        <div className="flex flex-row items-start justify-start py-0 px-[17px]">
                          <div className="relative tracking-[0.03em] font-semibold inline-block min-w-[57px] whitespace-nowrap z-[1]">
                            $40. 00
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[258px] w-[207px] flex flex-row items-end justify-start pt-0 px-0 pb-px box-border z-[3]">
                      <div className="self-stretch flex-1 rounded-mini bg-whitesmoke-100 flex flex-col items-end justify-start pt-0 px-0 pb-[7px] gap-[9px] z-[4]">
                        <div className="self-stretch h-[257px] relative rounded-mini bg-whitesmoke-100 hidden" />
                        <img
                          className="self-stretch h-[201px] relative rounded-mini max-w-full overflow-hidden shrink-0 object-cover hidden"
                          alt=""
                          src="/rectangle-29@2x.png"
                        />
                        <div className="relative tracking-[0.03em] font-semibold hidden min-w-[59px]">
                          Speaker
                        </div>
                        <div className="relative tracking-[0.03em] font-semibold hidden min-w-[56px] whitespace-nowrap">
                          $30. 00
                        </div>
                        <img
                          className="w-6 h-6 relative overflow-hidden shrink-0 hidden"
                          alt=""
                          src="/ipad-card.svg"
                        />
                        <div className="self-stretch h-[257px] relative rounded-mini bg-whitesmoke-100 hidden" />
                        <img
                          className="self-stretch flex-1 relative rounded-mini max-w-full overflow-hidden max-h-full object-cover z-[1]"
                          loading="lazy"
                          alt=""
                          src="/rectangle-29@2x.png"
                        />
                        <div className="self-stretch flex flex-row items-start justify-end py-0 pr-[11px] pl-[19px]">
                          <div className="flex-1 flex flex-col items-start justify-start">
                            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px">
                              <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                                  <div className="relative tracking-[0.03em] font-semibold inline-block min-w-[59px] z-[1]">
                                    Speaker
                                  </div>
                                </div>
                                <img
                                  className="h-6 w-6 relative overflow-hidden shrink-0 z-[1]"
                                  loading="lazy"
                                  alt=""
                                  src="/ipad-card.svg"
                                />
                              </div>
                            </div>
                            <div className="relative tracking-[0.03em] font-semibold inline-block min-w-[56px] whitespace-nowrap z-[1]">
                              $30. 00
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-[261px] w-[207px] relative z-[3]">
                      <img
                        className="absolute top-[0px] left-[0px] rounded-mini w-[207px] h-[201px] object-cover z-[1]"
                        loading="lazy"
                        alt=""
                        src="/rectangle-30@2x.png"
                      />
                      <CardTypes
                        ipad="Iphone cord"
                        socketFanCards="$10. 00"
                        propWidth="100%"
                        propPosition="absolute"
                        propTop="4px"
                        propLeft="0px"
                        propHeight="100%"
                      />
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-mini bg-gainsboro-100 flex flex-row items-start justify-start py-[19px] px-[41px] box-border gap-[88px] max-w-full z-[3] text-5xl mq450:flex-wrap mq450:gap-[44px]">
                  <div className="h-[78px] w-[697px] relative rounded-mini bg-gainsboro-100 hidden max-w-full" />
                  <div className="h-10 w-10 relative shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] z-[1]">
                    <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-full h-full" />
                    <img
                      className="absolute top-[4px] left-[4px] rounded-mini w-9 h-9 object-cover z-[1]"
                      loading="lazy"
                      alt=""
                      src="/circuit-1@2x.png"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                    <h2 className="m-0 relative text-inherit tracking-[0.03em] font-semibold font-inherit z-[1] mq450:text-lgi">
                      popular pick
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[146px] max-w-full text-13xl text-white mq450:gap-[18px] mq750:gap-[36px] mq1100:flex-wrap mq1275:gap-[73px]">
            <div className="w-[391px] flex flex-col items-start justify-start pt-[181px] px-0 pb-0 box-border min-w-[391px] max-w-full mq750:pt-[118px] mq750:box-border mq750:min-w-full mq1100:flex-1">
              <div className="self-stretch bg-black flex flex-col items-end justify-start pt-[66px] px-[21px] pb-[78px] box-border gap-[84px] min-h-[392px] max-w-full z-[3] mq450:gap-[42px] mq450:pt-[43px] mq450:pb-[51px] mq450:box-border">
                <div className="w-[391px] h-[392px] relative bg-black hidden max-w-full" />
                <div className="flex flex-col items-start justify-start gap-[11px] max-w-full">
                  <h1 className="m-0 relative text-inherit tracking-[0.03em] font-bold font-inherit z-[1] mq450:text-lgi mq750:text-7xl">
                    Unlimited time offer
                  </h1>
                  <div className="flex flex-row items-start justify-start py-0 px-[54px] text-5xl mq450:pl-5 mq450:pr-5 mq450:box-border">
                    <h2 className="m-0 relative text-inherit tracking-[0.03em] font-bold font-inherit z-[1] mq450:text-lgi">
                      hurry, limited
                    </h2>
                  </div>
                </div>
                <div className="w-[302px] flex flex-row items-start justify-end py-0 px-[49px] box-border text-29xl text-black mq450:pl-5 mq450:pr-5 mq450:box-border">
                  <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
                    <div className="w-[76px] flex flex-row items-start justify-start gap-[19px]">
                      <div className="flex-1 bg-whitesmoke-100 flex flex-row items-start justify-start pt-[21px] pb-1 pr-1.5 pl-2.5 z-[1]">
                        <div className="h-[84px] w-[41px] relative bg-whitesmoke-100 hidden" />
                        <b className="flex-1 relative tracking-[0.03em] z-[1] mq450:text-10xl mq750:text-19xl">
                          1
                        </b>
                      </div>
                      <div className="w-4 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border text-white">
                        <h1 className="m-0 self-stretch relative text-inherit tracking-[0.03em] font-bold font-inherit z-[1] mq450:text-10xl mq750:text-19xl">
                          :
                        </h1>
                      </div>
                    </div>
                    <div className="w-[92px] flex flex-row items-start justify-start gap-[10px]">
                      <div className="flex-1 bg-whitesmoke-100 flex flex-row items-start justify-start pt-[21px] px-[3px] pb-1 z-[1]">
                        <div className="h-[84px] w-[41px] relative bg-whitesmoke-100 hidden" />
                        <b className="w-[34px] relative tracking-[0.03em] inline-block z-[1] mq450:text-10xl mq750:text-19xl">
                          8
                        </b>
                      </div>
                      <div className="flex-1 bg-whitesmoke-100 flex flex-row items-start justify-start pt-[21px] px-[3px] pb-1 z-[1]">
                        <div className="h-[84px] w-[41px] relative bg-whitesmoke-100 hidden" />
                        <b className="w-[34px] relative tracking-[0.03em] inline-block z-[1] mq450:text-10xl mq750:text-19xl">
                          8
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start gap-[37px] min-w-[441px] max-w-full text-5xl text-black mq750:flex-wrap mq750:gap-[18px] mq750:min-w-full">
              <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border min-w-[209px]">
                <GroupComponent
                  wireAccessoriesImage="/rectangle-37@2x.png"
                  wiresAccessories="wires accessories"
                  view="View"
                />
              </div>
              <GroupComponent
                wireAccessoriesImage="/rectangle-38@2x.png"
                wiresAccessories="working accessories"
                view="Discover"
                propAlignSelf="unset"
                propFlex="0.8012"
                propMinWidth="209px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCards.propTypes = {
  className: PropTypes.string,
};

export default ProductCards;
