import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent = ({
  className = "",
  wireAccessoriesImage,
  wiresAccessories,
  view,
  propAlignSelf,
  propFlex,
  propMinWidth,
}) => {
  const groupDiv1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propFlex, propMinWidth]);

  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start pt-[76px] pb-[69px] pr-16 pl-[31px] relative gap-[24px] z-[3] text-left text-5xl text-black font-inter mq450:pr-5 mq450:box-border ${className}`}
      style={groupDiv1Style}
    >
      <img
        className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-mini max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src={wireAccessoriesImage}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[5px]">
        <h2 className="m-0 relative text-inherit tracking-[0.03em] font-bold font-inherit z-[1] mq450:text-lgi">
          {wiresAccessories}
        </h2>
        <div className="self-stretch flex flex-row items-start justify-end py-0 px-5 text-base">
          <div className="relative tracking-[0.03em] z-[1]">
            upgrade your tools
          </div>
        </div>
      </div>
      <div className="flex flex-row items-start justify-end py-0 px-[21px] text-base">
        <div className="rounded-mini bg-whitesmoke-200 flex flex-row items-start justify-start pt-6 px-14 pb-5 z-[1]">
          <div className="h-[63px] w-[154px] relative rounded-mini bg-whitesmoke-200 hidden" />
          <div className="relative tracking-[0.03em] inline-block min-w-[39px] z-[2]">
            {view}
          </div>
        </div>
      </div>
    </div>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
  wireAccessoriesImage: PropTypes.string,
  wiresAccessories: PropTypes.string,
  view: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
};

export default GroupComponent;
