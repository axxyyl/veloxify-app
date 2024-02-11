"use client";
import LockIcon from "@/components/icons/LockIcon";
import UserIcon from "@/components/icons/UserIcon";
import { registerUser } from "@/lib/actions";
import { useFormState, useFormStatus } from "react-dom";
import Button from "./Button";

const InitialState = {
  message: "",
  errors: [],
};
const RegisterForm = () => {
  const [state, formAction] = useFormState(registerUser, InitialState);

  return (
    <>
      <form action={formAction} className="flex flex-col gap-4">
        {state?.errors?.fullName?.map((e: string) => (
          <span className="text-red-600 text-sm" key={e}>
            {e}
          </span>
        )) ?? null}
        <div className="flex flex-col">
          <div className="flex items-center border border-gray-200  p-2 rounded-md">
            <UserIcon />
            <input
              type="text"
              required
              name="name"
              placeholder="Full Name"
              className="w-full border-none focus:border-none outline-none rounded-md p-1 text-sm"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {state?.errors?.username?.map((e: string) => (
            <span className="text-red-600 text-sm" key={e}>
              {e}
            </span>
          )) ?? null}
          <div className="flex items-center border border-gray-200  p-2 rounded-md">
            <UserIcon />
            <input
              type="text"
              //   required
              name="username"
              autoComplete="off"
              placeholder="Username"
              className="w-full border-none focus:border-none outline-none rounded-md p-1 text-sm"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {state?.errors?.email?.map((e: string) => (
            <span className="text-red-600 text-sm" key={e}>
              {e}
            </span>
          )) ?? null}
          <div className="flex items-center border border-gray-200  p-2 rounded-md">
            <UserIcon />
            <input
              type="email"
              //   required
              name="email"
              autoComplete="off"
              placeholder="Email"
              className="w-full border-none focus:border-none outline-none rounded-md p-1 text-sm"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {state?.errors?.password?.map((e: string) => (
            <span className="text-red-600 text-sm" key={e}>
              {e}
            </span>
          )) ?? null}
          <div className="flex items-center border border-gray-200  p-2 rounded-md">
            <LockIcon />
            <input
              type="password"
              name="password"
              //   required
              autoComplete="off"
              placeholder="Enter password"
              className="w-full border-none focus:border-none outline-none rounded-md p-1 text-sm"
            />
          </div>
        </div>
        <div className="">
          <Button name="Register" />
        </div>
      </form>
    </>
  );
};

export default RegisterForm;
