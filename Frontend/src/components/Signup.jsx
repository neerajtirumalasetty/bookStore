import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div id="my_modal_3" className="modal modal-open backdrop-blur-lg">
          <div className="modal-box">
            <form method="dialog">
              <Link to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </Link>
            </form>
            <h3 className="font-bold text-lg flex items-center justify-center">
              Signup
            </h3>
            <div className="mt-2 space-y-2">
              {/*Name*/}
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Name"
                className="w-full p-2 border rounded-md mt-2 outline-none"
              />
              <br />
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your Email"
                className="w-full p-2 border rounded-md mt-2 outline-none"
              />
              <br />
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your Password"
                className="w-full p-2 border rounded-md mt-2 outline-none"
              />
            </div>
            <div className="flex mt-6 justify-around">
              <button className="btn bg-blue-500 rounded-md">Signup</button>
              <p className="mt-2">
                Have account ? {""}
                <Link to="/" 
                className="underline text-blue-300 cursor-pointer">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
