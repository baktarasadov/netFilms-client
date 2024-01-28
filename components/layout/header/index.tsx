"use client";
import { ImUserPlus } from "react-icons/im";
import { ImUserMinus } from "react-icons/im";
import Logo from "@/components/UI/logo";
import { dancingScript } from "@/utils/font";
import React, { useState } from "react";
import { RiMovie2Line } from "react-icons/ri";
import { BsBasket } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import Modal from "@/components/UI/modal";
import Link from "next/link";
import Input from "@/components/UI/input";
import SearchList from "@/components/search/searchList";
const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isShowSearch, setIsShowSearch] = useState<boolean>(false);
  const handleClick = () => {
    setOpenModal(!openModal);
    setIsLogin(!isLogin);
  };
  console.log("Render header");

  return (
    <>
      <header>
        <div className="container flex justify-between items-center h-20 ">
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
            <ul className="flex items-center gap-2 text-base">
              <li className="flex items-center  relative">
                <Input
                  className={`text-black rounded-l text-sm px-3 py-1 ${dancingScript.className}`}
                  placeholder="Search Movie"
                  onChange={() => setIsShowSearch(true)}
                />
                <span className="bg-[red] p-[6px] rounded-r">
                  <FaSearch />
                </span>
                {isShowSearch && (
                  <div className="absolute z-20 left-0 top-9 w-full">
                    <SearchList setIsShowSearch={setIsShowSearch} />
                  </div>
                )}
              </li>
              <li>
                <BsBasket />
              </li>
              <li>
                {isLogin ? (
                  <span className="text-white" onClick={() => handleClick()}>
                    <ImUserMinus />
                  </span>
                ) : (
                  <Link href={"/auth/login"}>
                    <ImUserPlus />
                  </Link>
                )}

                {openModal && (
                  <Modal handleClick={handleClick} title="Are You okey?" />
                )}
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
