import { useCallback } from "react";
import PrimaryButton from "./primary-button";

const VacationForm = () => {
  const onBtnPrimaryContainer1Click = useCallback(() => {
    // Please sync "Home Page Scrolled" to the project
  }, []);

  return (
    <div className="col-span-2 md:col-span-1 relative text-left text-base text-darkslateblue font-poppins">
      <b className=" text-23xl">
        <p className="m-0">Forget Busy Work,</p>
        <p className="m-0">Start Next Vacation</p>
      </b>
      <div className="leading-[170%] font-light text-darkgray">
        <p className="m-0">{`We provide what you need to enjoy your `}</p>
        <p className="m-0">{`holiday with family. Time to make another `}</p>
        <p className="m-0">memorable moments.</p>
      </div>
      <PrimaryButton
        ctaButtonText="Show Me Now"
        onBtnPrimaryContainer1Click={onBtnPrimaryContainer1Click}
      />

      <div className="flex gap-5 mb-6">
        <div className="w-[127px]  flex flex-col items-start justify-start gap-[10px]">
        <img
          className="relative w-8 h-8 object-cover"
          alt=""
          src="/ic-traveler-1-1@2x.png"
        />
        <div className="relative leading-[170%]">
          <span className="font-medium">80,409</span>
          <span className="font-light text-darkgray"> travelers</span>
        </div>
      </div>
      <div className="w-[84px] h-[69px] flex flex-col items-start justify-start gap-[10px]">
        <img
          className="relative w-8 h-8 object-cover"
          alt=""
          src="/ic-cities-1@2x.png"
        />
        <div className="relative leading-[170%]">
          <span className="font-medium">1,492</span>
          <span className="font-light text-darkgray"> cities</span>
        </div>
      </div>
     
      <div className=" w-[101px] h-[69px] flex flex-col items-start justify-start gap-[10px]">
        <img
          className="relative w-8 h-8 object-cover"
          alt=""
          src="/ic-treasure-1@2x.png"
        />
        <div className="relative leading-[170%] flex flex-col">
          <span className="font-medium">862</span>
          <span className="font-light text-darkgray"> treasure</span>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default VacationForm;
