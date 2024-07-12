import { useMemo } from "react";
import PropTypes from "prop-types";

const GroupComponent1 = ({
  className = "",
  rectangle7,
  television,
  propPadding,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`h-[243px] flex flex-col items-start justify-start pt-0 px-0 pb-[38px] box-border gap-[21px] text-left text-sm text-white font-inter ${className}`}
      style={groupDivStyle}
    >
      <img
        className="self-stretch h-[205px] relative rounded-mini max-w-full overflow-hidden shrink-0 object-cover"
        loading="lazy"
        alt=""
        src={rectangle7}
      />
      <div className="flex flex-row items-start justify-start py-0 pr-[51px] pl-[55px]">
        <div className="relative tracking-[0.03em] font-extrabold inline-block min-w-[76px] shrink-0">
          {television}
        </div>
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,
  rectangle7: PropTypes.string,
  television: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default GroupComponent1;
