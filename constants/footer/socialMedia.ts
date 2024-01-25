import { ISocialMedia } from "@/types/footer/ISocialMedia";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { PiLinkedinLogo } from "react-icons/pi";
import { RiGithubLine } from "react-icons/ri";

export const mediaList: ISocialMedia[] = [
    {
        href: "https://www.linkedin.com/in/baktar-asadov",
        icon: PiLinkedinLogo
    }, {
        href: "https://github.com/bekteresedov",
        icon: RiGithubLine
    },
    {
        href: "https://www.instagram.com/asadofh_/",
        icon: IoLogoInstagram
    },
    {
        href: "https://www.facebook.com/Baktar%20Asad",
        icon: CiFacebook
    },

]