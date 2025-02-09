import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"


function Footer() {
  const date = new Date();
  return (
    <>
      <footer className="p-16 bg-bgSecondary text-textSecondary grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-12">
        <div className=''>
        <Link to='/'><span className="font-bold font-Poppins text-4xl relative bottom-1 text-textPrimary">cync</span></Link>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4 text-textPrimary">Company</h3>
          <ul>
            <li className="mb-2"><Link to='' className='linkHover'>About</Link></li>
            <li className="mb-2"><Link to='' className='linkHover'>FAQs</Link></li>
            <li className="mb-2"><Link to='' className='linkHover'>Blog</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4 text-textPrimary">Legal</h3>
          <ul>
            <li className="mb-2"><Link to='' className='linkHover'>Terms</Link></li>
            <li className="mb-2"><Link to='' className='linkHover'>Privacy policy</Link></li>
            <li className="mb-2"><Link to='' className='linkHover'>License</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4 text-textPrimary">Contact</h3>
          <ul>
            <li className="mb-2">
              <span>123, Fake Street, Fake City</span>
            </li>
            <li className="mb-2">
              <span>
                <a href="mailto:contact@cync.com" className='linkHover'>contact@cync.com</a>
              </span>
            </li>
            <li className="mb-2">
              <span><a href="tel:+2341234567890" className='linkHover'>+ (234) 123 456 7890</a></span>
            </li>
          </ul>
        </div>
        <div className='flex gap-3 my-3 -ml-2'>
            <Facebook className='hover:text-facebook'/>
            <Instagram className='hover:text-instagram'/>
            <Twitter className='hover:text-twitter'/>
            <Youtube className='hover:text-youtube relative bottom-1' size='29'/>
          </div>

        <div className="col-span-full mt-8">
          <p className="text-center text-xs">
            &copy; {date.getFullYear()} Cync. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer