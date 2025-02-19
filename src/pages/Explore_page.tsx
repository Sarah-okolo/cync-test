// import { useAuthenticationStore } from "../stores"
import Header from "../components/Header";
import Hero from '../components/Hero'
import Sidebar from "../components/Sidebar";
import ServicesPosted from "../components/ServicesPosted";
import Footer from "../components/Footer";


function Explore_page() {
  // const { isAuthenticated } = useAuthenticationStore();

  return (
    <>
      <div className="">
        <Header />
        {/* { */}
          {/* !isAuthenticated && */}
          <Hero />
        {/* } */}
        <div className="flex gap-8 p-8">
          <Sidebar />
          <ServicesPosted />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Explore_page