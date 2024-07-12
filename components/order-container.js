import PropTypes from "prop-types";

const OrderContainer = ({ className = "" }) => {
  return (
    <div
      className={`flex flex-row items-start justify-start py-0 pr-px pl-[5px] box-border max-w-full text-left text-13xl text-black font-inter ${className}`}
    >
      <div className="w-[1236px] flex flex-col items-end justify-start gap-[25px] max-w-full">
        <div className="w-[1191px] flex flex-row items-start justify-end py-0 px-[55px] box-border max-w-full lg:pl-[27px] lg:pr-[27px] lg:box-border">
          <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
            <div className="relative tracking-[0.03em] font-extrabold mq1050:text-7xl mq450:text-lgi">
              Your Order
            </div>
            <div className="flex flex-row items-start justify-start gap-[35px]">
              <div className="flex flex-col items-start justify-start pt-[5px] px-0 pb-0">
                <img
                  className="w-6 h-6 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/twemojiflagnigeria.svg"
                />
              </div>
              <div className="relative tracking-[0.03em] font-extrabold mq1050:text-7xl mq450:text-lgi">{`Nigeria >>`}</div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[5px] relative box-border border-t-[5px] border-solid border-silver" />
      </div>
    </div>
  );
};

OrderContainer.propTypes = {
  className: PropTypes.string,
};

export default OrderContainer;
