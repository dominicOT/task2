import PropTypes from "prop-types";

const RdCart = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[1324px] left-[119px] w-[1201px] h-[457px] text-left text-5xl text-black font-inter ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] rounded-mini bg-white w-[1201px] h-[457px]" />
      <div className="absolute top-[32px] left-[24px] w-[1138px] h-[174px]">
        <div className="absolute top-[90px] left-[250px] tracking-[0.03em] font-semibold">
          Camera
        </div>
        <div className="absolute top-[130px] left-[251px] tracking-[0.03em] font-semibold">
          Black and blue
        </div>
        <img
          className="absolute top-[0px] left-[68px] rounded-mini w-[150px] h-[174px] object-cover"
          alt=""
          src="/rectangle-281@2x.png"
        />
        <img
          className="absolute top-[87px] left-[1080px] w-6 h-6 overflow-hidden"
          alt=""
          src="/phheartthin.svg"
        />
        <div className="absolute top-[136px] left-[1039px] w-[99px] h-[29px]">
          <img
            className="absolute top-[1px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
            src="/uiwdelete1.svg"
          />
          <img
            className="absolute top-[1px] left-[75px] w-6 h-6 overflow-hidden"
            alt=""
            src="/pajamasfileadditionsolid.svg"
          />
          <div className="absolute top-[0px] left-[42px] tracking-[0.03em] font-semibold">
            7
          </div>
        </div>
        <img
          className="absolute top-[103px] left-[0px] w-6 h-6 overflow-hidden"
          alt=""
          src="/teenyiconstickcirclesolid.svg"
        />
      </div>
      <div className="absolute top-[130.6px] left-[24px] w-[1135px] h-[294.4px]">
        <div className="absolute top-[170.4px] left-[250px] tracking-[0.03em] font-semibold">
          <p className="m-0">Speakers</p>
          <p className="m-0">{`white `}</p>
        </div>
        <img
          className="absolute top-[120.4px] left-[68px] rounded-mini w-[150px] h-[174px] object-cover"
          alt=""
          src="/rectangle-291@2x.png"
        />
        <img
          className="absolute top-[175.4px] left-[0px] w-6 h-6 overflow-hidden"
          alt=""
          src="/teenyiconstickcirclesolid1.svg"
        />
        <div className="absolute top-[178.4px] left-[1036px] w-[99px] h-[29px]">
          <img
            className="absolute top-[1px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
            src="/uiwdelete1.svg"
          />
          <img
            className="absolute top-[1px] left-[75px] w-6 h-6 overflow-hidden"
            alt=""
            src="/pajamasfileadditionsolid.svg"
          />
          <div className="absolute top-[0px] left-[42px] tracking-[0.03em] font-semibold">
            4
          </div>
        </div>
        <img
          className="absolute h-[5.37%] w-[1.79%] top-[0%] right-[2.44%] bottom-[94.63%] left-[95.77%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector.svg"
        />
      </div>
    </div>
  );
};

RdCart.propTypes = {
  className: PropTypes.string,
};

export default RdCart;
