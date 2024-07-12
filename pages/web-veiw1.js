import CartHeading from "../components/cart-heading";
import GroupComponent2 from "../components/group-component2";
import IpadCart from "../components/ipad-cart";
import NdCart from "../components/nd-cart";
import RdCart from "../components/rd-cart";
import LastCart from "../components/last-cart";
import Footer from "../components/footer";

const WebVeiw1 = () => {
  return (
    <div className="w-full relative [background:linear-gradient(rgba(244,_242,_242,_0.2),_rgba(244,_242,_242,_0.2)),_linear-gradient(180deg,_#fff,_#999_81%)] h-[2295px] overflow-hidden text-left text-5xl text-black font-inter">
      <div className="absolute top-[79px] left-[128px] text-13xl tracking-[0.08em] font-extrabold">
        SHOPPING CART
      </div>
      <div className="absolute top-[79px] left-[128px] text-13xl tracking-[0.08em] font-extrabold">
        SHOPPING CART
      </div>
      <CartHeading />
      <div className="absolute top-[268px] left-[148px] w-[220px] h-6 text-base">
        <div className="absolute top-[0px] left-[0px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-6 h-6">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-white w-6 h-6" />
          <img
            className="absolute top-[2.4px] left-[2.4px] w-[21.6px] h-[21.6px] object-cover"
            alt=""
            src="/circuit1@2x.png"
          />
        </div>
        <b className="absolute top-[1px] left-[32px] tracking-[0.03em]">{`electronic essentials >`}</b>
      </div>
      <div className="absolute top-[313px] left-[120px] w-[1201px] h-[457px]">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[1201px] h-[457px]" />
        <GroupComponent2 />
        <div className="absolute top-[229px] left-[28px] w-[1120px] h-[174px]">
          <IpadCart />
          <img
            className="absolute top-[74px] left-[0px] rounded-3xs w-6 h-6 overflow-hidden"
            alt=""
            src="/teenyiconstickcirclesolid.svg"
          />
        </div>
      </div>
      <NdCart />
      <RdCart />
      <LastCart />
      <div className="absolute top-[1292px] left-[188px] tracking-[0.03em] font-semibold text-gray-700">{`Light item>`}</div>
      <div className="absolute top-[785px] left-[154px] tracking-[0.03em] font-semibold text-gray-600">{`promo item>`}</div>
      <div className="absolute top-[2121px] left-[0px] w-[1440px] h-[102px]">
        <div className="absolute top-[2px] left-[0px] bg-white w-[1440px] h-[100px]" />
        <img
          className="absolute h-[17.65%] w-[1.25%] top-[50.98%] right-[85.76%] bottom-[31.37%] left-[12.99%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/vector1.svg"
        />
        <div className="absolute top-[46px] left-[242px] tracking-[0.03em] font-semibold inline-block w-8 [text-shadow:1px_0_0_#000,_0_1px_0_#000,_-1px_0_0_#000,_0_-1px_0_#000]">
          All
        </div>
        <div className="absolute top-[50px] left-[1035px] tracking-[0.03em] font-semibold inline-block w-[88px]">
          $23.00
        </div>
        <div className="absolute top-[0px] left-[1162px] bg-gray-1200 w-[275px] h-[100px]" />
        <b className="absolute top-[29px] left-[1188px] tracking-[0.03em] inline-block text-white w-[163px]">
          Checkout (6)
        </b>
      </div>
      <Footer />
    </div>
  );
};

export default WebVeiw1;
