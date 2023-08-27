import { useMemo } from "react";

const CardContainer2 = ({
  imageDimensions,
  locationDescription,
  locationName,
  propLeft,
}) => {
  const houseBackyard1Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className=" col-span-4 md:col-span-2 lg:col-span-1 h-[249px] text-left text-xl text-darkslateblue font-poppins"
      style={houseBackyard1Style}
    >
      <img
        className="rounded-mini w-full h-[180px] object-cover"
        alt=""
        src={imageDimensions}
      />
      <div className="">
        {locationDescription}
      </div>
      <div className=" text-mini font-light text-darkgray">
        {locationName}
      </div>
    </div>
  );
};

export default CardContainer2;
