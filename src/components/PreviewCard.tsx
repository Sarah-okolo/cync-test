import { MapPin } from "lucide-react"

type PreviewCardProps = {
  serviceImage: string,
  serviceName: string,
  providerLocation: string,
  description: string,
  startingPrice: number,
  provider: string,
  providerImage: string,

}

function PreviewCard(props: PreviewCardProps) {
  const { serviceImage, serviceName, providerLocation, description, startingPrice, provider, providerImage } = props;

  return (
    <>
        <div className="flex flex-col rounded-xl shadow-lg bg-lightGreen transition-[0.3] hover:smoothScale">
          <div className="">
            <img src={serviceImage} alt={serviceName} className="h-full w-full object-cover rounded-t-xl"/>
          </div>

          <div className="py-3 px-5">
            <div>
              <p className='font-Helvetica text-lg'>
                <span className='text-textPrimary font-bold line-clamp-1'>{serviceName}</span>
              </p>
              <p className='text-xs text-textSecondary mt-1'>
                <MapPin className='inline mr-1' size='16' color='#df4949'/>
                <span>{providerLocation}</span>
              </p>
            </div>

            <p className='my-5 text-sm line-clamp-3'>{description}</p>

            <div className='flex justify-between gap-3 items-center'>
              <div>
                <p className='text-sm'>From <span className='text-primary font-bold'>#{startingPrice}</span></p>
              </div>

                <div className='flex gap-2 items-center'>
                  <div className='text-right'>
                    <p className='text-xs'>
                      <span>By: </span>
                      <span className='text-primary'>{provider}</span>
                    </p>
                  </div>
                  <img src={providerImage} alt={provider} className='w-8 border-buttonSecondary border-2 border-primary rounded-[50%] aspect-square'/>
                </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default PreviewCard