import RegisterForm from "@/components/forms/RegisterForm";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <>
      <div className="max-w-lg p-5 sm:p-10 mx-auto min-h-screen">
        <div className="shadow-lg  rounded-md p-5 flex flex-col gap-2 w-full mt-40">
          <div className="text-center">
            <h1 className="font-bold text-3xl text-gray-800 mb-4">Welcome!</h1>
            <h2 className="text-sm text-gray-600">
              Create your account and continue exploring
            </h2>
          </div>
          <RegisterForm />
          <div>
            <span className="text-gray-800">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-500 font-bold">
                Sign In
              </Link>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
