import Auth_page from "./pages/auth pages/Auth_page";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useAuthenticationStore } from './stores';
import ProtectedRoute from "./components/ProtectedRoute";
import Page_not_found from "./pages/404 page/Page_not_found";
import Explore_page from "./pages/Explore_page";
import { Tooltip as ReactTooltip } from 'react-tooltip'

function App() {
  const { isAuthenticated } = useAuthenticationStore();
 
  return (
    <>
    <div className="max-w-[1540px] mx-auto">
      <ReactTooltip
        id="info-tooltip"
        place="right"
        delayShow={100}
        style={{ zIndex: 500 } as React.CSSProperties}
      />

      <BrowserRouter>
        <Routes>
          {/* Redirect root path "/" to "/invoices" or "/login" if user is unauthenticated*/}
          <Route path="/" element={<Explore_page />} />

          {/* Authentication routes */}
          <Route path="/login" element={<Auth_page />} />
          <Route path="/signup" element={<Auth_page />} />
          <Route path="/forgot-password" element={<Auth_page />} />
          <Route path="/reset-password" element={<Auth_page />} />
          <Route path="/otp" element={<Auth_page />} />

          {/* Authentication protected routes */}
          {/* <Route path="/services" element={<ProtectedRoute element={} />}>
            <Route index element={} />
          </Route> */}
          {/* <Route path='/country/:countryName' element={<CountriesDetails />} /> */}


          {/* Displays page-not-found for unknown routes */}
          <Route path="*" element={<Page_not_found />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App