import Auth_page from "./pages/auth pages/Auth_page";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useAuthenticationStore } from './stores';
import ProtectedRoute from "./components/ProtectedRoute";
import Page_not_found from "./pages/404 page/Page_not_found";
import Explore_page from "./pages/Explore_page";
import { Tooltip as ReactTooltip } from 'react-tooltip'
import { Toaster } from "./components/ui/toaster"
import ViewService from "./pages/ViewService";
import CompleteProfile from "./pages/user pages/CompleteProfile";
import UserProfile from "./pages/user pages/UserProfile";
import Chat from "./pages/Chat";
import NotificationPage from './pages/Notifications';


function App() {
  
  return (
    <>
    <div className="max-w-[1540px] mx-auto">
      <ReactTooltip
        id="info-tooltip"
        place="right"
        delayShow={100}
        style={{ zIndex: 500 } as React.CSSProperties}
      />
      <Toaster />

      <BrowserRouter>
        <Routes>
          {/* Redirect root path "/" to "/invoices" or "/login" if user is unauthenticated*/}
          <Route path="/" element={<Explore_page />} />

          {/* Authentication routes */}
          <Route path="/login" element={<Auth_page />} />
          <Route path="/signup" element={<Auth_page />} />
          <Route path="/forgot-password" element={<Auth_page />} />
          <Route path="/reset-password" element={<Auth_page />} />

          {/* Authentication protected routes */}
          {/* <Route path="/services" element={<ProtectedRoute element={} />}>
            <Route index element={} />
          </Route> */}
          {/* <Route path='/service/:serviceId' element={<ViewService />} /> */}

          {/* View service page (service/id) */}
          <Route path="/viewservice" element={<ViewService />} />

          {/* Finder User profile routes */}
          <Route  path='/user/:id/profile' element={<ProtectedRoute element={<UserProfile />} />}>
            <Route path='edit' element={<UserProfile />} />
          </Route>

          {/* Provider User profile routes */}
          <Route path="/service-provider/providername" element={<ProtectedRoute element={<CompleteProfile />} />} />
          <Route path="/service-provider/providername/verify-profile" element={<ProtectedRoute element={<CompleteProfile />} />} />

          <Route path="/chat" element={<ProtectedRoute element={<Chat />} />} />
          <Route path="/notifications" element={<ProtectedRoute element={<NotificationPage />} />} />

          {/* Displays page-not-found for unknown routes */}
          <Route path="*" element={<Page_not_found />} />
        </Routes>
      </BrowserRouter>
    </div>
    </>
  )
}

export default App