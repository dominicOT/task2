import PropTypes from "prop-types";

const FrameComponent = ({ className = "" }) => {
  return (
    <div
      className={`w-[1216px] flex flex-row items-start justify-start py-0 px-[5px] box-border max-w-full text-left text-13xl text-white font-inter ${className}`}
    >
      <div className="flex-1 bg-gray-500 flex flex-row flex-wrap items-start justify-start pt-3.5 pb-[13px] pr-[22px] pl-[100px] box-border gap-[27px] max-w-full lg:pl-[50px] lg:box-border mq750:pl-[25px] mq750:box-border">
        <div className="h-[100px] w-[1206px] relative bg-gray-500 hidden max-w-full" />
        <div className="w-[79px] [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] flex flex-row items-start justify-start z-[1]">
          <div className="h-[73px] flex-1 relative">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-full h-full" />
            <img
              className="absolute top-[7.3px] left-[7.9px] w-[71.1px] h-[65.7px] object-contain z-[1]"
              alt=""
              src="/circuit@2x.png"
            />
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[9px] pb-0 pr-5 pl-0 box-border min-w-[487px] max-w-full mq1050:min-w-full">
          <a className="[text-decoration:none] relative tracking-[0.03em] font-extrabold text-[inherit] inline-block max-w-full z-[1] mq1050:text-7xl mq450:text-lgi">
            Electronics Essentials
          </a>
        </div>
        <div className="flex flex-col items-start justify-start pt-[9px] px-0 pb-0">
          <a className="[text-decoration:none] relative tracking-[0.03em] font-extrabold text-[inherit] z-[1] mq1050:text-7xl mq450:text-lgi">
            Get support
          </a>
        </div>
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
