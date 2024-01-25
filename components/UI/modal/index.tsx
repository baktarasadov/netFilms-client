"use client";
import { IModal } from "@/types/ui/IModal";
import { memo } from "react";
import Button from "../button";
import { IoClose } from "react-icons/io5";
import OutsideClickHandler from "react-outside-click-handler";
const Modal: React.FC<IModal> = ({ handleClick, title }) => {
  console.log("Rebalancing");

  return (
    <>
      <div className="bg-[black] w-screen h-screen absolute left-0 top-0 ">
        <div className="flex justify-center mt-[200px] ">
          <OutsideClickHandler
            onOutsideClick={() => {
              handleClick();
            }}
          >
            <div className="flex flex-col items-center gap-5 bg-[#40A2D8] w-fit rounded-xl p-10 relative">
              <span
                className="absolute top-1 right-2 text-2xl"
                onClick={() => handleClick()}
              >
                <IoClose />
              </span>
              <p>{title}</p>
              <div className="flex gap-[10px]">
                <Button
                  className="btn bg-[green] w-[100px]"
                  onClick={() => handleClick()}
                >
                  Continue
                </Button>
                <Button
                  className="btn bg-[red] w-[100px]"
                  onClick={() => handleClick()}
                >
                  Back
                </Button>
              </div>
            </div>
          </OutsideClickHandler>
        </div>
      </div>
    </>
  );
};

export default memo(Modal);
