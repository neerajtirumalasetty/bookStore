import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    await axios
      .post("https://bookstore-gr4z.onrender.com/user/signup", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Signup Successfully");
          navigate(from, { replace: true });
        }
        localStorage.setItem("Users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          toast.error("Error: " + err.response.data.message);
        }
      });
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full flex max-w-md px-6 rounded">
        <div className="bg-base-200 shadow-xl rounded-lg p-6 relative">
          <form onSubmit={handleSubmit(onSubmit)}>
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg text-center">Signup</h3>

            {/* Name */}
            <div className="mt-4 space-y-2 space-x-2">
              <span>Name</span>
              <input
                type="text"
                placeholder="Enter your fullname"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("fullname", { required: true })}
              />
              {errors.fullname && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Email */}
            <div className="mt-4 space-x-2">
              <span>Email</span>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Password */}
            <div className="mt-4 space-x-2">
              <span>Password</span>
              <input
                type="text"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>

            {/* Buttons */}
            <div className="flex justify-around items-center mt-6">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-4 py-1 hover:bg-pink-700 duration-200"
              >
                Signup
              </button>

              <div className="flex items-center gap-2">
                <span className="text-lg">Have account?</span>
                <button
                  type="button"
                  className="btn btn-secondary rounded-md p-2"
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                >
                  Login
                </button>
              </div>
            </div>
          </form>
          <Login />
        </div>
      </div>
    </div>
  );
}

export default Signup;
