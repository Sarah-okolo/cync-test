import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useUrlPathStore } from "../../stores";
import Login from "./Login.tsx";
import Signup from "./Signup.tsx";

function Auth_page() {
  const siteUrl = useLocation();
  const { urlPath, setUrlPath } = useUrlPathStore();

  useEffect(() => {
    setUrlPath(siteUrl.pathname); // stores the current page path to state
  }, [siteUrl]);

  return (
    <>
      <div className=" relative">
        <div className="min-h-screen flex justify-center p-10 w-full">

          {
            urlPath === "/login" ?
              <Login />
            : urlPath === "/signup" &&
              <Signup />
          }
        </div>
      </div>
    </>
  );
}

export default Auth_page;
