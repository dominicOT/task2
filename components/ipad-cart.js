import PropTypes from "prop-types";

const IpadCart = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[0px] left-[46px] w-[1074px] h-[174px] text-left text-5xl text-black font-inter ${className}`}
    >
      <img
        className="absolute top-[0px] left-[0px] rounded-3xs w-[150px] h-[174px] object-cover"
        alt=""
        src="/rectangle-251@2x.png"
      />
      <div className="absolute top-[57px] left-[188px] w-[165px] h-[61px]">
        <div className="absolute top-[32px] left-[7px] tracking-[0.03em] font-semibold">
          white/black
        </div>
        <div className="absolute top-[0px] left-[0px] tracking-[0.03em] font-semibold">{`Ipad 4 inches `}</div>
      </div>
      <img
        className="absolute top-[47px] left-[1027px] rounded-3xs w-6 h-6 overflow-hidden"
        alt=""
        src="/clarityheartline.svg"
      />
      <div className="absolute top-[104px] left-[979px] w-[95px] h-[29px]">
        <img
          className="absolute top-[2px] left-[0px] rounded-3xs w-6 h-6 overflow-hidden"
          alt=""
          src="/uiwdelete.svg"
        />
        <img
          className="absolute top-[2px] left-[71px] rounded-3xs w-6 h-6 overflow-hidden"
          alt=""
          src="/pajamasfileadditionsolid.svg"
        />
        <div className="absolute top-[0px] left-[39px] tracking-[0.03em] font-semibold">
          8
        </div>
      </div>
    </div>
  );
};

IpadCart.propTypes = {
  className: PropTypes.string,
};

export default IpadCart;
