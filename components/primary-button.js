import { useMemo } from "react";

const PrimaryButton = ({
  ctaButtonText,
  propHeight,
  propWidth,
  propTop,
  propRight,
  propBottom,
  propLeft,
  onBtnPrimaryContainer1Click,
}) => {
  const btnPrimaryStyle = useMemo(() => {
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
      className=" my-5 h-[10.92%] w-[49.76%]  rounded bg-mediumslateblue shadow-[0px_8px_15px_rgba(50,_82,_223,_0.3)] flex flex-col py-[9px] px-0 box-border items-center justify-start cursor-pointer text-center text-lg text-white font-poppins"
      onClick={onBtnPrimaryContainer1Click}
      style={btnPrimaryStyle}
    >
      <div className="relative leading-[170%] font-medium inline-block w-[155px]">
        {ctaButtonText}
      </div>
    </div>
  );
};

export default PrimaryButton;
