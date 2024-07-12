import { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import FrameComponent from "../components/frame-component";
import OrderContainer from "../components/order-container";
import Contact from "../components/contact";

const WebVeiw = () => {
  const [dropdownAnchorEl, setDropdownAnchorEl] = useState(null);
  const dropdownOpen = Boolean(dropdownAnchorEl);
  const handleDropdownClick = (event) => {
    setDropdownAnchorEl(event.currentTarget);
  };
  const handleDropdownClose = () => {
    setDropdownAnchorEl(null);
  };
  return (
    <div className="w-full relative [background:linear-gradient(rgba(244,_242,_242,_0.2),_rgba(244,_242,_242,_0.2)),_linear-gradient(180deg,_#fff,_#999_81%)] overflow-hidden flex flex-col items-start justify-start pt-[97px] pb-[58px] pr-[89px] pl-[109px] box-border gap-[162px] leading-[normal] tracking-[normal] text-left text-13xl text-black font-inter mq750:gap-[81px] mq750:pl-[54px] mq750:pr-11 mq750:box-border mq450:gap-[40px] mq450:pl-5 mq450:pr-5 mq450:box-border">
      <FrameComponent />
      <div className="self-stretch flex flex-col items-start justify-start pt-0 px-0 pb-[38px] box-border gap-[77px] max-w-full mq750:gap-[38px] mq450:gap-[19px]">
        <OrderContainer />
        <div className="self-stretch flex flex-col items-end justify-start pt-0 px-0 pb-[55px] box-border gap-[59px] max-w-full mq750:gap-[29px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[22px] max-w-full">
            <div className="w-[1222px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
              <div className="w-[1012px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
                <div className="w-[41px] relative tracking-[0.03em] inline-block mq1050:text-7xl mq450:text-lgi">
                  EE
                </div>
                <div className="flex flex-col items-start justify-start pt-[15px] px-0 pb-0">
                  <div className="relative tracking-[0.03em] inline-block min-w-[106px] whitespace-nowrap mq1050:text-7xl mq450:text-lgi">
                    $6000
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch h-[5px] relative box-border border-t-[5px] border-solid border-silver" />
          </div>
          <div className="w-[448px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
            <div className="w-[264px] flex flex-row items-start justify-between gap-[20px]">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <div className="flex flex-col items-start justify-start gap-[33px]">
                  <div className="flex flex-row items-start justify-start py-0 px-[5px]">
                    <div className="relative tracking-[0.03em] inline-block min-w-[57px] mq1050:text-7xl mq450:text-lgi">
                      Tax
                    </div>
                  </div>
                  <div className="relative tracking-[0.03em] font-extrabold inline-block min-w-[85px] z-[1] mq1050:text-7xl mq450:text-lgi">
                    Total
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start gap-[25px]">
                <div className="relative tracking-[0.03em] inline-block min-w-[114px] whitespace-nowrap mq1050:text-7xl mq450:text-lgi">
                  $00.00
                </div>
                <div className="flex flex-row items-start justify-start py-0 pr-0 pl-[11px]">
                  <div className="relative tracking-[0.03em] font-extrabold inline-block min-w-[116px] whitespace-nowrap z-[1] mq1050:text-7xl mq450:text-lgi">
                    $6000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Contact />
        <div className="flex flex-row items-start justify-start pt-0 pb-[45px] pr-0 pl-1.5 box-border max-w-full">
          <div className="w-[1236px] flex flex-col items-start justify-start gap-[18px] max-w-full">
            <div className="w-[519px] flex flex-row items-start justify-center pt-0 px-5 pb-5 box-border max-w-full">
              <div className="relative tracking-[0.03em] font-extrabold z-[1] mq1050:text-7xl mq450:text-lgi">
                credit Card Details
              </div>
            </div>
            <div className="self-stretch h-[5px] relative box-border z-[1] border-t-[5px] border-solid border-silver" />
            <div className="w-[1015px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-gray-900">
              <div className="w-[799px] flex flex-row items-start justify-between gap-[20px] max-w-full mq750:flex-wrap">
                <b className="relative tracking-[0.03em] z-[1] mq1050:text-7xl mq450:text-lgi">
                  Card Number
                </b>
                <b className="relative tracking-[0.03em] z-[1] mq1050:text-7xl mq450:text-lgi">
                  Expiration
                </b>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[293px] flex flex-row items-start justify-center py-0 px-5 box-border text-gray-1100">
          <b className="relative tracking-[0.03em] inline-block min-w-[75px] z-[1] mq1050:text-7xl mq450:text-lgi">
            CVV
          </b>
        </div>
      </div>
      <div className="self-stretch h-[100px] flex flex-row items-start justify-start py-0 pr-[25px] pl-[15px] box-border max-w-full">
        <Button
          className="self-stretch flex-1 max-w-full z-[1] mq450:pl-5 mq450:pr-5 mq450:box-border"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "32",
            background: "#2d4efb",
            borderRadius: "10px",
            "&:hover": { background: "#2d4efb" },
          }}
        >
          continue to checkout
        </Button>
      </div>
      <main className="w-full h-[1865px] absolute !m-[0] right-[0px] bottom-[0px] left-[0px]">
        <img
          className="absolute top-[0px] left-[0px] w-[1440px] h-[2251px]"
          alt=""
          src="/rectangle-10.svg"
        />
        <textarea
          className="[border:none] bg-white h-[100px] w-[572px] [outline:none] absolute top-[1352px] left-[214px] rounded-3xs z-[1]"
          rows={5}
          cols={29}
        />
        <textarea
          className="[border:none] bg-white h-[100px] w-[492px] [outline:none] absolute top-[1352px] left-[831px] rounded-3xs z-[1]"
          rows={5}
          cols={25}
        />
        <textarea
          className="[border:none] bg-white h-[100px] w-[209px] [outline:none] absolute top-[1513px] left-[214px] rounded-3xs z-[1]"
          rows={5}
          cols={10}
        />
        <textarea
          className="[border:none] bg-white h-[100px] w-[572px] [outline:none] absolute top-[479px] left-[214px] rounded-3xs z-[1]"
          rows={5}
          cols={29}
        />
        <textarea
          className="[border:none] bg-white h-[100px] w-[572px] [outline:none] absolute top-[661px] left-[214px] rounded-3xs z-[1]"
          rows={5}
          cols={29}
        />
        <textarea
          className="[border:none] bg-white h-[100px] w-[492px] [outline:none] absolute top-[301px] left-[834px] rounded-3xs z-[1]"
          rows={5}
          cols={25}
        />
        <textarea
          className="[border:none] bg-white h-[100px] w-[492px] [outline:none] absolute top-[479px] left-[830px] rounded-3xs z-[1]"
          rows={5}
          cols={25}
        />
        <textarea
          className="[border:none] bg-white h-[100px] w-[492px] [outline:none] absolute top-[657px] left-[825px] rounded-3xs z-[1]"
          rows={5}
          cols={25}
        />
        <textarea
          className="[border:none] bg-white h-[100px] w-[492px] [outline:none] absolute top-[1013px] left-[825px] rounded-3xs z-[1]"
          rows={5}
          cols={25}
        />
        <div className="absolute top-[835px] left-[825px] z-[1]">
          <Button
            id="button-undefined"
            aria-controls="menu-undefined"
            aria-haspopup="true"
            aria-expanded={dropdownOpen ? "true" : undefined}
            onClick={handleDropdownClick}
            color="primary"
            sx={{
              width: "492",
              height: "100",
              backgroundColor: "#fff",
              borderRadius: "10px",
            }}
          />
          <Menu
            anchorEl={dropdownAnchorEl}
            open={dropdownOpen}
            onClose={handleDropdownClose}
          />
        </div>
        <img
          className="absolute top-[945px] left-[255px] w-6 h-6 overflow-hidden z-[1]"
          loading="lazy"
          alt=""
          src="/ictwotonecircle.svg"
        />
        <img
          className="absolute top-[991px] left-[255px] w-6 h-6 overflow-hidden z-[1]"
          loading="lazy"
          alt=""
          src="/ictwotonecircle.svg"
        />
        <img
          className="absolute top-[1037px] left-[255px] w-6 h-6 overflow-hidden z-[1]"
          loading="lazy"
          alt=""
          src="/ictwotonecircle.svg"
        />
      </main>
    </div>
  );
};

export default WebVeiw;
