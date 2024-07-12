import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-end py-0 px-8 box-border max-w-full text-left text-base text-black font-inter ${className}`}
    >
      <div className="w-[412px] rounded-xl bg-gainsboro-100 flex flex-row items-start justify-between pt-[17px] pb-5 pr-4 pl-[57px] box-border max-w-full gap-[20px] mq450:flex-wrap mq450:pl-5 mq450:box-border">
        <div className="h-[66px] w-[412px] relative rounded-xl bg-gainsboro-100 hidden max-w-full" />
        <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
          <div className="relative tracking-[0.03em] font-light z-[1]">
            How can i help ?
          </div>
        </div>
        <div className="flex flex-row items-end justify-start">
          <div className="h-7 w-2 relative">
            <img
              className="absolute top-[20px] left-[0px] w-2 h-2 overflow-hidden z-[1]"
              loading="lazy"
              alt=""
              src="/oistar.svg"
            />
            <img
              className="absolute top-[0px] left-[0px] w-2 h-2 overflow-hidden z-[1]"
              loading="lazy"
              alt=""
              src="/oistar.svg"
            />
          </div>
          <img
            className="h-6 w-6 relative overflow-hidden shrink-0 z-[1]"
            loading="lazy"
            alt=""
            src="/oistar-2.svg"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
