import {
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import FrameComponent2 from "../components/frame-component2";
import ProductCards from "../components/product-cards";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";

const WebVeiw = () => {
  return (
    <div className="w-full relative [background:linear-gradient(rgba(244,_242,_242,_0.2),_rgba(244,_242,_242,_0.2)),_linear-gradient(180deg,_#fff,_#999_81%)] overflow-hidden flex flex-col items-start justify-start pt-[73px] pb-[5px] pr-0 pl-1.5 box-border gap-[12px] leading-[normal] tracking-[normal] text-left text-13xl text-black font-inter">
      <FrameComponent2 />
      <main className="w-full !m-[0] absolute top-[713px] left-[0px] flex flex-row items-start justify-start max-w-full text-left text-sm text-black font-inter">
        <img
          className="h-[2251px] flex-1 relative max-w-full overflow-hidden z-[2]"
          alt=""
          src="/rectangle-10.svg"
        />
        <div className="h-[409px] w-[388px] !m-[0] absolute bottom-[800px] left-[121px] rounded-8xs bg-whitesmoke-100 flex flex-col items-start justify-start pt-[33px] pb-[31px] pr-[25px] pl-[27px] box-border gap-[27px] max-w-full z-[4]">
          <div className="w-[388px] h-[409px] relative rounded-8xs bg-whitesmoke-100 hidden max-w-full" />
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[5]"
            loading="lazy"
            alt=""
            src="/rectangle-33@2x.png"
          />
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[31px] pl-[29px]">
            <Button
              className="h-[58px] flex-1 [backdrop-filter:blur(4px)] z-[5]"
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#000",
                fontSize: "14",
                background: "#d9d9d9",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#d9d9d9" },
                height: 58,
              }}
            >
              Explore
            </Button>
          </div>
        </div>
        <div className="h-[120px] w-[120px] absolute !m-[0] top-[1042px] left-[396px]">
          <div className="absolute top-[0px] left-[0px] [backdrop-filter:blur(4px)] rounded-[50%] bg-gainsboro-100 w-full h-full z-[6]" />
          <div className="absolute top-[44px] left-[47px] tracking-[0.03em] z-[7]">
            <p className="m-0">{`Save `}</p>
            <p className="m-0">50%</p>
          </div>
        </div>
        <img
          className="h-[201px] w-[207px] absolute !m-[0] top-[533px] right-[565px] rounded-mini object-cover z-[4]"
          loading="lazy"
          alt=""
          src="/rectangle-25@2x.png"
        />
        <img
          className="h-[201px] w-[207px] absolute !m-[0] top-[533px] right-[339px] rounded-mini object-cover z-[4]"
          loading="lazy"
          alt=""
          src="/rectangle-26@2x.png"
        />
      </main>
      <div className="w-[769px] flex flex-row items-start justify-center pt-0 px-5 pb-[216px] box-border max-w-full mq450:pb-[140px] mq450:box-border">
        <div className="w-[547px] flex flex-col items-start justify-start gap-[18px] max-w-full">
          <div className="flex flex-col items-start justify-start gap-[2px] max-w-full">
            <h1 className="m-0 h-[78px] relative text-inherit tracking-[0.03em] font-extrabold font-inherit inline-block max-w-full mq450:text-lgi mq750:text-7xl">
              <p className="m-0">Find top - quality electronics</p>
              <p className="m-0"> essentials at target it</p>
            </h1>
            <div className="flex flex-row items-start justify-start py-0 pr-0 pl-2.5 text-base">
              <div className="relative tracking-[0.03em]">
                Browse by our electronics types, brand , or our discounted items
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px box-border max-w-full text-base">
            <div className="flex-1 flex flex-row flex-wrap items-start justify-start gap-[34px] max-w-full mq750:gap-[17px]">
              <TextField
                className="[border:none] bg-[transparent] h-[61px] flex-1 font-inter font-light text-base text-black min-w-[268px] max-w-full"
                placeholder="Search for our product here"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <img
                      width="24px"
                      height="24px"
                      src="/iconamoonsearchthin.svg"
                    />
                  ),
                }}
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-root": {
                    height: "61px",
                    backgroundColor: "#d9d9d9",
                    paddingRight: "47px",
                    borderRadius: "15px",
                  },
                  "& .MuiInputBase-input": { color: "#000" },
                }}
              />
              <div className="bg-gainsboro-100 flex flex-row items-start justify-start pt-[22px] pb-[19px] pr-9 pl-[41px]">
                <div className="h-[61px] w-[100px] relative bg-gainsboro-100 hidden" />
                <div className="relative tracking-[0.03em] font-light inline-block min-w-[23px] z-[1]">
                  Go
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[42px] box-border max-w-full text-5xl text-white mq1275:pl-[21px] mq1275:box-border">
        <div className="w-[1240px] flex flex-col items-start justify-start gap-[48px] max-w-full mq750:gap-[24px]">
          <div className="w-[1144px] flex flex-row items-start justify-center pt-0 px-5 pb-6 box-border max-w-full">
            <h2 className="m-0 relative text-inherit tracking-[0.03em] font-extrabold font-inherit mq450:text-lgi">
              PRODUCT CATEGORIES
            </h2>
          </div>
          <ProductCards />
          <FrameComponent1 />
        </div>
      </div>
      <FrameComponent />
    </div>
  );
};

export default WebVeiw;
