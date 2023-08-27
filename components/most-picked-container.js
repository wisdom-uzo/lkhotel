import PriceCard from "./price-card";
import CardContainer from "./card-container";

const MostPickedContainer = () => {
  return (
    <div className="w-full text-left text-xl text-white font-poppins">
     
      <div className="text-5xl font-medium text-darkslateblue">
        Most Picked
      </div>



      <div className=" relative w-[361px] h-[460px] text-base">
        <img
          className=" rounded-mini w-[361px] h-[460px] object-cover"
          alt=""
          src="/rectangle-3@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] rounded-mini [background:linear-gradient(180.1deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.5))] w-[361px] h-[460px]" />
        <PriceCard listingPrice="$50" listingDescription=" per night" />
        <div className="absolute top-[383px] left-[24px] text-xl">
          Blue Origin Fams
        </div>
        <div className="absolute top-[413px] left-[24px] text-mini font-light">
          Jakarta, Indonesia
        </div>
      </div>

<div className="grid grid-cols-2">

      <div className="relative w-[361px] h-[215px] col-span-2 md:col-span-1">
        <img
          className="absolute top-[0px] left-[0px] rounded-mini w-[361px] h-[215px] object-cover"
          alt=""
          src="/rectangle-31@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] rounded-mini [background:linear-gradient(180.1deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.5))] w-[361px] h-[215px]" />
        <div className="absolute top-[138px] left-[24px]">Ocean Land</div>
        <div className="absolute top-[168px] left-[24px] text-mini font-light">
          Bandung, Indonesia
        </div>
        <PriceCard
          listingPrice="$22"
          listingDescription=" per night"
          propHeight="40px"
          propWidth="180px"
          propTop="0px"
          propRight="unset"
          propBottom="unset"
          propLeft="181px"
        />
      </div>

      <div className=" relative w-[361px] h-[215px] col-span-2 md:col-span-1">
        <img
          className="absolute top-[0px] left-[0px] rounded-mini w-[361px] h-[215px] object-cover"
          alt=""
          src="/rectangle-32@2x.png"
        />
        <div className="absolute top-[0px] left-[0px] rounded-mini [background:linear-gradient(180.1deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.5))] w-[361px] h-[215px]" />
        <PriceCard
          listingPrice="$856"
          listingDescription=" per night"
          propHeight="40px"
          propWidth="180px"
          propTop="0px"
          propRight="unset"
          propBottom="unset"
          propLeft="181px"
        />
        <div className="absolute top-[138px] left-[24px]">Stark House</div>
        <div className="absolute top-[168px] left-[24px] text-mini font-light">
          Malang, Indonesia
        </div>
      </div>


      <CardContainer
        listingImageUrl="/rectangle-33@2x.png"
        componentName="Vinna Vill"
        price="$62"
        location1="Malang, Indonesia"
      />
      <CardContainer
        listingImageUrl="/rectangle-34@2x.png"
        componentName="Bobox"
        price="$72"
        location1="Medan, Indonesia"
        propLeft="781px"
      />
    </div>
    </div>
  );
};

export default MostPickedContainer;
