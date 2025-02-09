import { useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { useUrlPathStore } from "../../stores";
import Login from "./Login.tsx";
import Signup from "./Signup.tsx";
import OTP from "./OTP.tsx";
import Forgot_password from "./Forgot_password.tsx";
import Reset_password from "./Reset_password.tsx";
import Header from "../../components/Header.tsx";

function Auth_page() {
  const siteUrl = useLocation();
  const { urlPath, setUrlPath } = useUrlPathStore();

  useEffect(() => {
    setUrlPath(siteUrl.pathname); // stores the current page path to state
  }, [siteUrl]);

  return (
    <>
      <div className=" relative">
      <Header />

        <div className="min-h-screen flex justify-center p-10 w-full">

          {
            urlPath === "/login" ? (
              <Login />
            ) 
            : urlPath === "/signup" ? (
              <Signup />
            )
            : urlPath === "/otp" ? (
              <OTP />
            )
            : urlPath === "/forgot-password" ? (
              <Forgot_password />
            ) 
            : (
              urlPath === "/reset-password" && <Reset_password />
            )
          }
        </div>
      </div>
    </>
  );
}

export default Auth_page;
