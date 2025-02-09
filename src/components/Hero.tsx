import SearchBar from "./SearchBar";
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { useAuthenticationStore } from "../stores"


function Hero() {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const { isAuthenticated } = useAuthenticationStore();


  const toggleDropdown = (): void => {
    setDropdownOpen(!dropdownOpen);
  }

  return (
    <>
      <div className="bg-bgSecondary mx-8 my-3 p-10 rounded-3xl flex justify-between gap-20 items-center">
        <div>
          {
            isAuthenticated ?
            <img src="/images/hero-img-3.png" alt="random image of service workers"/>
            :
            <img src="/images/hero-img1.png" alt="random image of service workers" />
          }
        </div>

        <div className="grid gap-10 px-12">
          <div className="flex gap-3">
            <div className="w-max bg-buttonPrimary text-white flex items-center pl-4 gap-5 rounded-tl-xl rounded-bl-xl rounded-tr-md rounded-br-md p-3 cursor-pointer" onClick={toggleDropdown}>
              <div className="grid">
                <span className="text-xs text-buttonPrimaryText">Pick a location</span>
                <span className="text-lg">My Location</span>
              </div>
              {
                dropdownOpen ?
                  <ChevronUp />
                :
                  <ChevronDown />
              }
            </div>
            <div className="flex-[2] grid align-center">
              <SearchBar placeholder='Looking for ...' style='w-full bg-bgPrimary border border-primary rounded-2xl' iconColor='#222'/>
            </div>
          </div>
          <h1 className="text-center font-Helvetica px-5 font-bold leading-snug text-5xl">
            { isAuthenticated ? 
              'Connecting You to the Right Experts in Just a Few Clicks.' 
            : 
              'Connecting You to the Right Experts in Just a Few Clicks.'
            }
          </h1>
        </div>

        <div>
        {
            isAuthenticated ?
            <img src="/images/hero-img-4.png" alt="random image of service workers" />
            :
            <img src="/images/hero-img2.png" alt="random image of service workers" />
          }
        </div>

      </div>
    </>
  )
}

export default Hero