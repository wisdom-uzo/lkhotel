import CardContainer2 from "./card-container2";
import CardContainer1 from "./card-container1";

const FormContainer = () => {
  return (
    <div className="md:px-[10rem] px-5 pt-10 text-left text-5xl text-darkslateblue font-poppins">
     
     
      <div className=" font-medium">
        Apartments with kitchen set
      </div>

      <div className="mt-10 grid grid-cols-4 w-full gap-5">


      <CardContainer2
        imageDimensions="/rectangle-313@2x.png"
        locationDescription="PS Wood"
        locationName="Depok, Indonesia"
        propLeft="1px"
      />
      <CardContainer2
        imageDimensions="/rectangle-314@2x.png"
        locationDescription="One Five"
        locationName="Jakarta, Indonesia"
        propLeft="293px"
      />
      <CardContainer1
        locationName="/rectangle-315@2x.png"
        placeImageUrl="Minimal"
        locationDescription="Bogor, Indonesia"
        propLeft="586px"
      />
      <CardContainer2
        imageDimensions="/rectangle-316@2x.png"
        locationDescription="Stays Home"
        locationName="Wonosobo, Indonesia"
        propLeft="879px"
      />
    </div>

    </div>
  );
};

export default FormContainer;
