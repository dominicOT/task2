import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <div
      className={`absolute top-[2238px] left-[191px] w-[1067px] h-[54px] text-left text-sm text-black font-inter ${className}`}
    >
      <div className="absolute top-[5px] left-[0px] w-10 h-[49px]">
        <img
          className="absolute top-[0px] left-[6px] w-6 h-6 overflow-hidden"
          alt=""
          src="/carbonhome.svg"
        />
        <div className="absolute top-[32px] left-[0px] tracking-[0.03em] font-semibold">
          home
        </div>
      </div>
      <div className="absolute top-[5px] left-[223px] w-[76px] h-[49px]">
        <img
          className="absolute top-[0px] left-[42px] w-6 h-6 overflow-hidden"
          alt=""
          src="/arcticonsreverseimagesearch.svg"
        />
        <div className="absolute top-[32px] left-[0px] tracking-[0.03em] font-semibold">
          categories
        </div>
      </div>
      <div className="absolute top-[5px] left-[524px] w-[34px] h-11">
        <img
          className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
          alt=""
          src="/phdressthin.svg"
        />
        <div className="absolute top-[27px] left-[4px] tracking-[0.03em] font-semibold">
          new
        </div>
      </div>
      <div className="absolute top-[5px] left-[781px] w-[29px] h-11">
        <img
          className="absolute top-[0px] left-[2px] w-6 h-6 overflow-hidden"
          alt=""
          src="/iconoircart.svg"
        />
        <img
          className="absolute h-[38.64%] w-[68.97%] top-[4.55%] right-[17.24%] bottom-[56.82%] left-[13.79%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector2.svg"
        />
        <div className="absolute top-[27px] left-[0px] tracking-[0.03em] font-semibold">
          cart
        </div>
      </div>
      <div className="absolute top-[0px] left-[1042px] w-[25px] h-[49px]">
        <img
          className="absolute top-[0px] left-[0px] w-6 h-6 overflow-hidden"
          alt=""
          src="/weuimefilled.svg"
        />
        <div className="absolute top-[32px] left-[3px] tracking-[0.03em] font-semibold">
          me
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
