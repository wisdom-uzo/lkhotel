import { useMemo } from "react";

const PriceCard = ({
  listingPrice,
  listingDescription,
  propHeight,
  propWidth,
  propTop,
  propRight,
  propBottom,
  propLeft,
}) => {
  const badgeStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
      top: propTop,
      right: propRight,
      bottom: propBottom,
      left: propLeft,
    };
  }, [propHeight, propWidth, propTop, propRight, propBottom, propLeft]);

  return (
    <div
      className="absolute h-[8.7%] w-[49.86%] top-[0%] right-[0%] bottom-[91.3%] left-[50.14%] rounded-tl-none rounded-tr-mini rounded-br-none rounded-bl-mini bg-deeppink flex flex-col py-1.5 px-2.5 box-border items-start justify-start text-center text-base text-white font-poppins"
      style={badgeStyle}
    >
      <div className="relative leading-[170%] inline-block w-[156px]">
        <span className="font-medium">{listingPrice}</span>
        <span className="font-light">{listingDescription}</span>
      </div>
    </div>
  );
};

export default PriceCard;
