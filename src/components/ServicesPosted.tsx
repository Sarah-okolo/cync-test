import PreviewCard from "./PreviewCard";
import { Link } from 'react-router-dom'

function ServicesPosted() {

  const services = [
    {
      id: 1,
      name: 'Fine wood crafts with perfect finishing and design for your home',
      location: 'Shomolu, Lagos',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor unde quo, aperiam rerum ipsum nihil consectetur adipisicing elit',
      price: 4000,
      provider: 'Olatunji Adebola',
      providerImage: '/images/lawal-img.png',
      image: '/images/demo-img.png'
    },
    {
      id: 2,
      name: 'Fine wood crafts',
      location: 'Shomolu, Lagos',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor unde quo, aperiam rerum ipsum nihil...',
      price: 4000,
      provider: 'Olatunji Adebola',
      providerImage: '/images/lawal-img.png',
      image: '/images/demo-img.png'
    },
    {
      id: 3,
      name: 'Fine wood crafts',
      location: 'Shomolu, Lagos',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor unde quo, aperiam rerum ipsum nihil...',
      price: 4000,
      provider: 'Olatunji Adebola',
      providerImage: '/images/lawal-img.png',
      image: '/images/demo-img.png'
    },
    {
      id: 4,
      name: 'Fine wood crafts',
      location: 'Shomolu, Lagos',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor unde quo, aperiam rerum ipsum nihil...',
      price: 4000,
      provider: 'Olatunji Adebola',
      providerImage: '/images/lawal-img.png',
      image: '/images/demo-img.png'
    },
    {
      id: 5,
      name: 'Fine wood crafts',
      location: 'Shomolu, Lagos',
      description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor unde quo, aperiam rerum ipsum nihil...',
      price: 4000,
      provider: 'Olatunji Adebola',
      providerImage: '/images/lawal-img.png',
      image: '/images/demo-img.png'
    }
  ]
  
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {
          services.map((service, index) => (
            <Link to={`/viewservice`} key={index}>
              <PreviewCard 
                serviceImage={service.image}
                serviceName={service.name}
                providerLocation={service.location}
                description={service.description}
                startingPrice={service.price}
                provider={service.provider}
                providerImage={service.providerImage}
              />
            </Link>
          ))
        }
      </div>
    </>
  )
}

export default ServicesPosted