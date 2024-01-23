import { ImUserPlus } from "react-icons/im";
import Logo from "@/components/UI/logo";
import { dancingScript } from "@/utils/font";
import React from "react";
import { RiMovie2Line } from "react-icons/ri";
import { ImUserMinus } from "react-icons/im";
import { CiSearch } from "react-icons/ci";
import { BsBasket } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
const Header = () => {
  return (
    <>
      <header>
        <div className="container flex justify-between items-center h-20">
          <div>
            <Logo
              className={`flex items-center gap-1 ${dancingScript.className}`}
              href="/"
            >
              <p className="text-[red] text-4xl">
                <RiMovie2Line />
              </p>
              <h2 className="">
                <span className="text-2xl text-white uppercase">Net</span>
                <span className="text-[red] text-xl">Film</span>
              </h2>
            </Logo>
          </div>
          <div className="text-white">
            <ul className="flex gap-5">
              <li>Lorem.</li>
              <li>Quia.</li>
              <li>Laudantium.</li>
            </ul>
          </div>
          <div className="text-white">
            <ul className="flex gap-2 text-base">
              <li>
                <FaSearch />
              </li>
              <li>
                <BsBasket />
              </li>
              <li>
                <ImUserPlus />
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
