"use client";
import Button from "@/components/UI/button";
import Input from "@/components/UI/input";
import { registerSchema } from "@/schema/register";
import { IFormLogin } from "@/types/auth/ILogin";
import { dancingScript, roboto } from "@/utils/font";
import { useFormik } from "formik";
import Link from "next/link";
import React, { memo, useState } from "react";
import { MdEmail } from "react-icons/md";
import { TbPassword } from "react-icons/tb";
import { VscEyeClosed } from "react-icons/vsc";
import { VscEye } from "react-icons/vsc";
const Login = () => {
  const [sohowError, setShowError] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(true);
  const onSubmit = async (values: IFormLogin) => {
    console.log(values);
  };
  const formik = useFormik<IFormLogin>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit,
  });

  const handleButtonClick = (): void => {
    if (Object.keys(formik.errors).length > 0) {
      setShowError(true);
    } else {
      setShowError(false);
    }
  };
  return (
    <>
      <div>
        <div className="flex flex-col items-center">
          <h2
            className={`text-white uppercase mb-2 text-2xl ${dancingScript.className}`}
          >
            Login
          </h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="w-[250px]">
              <div className="input-group mb-3">
                <span className="text-xl ml-2 ">
                  <MdEmail />
                </span>
                <Input
                  value={formik.values.email}
                  onChange={(e) => {
                    formik.handleChange(e);
                    setShowError(false);
                  }}
                  className="bg-inherit text-sm"
                  placeholder="Your email address"
                  type="email"
                  id="email"
                />
              </div>
              {sohowError && (
                <p className="text-[red] text-xs">{formik.errors.email}</p>
              )}
            </div>
            <div className="w-[250px]">
              <div className="input-group mb-3 relative">
                <span className="text-xl ml-2 ">
                  <TbPassword />
                </span>
                <Input
                  value={formik.values.password}
                  onChange={(e) => {
                    formik.handleChange(e);
                    setShowError(false);
                  }}
                  className="bg-inherit text-sm"
                  placeholder="Your password"
                  type={`${showPassword ? "password" : "text"}`}
                  id="password"
                />
                <span
                  className="absolute top-[15px] right-4 text-xl text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VscEye /> : <VscEyeClosed />}
                </span>
              </div>

              {sohowError && (
                <p className="text-[red] text-xs">{formik.errors.password}</p>
              )}
            </div>
            <Button
              className={`btn-red mt-1 ${roboto.className}`}
              onClick={handleButtonClick}
            >
              Login
            </Button>
            <Link
              href={"/register"}
              className="text-white text-xs border-b mt-2 w-fit"
            >
              Do you no have account?
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default memo(Login);
