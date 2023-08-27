import CardContainer1 from "./card-container1";
import CardContainer2 from "./card-container2";

const BeautyBackyardCard = () => {
  return (
    <div className="md:px-[10rem] px-5 pt-10  w-ful text-left text-xl text-darkslateblue font-poppins">
     
      <div className="text-5xl font-medium">
        Houses with beauty backyard
     
      </div>
     
      <div className="mt-10 grid grid-cols-4 w-full gap-5">

      <CardContainer1
        locationName="/rectangle-35@2x.png"
        placeImageUrl="Tabby Town"
        locationDescription="Gunung Batu, Indonesia"
      />
      <CardContainer2
        imageDimensions="/rectangle-36@2x.png"
        locationDescription="Anggana"
        locationName="Bogor, Indonesia"
      />
      <CardContainer2
        imageDimensions="/rectangle-37@2x.png"
        locationDescription="Seattle Rain"
        locationName="Jakarta, Indonesia"
        propLeft="586px"
      />
      <CardContainer2
        imageDimensions="/rectangle-38@2x.png"
        locationDescription="Wodden Pit"
        locationName="Wonosobo, Indonesia"
        propLeft="879px"
      />

    </div>
    </div>
  );
};

export default BeautyBackyardCard;
