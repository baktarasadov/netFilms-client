import React, { memo } from "react";
import SearchItem from "../searchItem";
import { ISearchList } from "@/types/header/ISearchList";
import OutsideClickHandler from "react-outside-click-handler";
import { dancingScript } from "@/utils/font";

const SearchList: React.FC<ISearchList> = ({ setIsShowSearch }) => {
  console.log("Render");

  return (
    <>
      <OutsideClickHandler
        onOutsideClick={() => {
          setIsShowSearch(false);
        }}
      >
        <div className="border w-full rounded bg-black p">
          <h2
            className={`text-white text-center bg-[red] py-1 text-xl rounded mb-2 ${dancingScript.className}`}
          >
            Search
          </h2>
          <div className="max-h-[300px] overflow-auto">
            <div>
              <SearchItem />
              <SearchItem /> <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              {/* <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem /> <SearchItem />
              <SearchItem />
              <SearchItem />
              <SearchItem /> */}
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </>
  );
};

export default memo(SearchList);
