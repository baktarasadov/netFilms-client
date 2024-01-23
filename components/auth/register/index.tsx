"use client";
import Button from "@/components/UI/button";
import Input from "@/components/UI/input";
import { inputRegisterList } from "@/constants/auth/IRegister";
import { registerSchema } from "@/schema/register";
import { IFormRegister } from "@/types/auth/IRegister";
import { dancingScript, roboto } from "@/utils/font";
import { useFormik } from "formik";
import Link from "next/link";
import React, { memo, useState } from "react";
const Register = () => {
  const [sohowError, setShowError] = useState<boolean>(false);

  const onSubmit = async (values: IFormRegister) => {
    console.log(values);
  };
  const formik = useFormik<IFormRegister>({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
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
            Sign In
          </h2>
          <form onSubmit={formik.handleSubmit}>
            {inputRegisterList.map((element) => (
              <div key={element.id} className="w-[250px]">
                <div className="input-group mb-3">
                  <span className="text-xl ml-2 ">
                    {element.icon && <element.icon />}
                  </span>
                  <Input
                    value={formik.values[element.name as keyof IFormRegister]}
                    onChange={(e) => {
                      formik.handleChange(e);
                      setShowError(false);
                    }}
                    className="bg-inherit text-sm"
                    placeholder={element.placeholder}
                    type={element.type}
                    id={element.name}
                  />
                </div>
                {sohowError && (
                  <p className="text-[red] text-xs">
                    {formik.errors[element.name as keyof IFormRegister]}
                  </p>
                )}
              </div>
            ))}
            <Button
              className={`btn-red mt-1 ${roboto.className}`}
              onClick={handleButtonClick}
            >
              Sign In
            </Button>
            <Link
              href={"/login"}
              className="text-white text-xs border-b mt-2 w-fit"
            >
              Do you have account?
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default memo(Register);
