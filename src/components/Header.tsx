import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import { useAuthenticationStore, useUrlPathStore } from "../stores"
import SearchBar from './SearchBar';
import { Button } from './ui/button';
import { MapPin, MessageSquareText, Bell, BellDot } from "lucide-react"

function Header() {
  const { isAuthenticated } = useAuthenticationStore();
  const { urlPath, setUrlPath } = useUrlPathStore();
  const [atTop, setAtTop] = useState(true);
  const siteUrl = useLocation();


  useEffect(() => {
    setUrlPath(siteUrl.pathname); // stores the current page path to state
  }, [siteUrl]);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      setAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (document.documentElement.scrollTop > 0) {
      document.documentElement.scrollTop = 0;
    }
  }, [siteUrl]);
 
  
  return (
    <>
      <header className={`px-8 py-5 flex gap-5 bg-bgPrimary justify-between items-center text-textPrimary sticky top-0 z-50 ${ !atTop && 'shadow-md mb-7 py-1'}`}>
        <div className='flex-[1.6]'>
          <Link to='/'><img src="/images/Cync.svg" alt="site logo" className='scale-110'/></Link>
        </div>

        <div className='flex-[3] relative'>
          {
            isAuthenticated && urlPath === '/'?
            <Link to='/service-provider/providername/verify-profile'>
              <Button size='md' variant='default' className='outline outline-2 outline-buttonPrimary outline-offset-2 absolute right-0 -top-6'>Become a service provider</Button>
            </Link>
            :
            isAuthenticated &&  urlPath !== '/' ?
              <SearchBar placeholder='Looking for...' style='bg-softWhite shadow-xs' iconColor='#767676'/>
            :
              <div className='flex gap-9  items-center justify-start text-center'>
                <Link to='/'><span className='linkHover'>Hire a technician</span></Link>
                <Link to='/'><span className='linkHover'>Become a technician</span></Link>
                <Link to='/'><span className='linkHover'>FAQ</span></Link>
              </div>
          }
        </div>

        <div className='flex-[2] flex flex-row justify-end'>
          {
            isAuthenticated ?
              <div className='flex gap-10 items-center'>
                <div className='flex gap-5 mx-3'>
                {/* // TODO: Implement message and notification system */}
                  {
                    false ?
                    <div className='relative'>
                      <span className='absolute -top-[13px] -right-[13px] text-xs text-white bg-primary rounded-[3px] px-[6px] py-[1px]'>{2}</span>
                      <MessageSquareText size='26' color='#767676' stroke='#135d1b' strokeWidth='2' className='cursor-pointer hover:scale-110 transition-all'/>
                    </div>
                    :
                    <MessageSquareText size='26' color='#767676' className='cursor-pointer hover:stroke-buttonPrimary hover:scale-110 transition-all'/>
                  }
                  <Link to='/notifications'>
                    {
                      false ?
                      <div className='relative'>
                        <span className='absolute -top-[13px] -right-[13px] text-xs text-white bg-primary rounded-[3px] px-[6px] py-[1px]'>{89}</span>
                        <BellDot size='26' color='#767676' stroke='#135d1b' strokeWidth='2' className='cursor-pointer hover:scale-110 transition-all'/>
                      </div>
                      :
                      <Bell size='26' color='#767676' className='cursor-pointer hover:stroke-buttonPrimary hover:scale-110 transition-all'/>
                    }
                  </Link>
                </div>
                <Link to='/profile'>
                  <div className='flex gap-5 items-center mr-5 hover:scale-105 transition-all'>
                    <div className='text-right'>
                      <p className='font-Helvetica text-2xl'>
                        <span className='mr-2 text-textSecondary'>Hi<span className='text-primary'>,</span></span>
                        <span className='text-primary'>Olatunji</span>
                      </p>
                      <p className='text-xs'>
                        <MapPin className='inline mr-1' size='16' color='#df4949'/>
                        <span>Shomolu, Lagos</span>
                      </p>
                    </div>
                    <img src="/images/lady.jpg" alt="profile image" className='w-14 border-2 border-buttonSecondary rounded-[50%] aspect-square object-cover'/>
                  </div>
                </Link>
              </div>
            :
              <div className='flex gap-5 justify-between items-center'>
                <Link to='/login'>
                  <Button size='lg' variant='secondary'>Login</Button>
                </Link>

                <Link to='/signup'>
                  <Button size='lg'>Create Account</Button>
                </Link>
              </div>
          }
        </div>
      </header>
    </>
  )
}

export default Header