import PropTypes from "prop-types";

const CartHeading = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[144px] left-[114px] w-[1212px] h-[100px] text-left text-base text-black font-inter ${className}`}
    >
      <div className="absolute top-[0px] left-[0px] rounded-mini bg-gainsboro-200 w-[1212px] h-[100px]" />
      <img
        className="absolute top-[35px] left-[1051px] w-[110px] h-7"
        alt=""
        src="/group-115.svg"
      />
      <div className="absolute top-[27px] left-[378px] w-[383px] h-[42px]">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-gray-2100 w-[383px] h-[42px]" />
        <div className="absolute top-[14px] left-[124px] font-light">
          ship to nigeria
        </div>
        <img
          className="absolute top-[11px] left-[39px] w-[21px] h-[21px] overflow-hidden"
          alt=""
          src="/systemuiconslocation.svg"
        />
      </div>
      <div className="absolute top-[31px] left-[24px] w-[141px] h-[35px] text-5xl">
        <div className="absolute top-[3px] left-[39px] font-extrabold">
          Cart(10)
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-[35px] h-[35px] overflow-hidden"
          alt=""
          src="/bix.svg"
        />
      </div>
    </div>
  );
};

CartHeading.propTypes = {
  className: PropTypes.string,
};

export default CartHeading;
