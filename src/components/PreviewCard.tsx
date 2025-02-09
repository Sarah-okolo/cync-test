import { Link } from 'react-router-dom'
import { MapPin } from "lucide-react"

function PreviewCard() {
  return (
    <>
      <Link to="/">
        <div className="flex flex-col rounded-xl shadow-lg bg-bgSecondary transition-[0.3] hover:smoothScale">
          <div className="">
            <img src="/images/demo-img.png" alt="preview" className="h-full w-full object-cover rounded-t-xl"/>
          </div>

          <div className="py-3 px-5">
            <div>
              <p className='font-Helvetica text-xl'>
                <span className='text-textPrimary font-bold'>Fine wood crafts</span>
              </p>
              <p className='text-xs text-textSecondary'>
                <MapPin className='inline mr-1' size='16' color='#df4949'/>
                <span>Shomolu, Lagos</span>
              </p>
            </div>

            <p className='py-4 text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor unde quo, aperiam rerum ipsum nihil...</p>

            <div className='flex justify-between gap-3 items-center'>
              <div>
                <p className='text-sm'>From <span className='text-primary font-bold'>#4,000</span></p>
              </div>

                <div className='flex gap-2 items-center'>
                  <div className='text-right'>
                    <p className='text-xs'>
                      <span>By: </span>
                      <span className='text-primary'>Olatunji Adebola</span>
                    </p>
                  </div>
                  <img src="/images/placeholder-img.png" alt="profile image" className='w-8 border-2 border-primary rounded-[50%] aspect-square'/>
                </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default PreviewCard