import PropTypes from "prop-types";

const LastCart = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[1799px] left-[120px] w-[1201px] h-[236px] text-left text-5xl text-gray-300 font-inter ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] rounded-mini bg-white w-[1201px] h-[236px]" />
      <div className="absolute top-[45px] left-[29px] w-[1136px] h-[169.5px]">
        <div className="absolute top-[0px] left-[68px] w-[150px] h-[169.5px]">
          <div className="absolute top-[2.6px] left-[0px] rounded-mini bg-whitesmoke-100 w-[150px] h-[166.9px]" />
          <img
            className="absolute top-[0px] left-[0px] rounded-mini w-[150px] h-[130.5px] object-cover"
            alt=""
            src="/rectangle-301@2x.png"
          />
        </div>
        <div className="absolute top-[56px] left-[251px] tracking-[0.03em] font-semibold">
          Iphone cord
        </div>
        <img
          className="absolute top-[59px] left-[0px] w-6 h-6 overflow-hidden"
          alt=""
          src="/teenyiconstickcirclesolid.svg"
        />
        <div className="absolute top-[83px] left-[1037px] w-[99px] h-[29px] text-black">
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
          className="absolute top-[35px] left-[1075px] w-6 h-6 overflow-hidden"
          alt=""
          src="/phheartthin.svg"
        />
      </div>
    </div>
  );
};

LastCart.propTypes = {
  className: PropTypes.string,
};

export default LastCart;
