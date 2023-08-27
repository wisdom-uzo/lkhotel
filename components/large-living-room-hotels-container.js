import CardContainer2 from "./card-container2";
import CardContainer1 from "./card-container1";

const LargeLivingRoomHotelsContainer = () => {
  return (
    <div className="md:px-[10rem] px-5 pt-10  text-left text-5xl text-darkslateblue font-poppins">

      <div className="font-medium">
        Hotels with large living room
      </div>

    <div className="mt-10 grid grid-cols-4 w-full gap-5">
    {/* <div className="mt-10 flex flex-col items-center md:flex-row gap-3 flex-wrap justify-between"> */}

    <CardContainer2
        imageDimensions="/rectangle-39@2x.png"
        locationDescription="Green Park"
        locationName="Tangerang, Indonesia"
        propLeft="1px"
      />
      <CardContainer2
        imageDimensions="/rectangle-310@2x.png"
        locationDescription="Podo Wae"
        locationName="Madiun, Indonesia"
        propLeft="293px"
      />
      <CardContainer2
        imageDimensions="/rectangle-311@2x.png"
        locationDescription="Silver Rain"
        locationName="Bandung, Indonesia"
        propLeft="586px"
      />
      <CardContainer1
        locationName="/rectangle-312@2x.png"
        placeImageUrl="Cashville"
        locationDescription="Kemang, Indonesia"
        propLeft="879px"
      />
      
    </div>
     
    </div>
  );
};

export default LargeLivingRoomHotelsContainer;
