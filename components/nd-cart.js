import PropTypes from "prop-types";

const NdCart = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[818px] left-[119px] w-[1201px] h-[457px] text-left text-5xl text-black font-inter ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[1201px] h-[457px]" />
      <div className="absolute top-[25px] left-[34px] w-[1124px] h-[394px]">
        <div className="absolute top-[0px] left-[0px] w-[1123px] h-[174px]">
          <img
            className="absolute top-[0px] left-[45px] rounded-mini w-[150px] h-[174px] object-cover"
            alt=""
            src="/rectangle-261@2x.png"
          />
          <div className="absolute top-[53px] left-[252px] w-[155px] h-[63px]">
            <div className="absolute top-[0px] left-[0px] tracking-[0.03em] font-semibold">
              Standing fan
            </div>
            <div className="absolute top-[34px] left-[5px] tracking-[0.03em] font-semibold">
              black
            </div>
          </div>
          <div className="absolute top-[108px] left-[1028px] w-[95px] h-6">
            <img
              className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
              alt=""
              src="/uiwdelete1.svg"
            />
            <img
              className="absolute top-[0px] left-[71px] w-6 h-6 overflow-hidden"
              alt=""
              src="/pajamasfileadditionsolid.svg"
            />
            <img
              className="absolute top-[0px] left-[36px] w-6 h-6 overflow-hidden"
              alt=""
              src="/mynauione.svg"
            />
          </div>
          <img
            className="absolute top-[53px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
            src="/teenyiconstickcirclesolid.svg"
          />
          <img
            className="absolute top-[59px] left-[1075px] w-6 h-6 overflow-hidden"
            alt=""
            src="/phheartthin.svg"
          />
        </div>
        <div className="absolute top-[220px] left-[0px] w-[1124px] h-[174px]">
          <div className="absolute top-[100px] left-[252px] tracking-[0.03em] font-semibold">{`white `}</div>
          <div className="absolute top-[63px] left-[250px] tracking-[0.03em] font-semibold">{`Wall Socket `}</div>
          <img
            className="absolute top-[0px] left-[46px] rounded-mini w-[150px] h-[174px] object-cover"
            alt=""
            src="/rectangle-271@2x.png"
          />
          <img
            className="absolute top-[71px] left-[0px] w-6 h-6 overflow-hidden"
            alt=""
            src="/teenyiconstickcirclesolid.svg"
          />
          <div className="absolute top-[122px] left-[1025px] w-[99px] h-[29px]">
            <img
              className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
              alt=""
              src="/uiwdelete1.svg"
            />
            <img
              className="absolute top-[0px] left-[75px] w-6 h-6 overflow-hidden"
              alt=""
              src="/pajamasfileadditionsolid.svg"
            />
            <div className="absolute top-[0px] left-[34px] tracking-[0.03em] font-semibold">
              10
            </div>
          </div>
          <img
            className="absolute top-[52px] left-[1075px] w-6 h-6 overflow-hidden"
            alt=""
            src="/phheartthin.svg"
          />
        </div>
      </div>
    </div>
  );
};

NdCart.propTypes = {
  className: PropTypes.string,
};

export default NdCart;
