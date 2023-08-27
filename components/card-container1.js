import { useMemo } from "react";
import PriceCard from "./price-card";

const CardContainer1 = ({
  locationName,
  placeImageUrl,
  locationDescription,
  propLeft,
}) => {
  const houseBackyardStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className=" col-span-4 md:col-span-2 lg:col-span-1 h-[249px] text-left text-xl text-darkslateblue font-poppins"
      style={houseBackyardStyle}
    >
      <img
        className=" rounded-mini w-full h-[180px] object-cover"
        alt=""
        src={locationName}
      />
      {/* <PriceCard
        listingPrice="Popular"
        listingDescription=" Choice"
        propHeight="40px"
        propWidth="180px"
        propTop="0px"
        propRight="unset"
        propBottom="unset"
        propLeft="83px"
      /> */}
      <div className="">{placeImageUrl}</div>
      <div className="text-mini font-light text-darkgray">
        {locationDescription}
      </div>
    </div>
  );
};

export default CardContainer1;
