import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <button
        className="btn rounded-md bg-white text-black p-2 hover:cursor-pointer hover:text-black"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Login
      </button>
      <dialog id="my_modal_3" className="modal backdrop-blur-lg">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg flex items-center justify-center">Login</h3>
          <div className="mt-2 space-y-2">
            {/*Email*/}
            <span>Email</span><br />
            <input type="email" 
            placeholder="Enter your Email"
            className="w-100 p-2 border rounded-md mt-2 outline-none"/>
            <br />
             {/*Password*/}
            <span>Password</span><br />
            <input type="email" 
            placeholder="Enter your Password"
            className="w-100 p-2 border rounded-md mt-2 outline-none"/>
          </div>
          <div className="flex mt-6 justify-around">
            <button className="btn bg-blue-500 rounded-md">
              Login
            </button>
            <p className="mt-2">
                  Not registered ? {""}<Link to="/signup" className="underline text-blue-300 cursor-pointer">Signup</Link>
            </p>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default Login;
