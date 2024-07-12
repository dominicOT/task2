import PropTypes from "prop-types";

const GroupComponent2 = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[29px] left-[30px] w-[1099px] h-[174px] text-left text-5xl text-black font-inter ${className}`}
    >
      <img
        className="absolute top-[0px] left-[44px] rounded-3xs w-[150px] h-[174px] object-cover"
        alt=""
        src="/rectangle-71@2x.png"
      />
      <div className="absolute top-[38px] left-[232px] w-[269px] h-[61px]">
        <div className="absolute top-[32px] left-[7px] tracking-[0.03em] font-semibold">
          white/black
        </div>
        <div className="absolute top-[0px] left-[0px] tracking-[0.03em] font-semibold">{`Television 448 inches `}</div>
      </div>
      <img
        className="absolute top-[25px] left-[1073px] rounded-3xs w-6 h-6 overflow-hidden"
        alt=""
        src="/clarityheartline.svg"
      />
      <div className="absolute top-[82px] left-[1004px] w-[95px] h-6">
        <img
          className="absolute top-[0px] left-[0px] rounded-3xs w-6 h-6 overflow-hidden"
          alt=""
          src="/uiwdelete.svg"
        />
        <img
          className="absolute top-[0px] left-[71px] rounded-3xs w-6 h-6 overflow-hidden"
          alt=""
          src="/pajamasfileadditionsolid.svg"
        />
        <img
          className="absolute top-[0px] left-[36px] rounded-3xs w-6 h-6 overflow-hidden"
          alt=""
          src="/mynauione.svg"
        />
      </div>
      <img
        className="absolute top-[40px] left-[0px] rounded-3xs w-6 h-6 overflow-hidden"
        alt=""
        src="/teenyiconstickcirclesolid.svg"
      />
    </div>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent2;
