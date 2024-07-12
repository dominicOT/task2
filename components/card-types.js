import { useMemo } from "react";
import PropTypes from "prop-types";

const CardTypes = ({
  className = "",
  ipad,
  socketFanCards,
  propWidth,
  propPosition,
  propTop,
  propLeft,
  propHeight,
}) => {
  const cardTypesStyle = useMemo(() => {
    return {
      width: propWidth,
      position: propPosition,
      top: propTop,
      left: propLeft,
      height: propHeight,
    };
  }, [propWidth, propPosition, propTop, propLeft, propHeight]);

  return (
    <div
      className={`w-[207px] rounded-mini bg-whitesmoke-100 flex flex-col items-start justify-end pt-[210px] px-[15px] pb-[5px] box-border z-[3] text-left text-sm text-black font-inter ${className}`}
      style={cardTypesStyle}
    >
      <div className="w-[207px] h-[257px] relative rounded-mini bg-whitesmoke-100 hidden" />
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-px">
        <div className="flex-1 flex flex-row items-start justify-between gap-[20px]">
          <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <div className="relative tracking-[0.03em] font-semibold inline-block min-w-[32px] z-[4]">
              {ipad}
            </div>
          </div>
          <img
            className="h-6 w-6 relative rounded-mini overflow-hidden shrink-0 min-h-[24px] z-[4]"
            alt=""
            src="/ipad-card.svg"
          />
        </div>
      </div>
      <div className="relative tracking-[0.03em] font-semibold inline-block min-w-[66px] whitespace-nowrap z-[4]">
        {socketFanCards}
      </div>
    </div>
  );
};

CardTypes.propTypes = {
  className: PropTypes.string,
  ipad: PropTypes.string,
  socketFanCards: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propPosition: PropTypes.any,
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propHeight: PropTypes.any,
};

export default CardTypes;
