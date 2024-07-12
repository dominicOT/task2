import PropTypes from "prop-types";
import WebVeiw from "../pages";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div
      className={`w-[1414px] flex flex-row items-start justify-center pt-0 px-5 pb-[119px] box-border max-w-full ${className}`}
    >
      <header className="flex flex-row items-start justify-start gap-[47px] max-w-full mq750:gap-[23px]">
        <div className="w-[79px] [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] flex flex-row items-start justify-start">
          <div className="h-[73px] flex-1 relative">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-full h-full" />
            <img
              className="absolute top-[7.3px] left-[7.9px] w-[71.1px] h-[65.7px] object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/circuit@2x.png"
            />
          </div>
        </div>
        <nav className="m-0 w-[791px] flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border max-w-full mq1275:hidden">
          <nav className="m-0 w-[373px] flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-base text-black font-inter">
            <a className="[text-decoration:none] relative tracking-[0.03em] font-extrabold text-[inherit] inline-block min-w-[48px]">
              Disco
            </a>
            <a className="[text-decoration:none] relative tracking-[0.03em] font-extrabold text-[inherit] inline-block min-w-[64px]">
              Explore
            </a>
            <a className="[text-decoration:none] relative tracking-[0.03em] font-extrabold text-[inherit] inline-block min-w-[42px]">
              Read
            </a>
            <a className="[text-decoration:none] relative tracking-[0.03em] font-extrabold text-[inherit] inline-block min-w-[72px]">
              Connect
            </a>
          </nav>
        </nav>
        <div className="w-[254px] flex flex-col items-start justify-start pt-[15px] px-0 pb-0 box-border">
          <img
            className="self-stretch h-[27px] relative max-w-full overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/group-62.svg"
          />
        </div>
      </header>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
