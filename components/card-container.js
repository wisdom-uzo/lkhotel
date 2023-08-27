import { useMemo } from "react";
import PriceCard from "./price-card";

const CardContainer = ({
  listingImageUrl,
  componentName,
  price,
  location1,
  propLeft,
}) => {
  const featuredStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className="relative w-[361px] h-[215px] text-left text-xl text-white font-poppins col-span-2 md:col-span-1"
      style={featuredStyle}
    >
      <img
        className="absolute top-[0px] left-[0px] rounded-mini w-[361px] h-[215px] object-cover"
        alt=""
        src={listingImageUrl}
      />
      <div className="absolute top-[0px] left-[0px] rounded-mini [background:linear-gradient(180.1deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.5))] w-[361px] h-[215px]" />
      <div className="absolute top-[138px] left-[24px]">{componentName}</div>
      <PriceCard
        listingPrice="$62"
        listingDescription=" per night"
        propHeight="40px"
        propWidth="180px"
        propTop="0px"
        propRight="unset"
        propBottom="unset"
        propLeft="181px"
      />
      <div className="absolute top-[168px] left-[24px] text-mini font-light">
        {location1}
      </div>
    </div>
  );
};

export default CardContainer;
