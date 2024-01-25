import { IInputListType } from "@/types/share/input";
import { ImUser } from 'react-icons/im';
import { MdEmail, MdOutlinePassword } from "react-icons/md";
import { TbPassword } from "react-icons/tb";

export const inputRegisterList: IInputListType[] = [
    {
        id: 1,
        name: "fullname",
        type: "text",
        placeholder: "Your Full Name",
        icon: ImUser
    },
    {
        id: 2,
        name: "email",
        type: "email",
        placeholder: "Your Email Address",
        icon: MdEmail
    },
    {
        id: 3,
        name: "password",
        type: "password",
        placeholder: "Your Password",
        icon: TbPassword
    },
    {
        id: 4,
        name: "confirmPassword",
        type: "password",
        placeholder: "Your Password Again",
        icon: MdOutlinePassword
    },
]