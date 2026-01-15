import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser(null);
      localStorage.removeItem("Users");
      toast.success("Logout Successful");
      const modal = document.getElementById("my_modal_3");
      if (modal) modal.close();

    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };

  return (
    <button
      className="btn px-3 py-2 bg-red-500 text-white cursor-pointer rounded-md"
      onClick={handleLogout}
    >
      Logout
    </button>
  );
}

export default Logout;
