import React from "react";
import { mediaList } from "../../../constants/footer/socialMedia";
import Link from "next/link";
import { dancingScript } from "@/utils/font";
import { memo } from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container text-white">
          <div
            className={`border-b pb-4 flex items-center gap-3 ${dancingScript.className}`}
          >
            <p className="text-2xl hover:text-[red] ease-in-out duration-300">
              Follow Us
            </p>
            <div>
              <ul className="flex gap-3">
                {mediaList.map((media, index) => (
                  <li key={media.href}>
                    <Link target="_blank" href={media.href}>
                      <span className="text-2xl hover:text-[red] ease-in-out duration-300">
                        {<media.icon />}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p
            className={`text-center text-xl hover:text-[red] ease-in-out duration-300  mt-4 ${dancingScript.className}`}
          >
            &#8754; Baktar Asad 2024
          </p>
        </div>
      </footer>
    </>
  );
};

export default memo(Footer);
